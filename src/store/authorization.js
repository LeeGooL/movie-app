import { action, makeAutoObservable } from "mobx";
import axios from "axios";
import Cookies from "universal-cookie";

import { API_URL, API_KEY_3 } from "@constants/api";

const cookies = new Cookies();

class Authorization {
  isLoginFormVisible = false;
  session_id = null;
  statusAuthorization = null;
  userData = null;

  constructor() {
    makeAutoObservable(this);
  }

  setVisibleLoginForm(value) {
    this.isLoginFormVisible = value;
  }

  getAccountId() {
    return this.userData ? this.userData.id : null;
  }

  getSessionId() {
    if (this.userData !== null) {
      return this.userData.id;
    }
  }

  fetchApi(obj) {
    return new Promise((resolve, reject) => {
      if (obj.method === "POST") {
        axios({
          method: obj.method,
          mode: obj.mode,
          url: obj.url,
          headers: obj.headers,
          data: obj.data,
        })
          .then(
            action((response) => {
              if (response.status < 400) {
                resolve(response.data);
              } else {
                reject(response);
              }
            })
          )
          .catch(
            action(() => {
              if (!obj.data.username) {
                this.statusAuthorization = "error";
              }
            })
          );

        return;
      }

      axios.get(`${obj.url}`).then(
        action(({ data }) => {
          if (obj.url.includes("session_id")) {
            this.userData = data;
          }

          resolve(data);
        })
      );
    });
  }

  async signIn(username, password) {
    try {
      const data = await this.fetchApi({
        url: `${API_URL}/authentication/token/new?api_key=${API_KEY_3}`,
      });

      const result = await this.fetchApi({
        method: "POST",
        url: `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_3}`,
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        data: {
          username,
          password,
          request_token: data.request_token,
        },
      });

      const { session_id } = await this.fetchApi({
        url: `${API_URL}/authentication/session/new?api_key=${API_KEY_3}`,
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        data: {
          request_token: result.request_token,
        },
      });

      cookies.set("session_id", session_id, {
        path: "/",
        maxAge: 3600,
      });

      await this.fetchApi({
        url: `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new Authorization();
