import styled from "styled-components";
import MenuTopIcon from "./MenuTopIcon";

export default function TopBar() {

    return (
        <Div>
            <MenuTopIcon />
            <h1>twivent</h1>
        </Div>
    )
};

const Div = styled.div`
    height: 60px;
    width: 100%;
    background-color: #74bde0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    padding: 0 0 0 20px;
    display: flex;
    align-items: center;

    h1 {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
        font-size: 30px;
        margin-left: 20px;
    }
`;