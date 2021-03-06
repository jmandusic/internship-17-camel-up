import { useDice } from "../../../providers/Dice/hooks";
import { usePlayers } from "../../../providers/Players/hooks";
import { useCamels } from "../../../providers/Camels/hooks";

import { raceBet } from "../../../actions/RaceBet";

import { panelLayoutOptions } from "../../../utils/defaults";
import { camelSelector } from "../../../utils/helpers";

import { BetDice, PanelContainer } from "../../index.styled";

const initialState = {
  layout: panelLayoutOptions(),
};

const RaceBet = ({ setOption }) => {
  const [dice, setDice] = useDice();
  const [camels] = useCamels();
  const [, setPlayers] = usePlayers();

  const raceBetHandler = (oneDice) => {
    const camel = camelSelector(camels, oneDice);
    raceBet(setDice, setPlayers, oneDice, camel);
    setOption(initialState.layout.DEFAULT);
  };

  return (
    <PanelContainer>
      <div>
        {dice.map((oneDice) => (
          <BetDice
            key={oneDice.id}
            style={
              !oneDice.raceBet
                ? { backgroundColor: `${oneDice.color}` }
                : { backgroundColor: `black` }
            }
            disabled={oneDice.raceBet === true}
            onClick={() => raceBetHandler(oneDice)}
          />
        ))}
      </div>
      <button onClick={() => setOption(initialState.layout.DEFAULT)}>
        Return to main panel
      </button>
    </PanelContainer>
  );
};

export default RaceBet;
