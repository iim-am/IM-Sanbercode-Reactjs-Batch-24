import React, { useState, useContext } from "react";
import { LoginContext } from "./Route/LoginContext";

const Login = () => {
  const [Login, setLogin] = useContext(LoginContext);
  const [inputLogin, setInputLogin] = useState({ user: "", password: "" });

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(Login.lists.user);

    console.log(`${Login.lists.user} === ${inputLogin.user}`);
    console.log(`${Login.lists.password} === ${inputLogin.password}`);

    if (
      Login.lists.user === inputLogin.user &&
      Login.lists.password === inputLogin.password
    ) {
      setLogin({ ...Login, token: "valid" });
      alert("Login Berhasil");
      console.log(Login.token);
    } else {
      alert("User & Password Salah");
    }
  };

  const handleFrom = (event) => {
    let typeOfInput = String(event.target.name);

    switch (typeOfInput) {
      case "user": {
        setInputLogin({ ...inputLogin, user: event.target.value });
        break;
      }
      case "password": {
        setInputLogin({ ...inputLogin, password: event.target.value });
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <section>
      <div className="login">
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            name="user"
            value={inputLogin.user}
            type="text"
            style={{ marginBottom: 20 }}
            onChange={handleFrom}
          />
          <br />
          <label>Password</label>
          <input
            name="password"
            value={inputLogin.password}
            type="password"
            style={{ marginBottom: 20 }}
            onChange={handleFrom}
          />
          <br />
          <input value="submit" type="submit"></input>
        </form>
      </div>
    </section>
  );
};

export default Login;
