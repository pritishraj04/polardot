import React from "react";
import { css } from "@emotion/core";
import "./Loading.css";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
  return (
    <div className="loading">
      <HashLoader css={override} size={100} color={"#ffffff"} />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
