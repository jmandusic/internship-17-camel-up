import { useDice } from "../../../providers/Dice/hooks";
import { useCamels } from "../../../providers/Camels/hooks";
import { usePlayers } from "../../../providers/Players/hooks";

import { legBet } from "../../../actions/LegBet";

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
      <div>
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
      </div>
      <button onClick={() => setOption(initialState.layout.DEFAULT)}>
        Return to main panel
      </button>
    </PanelContainer>
  );
};

export default LegBet;
