import styled from "styled-components";

export const Form = styled.div`
  position: absolute;
  left: 25%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 50%;
  border: none;
  border-radius: 12px;
  background-color: #c8a165;

  h1 {
    margin-top: 30px;
    text-align: center;
  }

  form {
    position: relative;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 15px;
    margin-bottom: 100px;
    width: 50%;
    height: 350px;
    border: 5px solid #e6bf83;
    border-radius: 12px;
    box-shadow: 30px 30px 30px #a0793d;
  }

  label {
    margin-top: 20px;
    margin-left: 20px;
    font-weight: bold;
  }

  input {
    height: 30px;
    margin: 10px;
    padding-left: 10px;
  }

  button {
    align-self: center;
    outline: none;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 10px 20px;
    border: none;
    border-radius: 7px;
    font-size: 20px;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.6;
  }

  span {
    align-self: center;
    position: absolute;
    bottom: -60px;
    color: red;
    font-size: 20px;
    font-weight: red;
    text-align: center;
  }
`;

export const ScoreBox = styled.div`
  margin-left: 15px;

  p {
    padding-left: 10px;
  }

  span {
    padding-left: 5px;
    font-weight: lighter;
  }
`;

export const BoardContainer = styled.div`
  display: grid;
  grid-template-areas:
    ". . . . . . . ."
    ". . . . . . . .";
  margin: auto;
  margin-top: 50px;
  border: 0.25px solid black;
  width: fit-content;
`;

export const Cell = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  border: 0.25px solid black;
`;

export const DiceContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 80px;
    height: 80px;
    border: none;
    border-radius: 12px;
    font-size: 50px;
    font-weight: normal;
  }
`;

export const PanelContainer = styled.div`
  position: absolute;
  left: calc((100% - 800px) / 2);
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 300px;
  width: 800px;
  border: none;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background-color: #c8a165;

  button {
    outline: none;
    padding: 20px;
    font-size: 30px;
    border: none;
    border-radius: 12px;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;
  }

  button[disabled] {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: not-allowed;
  }

  button[disabled]::after {
    content: "X";
    color: red;
    font-size: 70px;
  }

  button:not([disabled]):hover {
    opacity: 0.6;
  }
`;

export const Camel = styled.div`
  display: flex;
  margin: 5px;
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;
`;

export const CellNumber = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
`;

export const BetDice = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 12px;
`;

export const WinContainer = styled.div`
  position: absolute;
  top: 30vh;
  left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 90vw;
  border: none;
  border-radius: 12px;
  background-color: #f4f4f4;

  
`;
