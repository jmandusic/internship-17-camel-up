import { useDice } from "../../../providers/Dice/hooks";

import OneDice from "./OneDice";

import { DiceContainer } from "../../index.styled";

const Dice = () => {
  const [dice] = useDice();

  return (
    <DiceContainer>
      {dice.map((oneDice) => (
        <OneDice key={oneDice.id} oneDice={oneDice} />
      ))}
    </DiceContainer>
  );
};

export default Dice;
