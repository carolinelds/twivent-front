import styled from "styled-components";
import "./../assets/css/fonts.css";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";

export default function InitialScreen() {
  return (
    <Div>
     
        <div class="search">
          <TextField id="outlined-basic" label="Chave do evento" variant="outlined" />
          <Button variant="contained" disableElevation sx={{ backgroundColor: "#5b8291", opacity: 0.7 }}>
            <SearchIcon />
          </Button>  
        </div>
        <Link to="/signin">
          <p>Criar evento</p>
        </Link>
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

  p {
    margin-top: 80px;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  }

  .search {
    width: 85%;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  button {
    margin-left: 20px;
  }

  button:hover {
    cursor: pointer;
    background-color: #5b8291;
    opacity: 1;
  }

  .MuiFormControl-root,
  .MuiTextField-root {
    width: 100%;
  }

  p {
    text-decoration: underline;
  }
`;
