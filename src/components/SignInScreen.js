import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Loading from "./Loading";
import UserContext from "./../contexts/UserContext";

export default function Login() {
  // eslint-disable-next-line
  const { user, setUser, Error } = useContext(UserContext);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function requestAcess(loginObj) {
    setLoading(true);
    const promise = axios.post("http://localhost:5000/login", loginObj);

    promise.then((res) => {
      const user = {
        email: res.data.email,
      };
      const token = res.data.token;

      localStorage.setItem("TOKEN", token);
      localStorage.setItem("USER", JSON.stringify(user));
      navigate("/");
      setLoading(false);
    });

    promise.catch((err) => {
      Error(err);
      navigate("/login");
      setLoading(false);
    });
  }

  function sendInputData(e) {
    e.preventDefault();
    requestAcess(login);
  }

  return (
    <Div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>twivent</h1>
          <form onSubmit={(e) => sendInputData(e)}>
            <TextField
              className="textfield"
              type="email"
              placeholder="E-mail"
              value={login.email}
              disabled={loading}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              required
            />
            <TextField
              className="textfield"
              type="password"
              placeholder="Senha"
              value={login.password}
              disabled={loading}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              required
            />
            <Button
              type="submit"
              variant="outlined"
              sx={{ backgroundColor: "#5b8291", opacity: 0.7 }}
            >
              Entrar
            </Button>
          </form>

          <Link to="/signup">Primeira vez? Cadastre-se</Link>
        </>
      )}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Roboto", cursive;
    font-weight: bold;
    font-size: 400%;
    line-height: 50px;
    margin-bottom: 20px;
  }

  h2 {
    font-weight: bold;
    color: #ffffff;
    font-size: 25px;
    line-height: 50px;
    margin: -5px 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10px;
  }

  button {
    width: 31%;
    height: 54px;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    cursor: pointer;
    background-color: #5b8291;
    opacity: 1;
  }

  .textfield {
    width: 60%;
    max-width: 470px;
    font-size: 12px;
    margin-bottom: 13px;
  }

  input {
    background-color: white;
    border-radius: 5px;
  }

  a {
    color: #2E424D;
    text-decoration: underline;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }
`;
