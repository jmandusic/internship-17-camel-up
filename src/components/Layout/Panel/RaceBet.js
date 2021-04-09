import { useDice } from "../../../providers/Dice/hooks";
import { panelLayoutOptions } from "../../../utils/defaults";
import { BetDice, PanelContainer } from "../../index.styled";

const initialState = {
  layout: panelLayoutOptions(),
};

const RaceBet = ({ setOption }) => {
  const [dice, setDice] = useDice();
  
  return (
    <PanelContainer>
      {dice.map((oneDice) => (
        <BetDice
          key={oneDice.id}
          style={
            !oneDice.raceBet
              ? { backgroundColor: `${oneDice.color}` }
              : { backgroundColor: `black` }
          }
          disabled={oneDice.raceBet === true}
        />
      ))}
    </PanelContainer>
  );
};

export default RaceBet;
