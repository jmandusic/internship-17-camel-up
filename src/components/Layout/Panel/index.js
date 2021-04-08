import { useEffect, useState } from "react";

import { usePlayers } from "../../../providers/Players/hooks";
import { useCamels } from "../../../providers/Camels/hooks";
import { useDice } from "../../../providers/Dice/hooks";

import LegBet from "./LegBet";
import RaceBet from "./RaceBet";

import { panelLayoutOptions } from "../../../utils/defaults";
import { PanelContainer } from "../../index.styled";
import { roll } from "../../../actions/Roll";
import { checkGameState } from "../../../utils/roll";
import Win from "../Board/Win";

const layout = panelLayoutOptions();

const Panel = () => {
  const [option, setOption] = useState(layout.DEFAULT);
  const [gameState, setGameState] = useState(false);
  const [turns, setTurns] = useState(0);

  const [dice, setDice] = useDice();
  const [camels, setCamels] = useCamels();
  const [, setPlayers] = usePlayers();

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

      setTurns(0);
    }
  }, [turns, setDice]);

  const rollHandler = () => {
    roll(setCamels, setDice, setPlayers, dice, turns);
    setTurns((prevState) => prevState + 1);
  };

  const legBetHandler = () => {
    //legBet();
    setOption(layout.LEG_BET);
  };

  const raceBetHandler = () => {
    //raceBet();
    setOption(layout.RACE_BET);
  };

  if (option === layout.LEG_BET) {
    return <LegBet option={option} setOption={setOption} dice={dice} />;
  }

  if (option === layout.RACE_BET) {
    return <RaceBet option={option} setOption={setOption} dice={dice} />;
  }

  return (
    <>
      {gameState && <Win />}
      {!gameState && (
        <PanelContainer>
          <button onClick={legBetHandler}>Leg bet</button>
          <button onClick={rollHandler}>Roll</button>
          <button onClick={raceBetHandler}>Race bet</button>
        </PanelContainer>
      )}
    </>
  );
};

export default Panel;
