import { useEffect } from "react";
import { WinContainer } from "../../index.styled";

const Win = ({ player }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.backgroundColor = "rgba(0, 0, 0, 0.65)"
  }, []);

  return (
    <WinContainer>
      <h1>Player won the game !!!</h1>
    </WinContainer>
  );
};

export default Win;
