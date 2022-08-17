import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Loading from "./Loading";
import UserContext from "./../contexts/UserContext";

export default function SignUp() {
  const { Error } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [registerUser, setregisterUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function register(registerUser) {
    setLoading(true);
    if (registerUser.password !== registerUser.confirmPassword) {
      alert("Senhas diferentes!");
      setregisterUser({ ...registerUser, password: "", confirmPassword: "" });
      return;
    };

    const promise = axios.post("http://twivent-back.herokuapp.com/", registerUser);

    promise.then(() => {
      navigate("/signin");
    });

    promise.catch((err) => {
      if (err.response.status === 409) {
        alert("E-mail já cadastrado!");
        setLoading(false);
      } else {
        Error(err);
        setLoading(false);
      }
    });
  };

  function sendUser(e) {
    e.preventDefault();
    register(registerUser);
  };

  return (
    <Div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Crie uma nova conta</h1>
          <form
            onSubmit={(e) => {
              sendUser(e);
            }}
          >
            <TextField
              className="textfield"
              type="email"
              placeholder="Email"
              value={registerUser.email}
              disabled={loading}
              onChange={(e) =>
                setregisterUser({ ...registerUser, email: e.target.value })
              }
              required
            />
            <TextField
              className="textfield"
              type="password"
              placeholder="Senha"
              value={registerUser.password}
              disabled={loading}
              onChange={(e) =>
                setregisterUser({ ...registerUser, password: e.target.value })
              }
              required
            />
            <TextField
              className="textfield"
              type="password"
              placeholder="Confirme a senha"
              value={registerUser.confirm}
              disabled={loading}
              onChange={(e) => {
                setregisterUser({ ...registerUser, confirmPassword: e.target.value });
              }}
              required
            />
            <Button
              type="submit"
              variant="outlined"
              sx={{ backgroundColor: "#5b8291", opacity: 0.7 }}
            >
                Cadastrar
            </Button>
          </form>
          <Link to="/signin">Já tem uma conta? Entre agora!</Link>
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
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 30px;
  }

  button {
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
    color: #2e424d;
    text-decoration: underline;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
  }
`;
