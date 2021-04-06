import React, { useState } from "react";

import { observer } from "mobx-react-lite";
import authorization from "@store/authorization";

import { Modal, Button, Spin, Form, Input } from "antd";

import "antd/dist/antd.css";
import styles from "./authorization-form.module.scss";

const AuthorizationForm = observer(() => {
  const [confirmLoading, setConfirmLoading] = useState(
    authorization.session_id === null ? false : true
  );

  const handleSignIn = ({ username, password }) => {
    authorization.signIn(username, password);
    setConfirmLoading(true);
  };

  const handleCancel = () => {
    authorization.setVisibleLoginForm(false);
  };

  return (
    <div>
      {authorization.userData === null ? (
        <Modal
          className={styles.authorizationForm}
          visible={authorization.isLoginFormVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <h1 className={styles.authorizationForm__title}>Authorization</h1>

          <Form
            name="basic"
            onFinish={handleSignIn}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                className={styles.authorizationForm__btn}
                htmlType="submit"
              >
                {confirmLoading ? (
                  <Spin
                    className={styles.authorizationForm__btnIcon}
                    size="small"
                  />
                ) : null}{" "}
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      ) : null}
    </div>
  );
});

export default AuthorizationForm;
