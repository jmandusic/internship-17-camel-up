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
    border: 2px solid #e6bf83;
    border-radius: 12px;
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
    background-color: red;
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

  button:hover {
    opacity: 0.6;
  }
`;
