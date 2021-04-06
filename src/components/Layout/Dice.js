import { useState } from "react";

import { initializeDice } from "../../utils/defaults";
import OneDice from "./OneDice";
import { DiceContainer } from "../index.styled";

const initialDice = {
  dice: initializeDice(),
};

const Dice = () => {
  const [dice, setDice] = useState(initialDice.dice);

  return (
    <DiceContainer>
      {dice.map((oneDice) => (
        <OneDice key={oneDice.id} oneDice={oneDice} />
      ))}
    </DiceContainer>
  );
};

export default Dice;
