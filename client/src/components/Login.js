import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const credentials = {
  username: "",
  password: "",
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] = useState(credentials);

  let history = useHistory();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", login)
      .then((res) => {
        console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);
        history.push("/colors");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ width: "20%" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <p>
          <label>
            Username:&nbsp;
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={login.username}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Password:&nbsp;
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={login.password}
              onChange={handleChange}
            />
          </label>
        </p>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
