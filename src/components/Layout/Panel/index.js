import { useEffect, useState } from "react";

import { usePlayers } from "../../../providers/Players/hooks";
import { useCamels } from "../../../providers/Camels/hooks";
import { useDice } from "../../../providers/Dice/hooks";

import LegBet from "./LegBet";
import RaceBet from "./RaceBet";
import Win from "../Board/Win";

import { roll } from "../../../actions/Roll";

import {
  initializeCurrentCamels,
  panelLayoutOptions,
} from "../../../utils/defaults";
import { checkGameState } from "../../../utils/roll";
import { legBetScoreIncrement } from "../../../utils/legBet";
import { PanelContainer } from "../../index.styled";

const initialState = {
  layout: panelLayoutOptions(),
  currentRoundCamels: initializeCurrentCamels(),
};

const Panel = () => {
  const [option, setOption] = useState(initialState.layout.DEFAULT);
  const [gameState, setGameState] = useState(false);
  const [turns, setTurns] = useState(0);
  const [currentRoundCamels, setCurrentRoundCamels] = useState(
    initialState.currentRoundCamels
  );

  const [dice, setDice] = useDice();
  const [camels, setCamels] = useCamels();
  const [players, setPlayers] = usePlayers();

  useEffect(() => {
    setGameState(checkGameState(camels));
    if (turns === 5) {
      setDice((prevState) => {
        const newDice = { ...prevState };

        newDice.dice.forEach((oneDice) => {
          oneDice.rolled = false;
          oneDice.legBet = false;
          oneDice.value = "?";
          newDice.dice[oneDice.id - 1] = oneDice;
        });

        return newDice;
      });

      legBetScoreIncrement(players, setPlayers, currentRoundCamels);
      setTurns(0);
    }
  }, [turns, setDice, camels, currentRoundCamels, players, setPlayers]);

  const rollHandler = () => {
    roll(setCamels, setDice, setPlayers, setCurrentRoundCamels, dice, turns);
    setTurns((prevState) => prevState + 1);
  };

  if (option === initialState.layout.LEG_BET) {
    return <LegBet setOption={setOption} />;
  }

  if (option === initialState.layout.RACE_BET) {
    return <RaceBet setOption={setOption} />;
  }

  return (
    <>
      {gameState && <Win currentRoundCamels={currentRoundCamels} />}
      {!gameState && (
        <PanelContainer>
          <div>
            <button onClick={() => setOption(initialState.layout.LEG_BET)}>
              Leg bet
            </button>
            <button onClick={rollHandler}>Roll</button>
            <button onClick={() => setOption(initialState.layout.RACE_BET)}>
              Race bet
            </button>
          </div>
        </PanelContainer>
      )}
    </>
  );
};

export default Panel;
