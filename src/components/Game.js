import { Redirect } from "react-router";

import { usePlayers } from "../providers/Players/hooks";
import Scorebox from "./Layout/ScoreBox";
import Dice from "./Layout/Dice";
import Panel from "./Layout/Panel";
import Board from "./Layout/Board";

const Game = () => {
  const [players] = usePlayers();

  if (!players.playerOne.name || !players.playerTwo.name) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Scorebox />
      <Dice />
      <Board />
      <Panel />
    </>
  );
};

export default Game;
