import styled from "styled-components";
import "./../assets/css/fonts.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

export default function InitialScreen() {
  const TOKEN = localStorage.getItem("TOKEN");

  const navigate = useNavigate();

  function checkSignIn(){
    if (TOKEN === null){
      navigate("/signin");
      return;
    } 
    
    navigate("/newevent");
  };

  return (
    <Div>
      <div className="section-container">
        <p>Buscar evento</p>
        <div className="search">
          <TextField
            id="outlined-basic"
            label="Chave do evento"
            variant="outlined"
          />
          <Button
            variant="contained"
            disableElevation
            sx={{ backgroundColor: "#5b8291", opacity: 0.7 }}
          >
            <SearchIcon />
          </Button>
        </div>
      </div>
      
      <Button onClick={checkSignIn} className="btn-create" variant="contained" sx={{ backgroundColor: "#5b8291", opacity: 0.7 }}>
        <p>Criar evento</p>
      </Button>
      
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  padding-top: 80px;
  width: 100%;

  .section-container {
    width: 85%;
    height: 100%;
    border: 1px solid black;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  }

  p:first-of-type {
    margin: 0 auto;
    margin-bottom: 20px;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    text-decoration: none;
  }

  .search {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  button {
    margin-left: 20px;
  }

  button:hover,
  .btn-create:hover {
    cursor: pointer;
    background-color: #5b8291;
    opacity: 1;
  }

  .MuiFormControl-root,
  .MuiTextField-root {
    width: 100%;
  }

  .btn-create {
    margin: 0 auto;
    margin-top: 40px;
    width: 85%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .btn-create p {
    margin: 0 auto;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    text-decoration: none;
    text-transform: none;
  }
`;
