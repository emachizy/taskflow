import React from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username: "JohnDoe" }));
  };

  return <button onClick={handleLogin}>Login</button>;
};

Login.propTypes = {};

export default Login;
