import { usePlayers } from "../providers/Players/hooks";
import { useCells } from "../providers/Board/hooks";
import { Board, Cell } from "./index.styled";
import { Redirect } from "react-router";
import Scorebox from "./Scorebox";
import Dice from "./Dice";
import Panel from "./Panel";

const Game = () => {
  const [players, setPlayers] = usePlayers();
  const [cells, setCells] = useCells();

  if (!players.playerOne.name || !players.playerTwo.name) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Scorebox />
      <Dice />
      <Board>
        {cells.map((cell) => (
          <Cell key={cell.id}>{cell.id + 1}</Cell>
        ))}
      </Board>
      <Panel />
    </>
  );
};

export default Game;
