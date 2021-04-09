import { useEffect } from "react";
import { usePlayers } from "../../../providers/Players/hooks";
import { legBetScoreIncrement } from "../../../utils/legBet";
import { raceBetScoreIncrement } from "../../../utils/raceBet";
import { WinContainer } from "../../index.styled";

const Win = ({ currentRoundCamels }) => {
  const [players, setPlayers] = usePlayers();

  useEffect(() => {
    legBetScoreIncrement(players, setPlayers, currentRoundCamels);
    raceBetScoreIncrement(players, setPlayers, currentRoundCamels);
  }, []);

  return (
    <WinContainer>
      {players.playerOne.score > players.playerTwo.score && (
        <h1>{players.playerOne.name} won the game !!!</h1>
      )}
      {players.playerOne.score < players.playerTwo.score && (
        <h1>{players.playerTwo.name} won the game !!!</h1>
      )}
      {players.playerOne.score === players.playerTwo.score && (
        <h1>It's draw.</h1>
      )}
    </WinContainer>
  );
};

export default Win;
