import { legBet } from "../../../actions/LegBet";
import { useCamels } from "../../../providers/Camels/hooks";
import { useDice } from "../../../providers/Dice/hooks";
import { usePlayers } from "../../../providers/Players/hooks";
import { panelLayoutOptions } from "../../../utils/defaults";
import { camelSelector } from "../../../utils/helpers";
import { BetDice, PanelContainer } from "../../index.styled";

const initialState = {
  layout: panelLayoutOptions(),
};

const LegBet = ({ setOption }) => {
  const [dice, setDice] = useDice();
  const [camels] = useCamels();
  const [, setPlayers] = usePlayers();

  const legBetHandler = (oneDice) => {
    const camel = camelSelector(camels, oneDice);
    legBet(setDice, setPlayers, oneDice, camel);
    setOption(initialState.layout.DEFAULT);
  };

  return (
    <PanelContainer>
      {dice.map((oneDice) => (
        <BetDice
          key={oneDice.id}
          style={
            !oneDice.legBet
              ? { backgroundColor: `${oneDice.color}` }
              : { backgroundColor: `black` }
          }
          disabled={oneDice.legBet === true}
          onClick={() => legBetHandler(oneDice)}
        />
      ))}
    </PanelContainer>
  );
};

export default LegBet;
