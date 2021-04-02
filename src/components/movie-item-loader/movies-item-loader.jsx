import React from "react";
import ContentLoader from "react-content-loader";

const MovieItemLoader = () => {
  return (
    <>
      {new Array(5).fill("").map((_, index) => (
        <ContentLoader
          speed={2}
          width={230}
          height={420}
          viewBox="0 0 230 420"
          backgroundColor="#f0f0f0"
          foregroundColor="#e6e6e6"
          key={index}
        >
          <rect x="0" y="0" rx="5" ry="5" width="230" height="345" />
          <rect x="0" y="355" rx="5" ry="5" width="230" height="15" />
          <rect x="0" y="400" rx="5" ry="5" width="30" height="15" />
        </ContentLoader>
      ))}
    </>
  );
};

export default MovieItemLoader;
