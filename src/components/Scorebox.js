import { usePlayers } from "../providers/Players/hooks";
import { ScoreBox } from "./index.styled";

const Scorebox = () => {
  const [players, setPlayers] = usePlayers();

  return (
    <ScoreBox>
      <h4>Players</h4>
      <p>
        1. {players.playerOne.name} - {players.playerOne.score} points
      </p>
      <p>
        2. {players.playerTwo.name} - {players.playerTwo.score} points
      </p>
      {players.playerOne.current ? (
        <h4>
          Current player: <span>{players.playerOne.name}</span>
        </h4>
      ) : (
        <h4>
          Current player: <span>{players.playerTwo.name}</span>
        </h4>
      )}
    </ScoreBox>
  );
};

export default Scorebox;
