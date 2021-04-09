export const legBetScoreIncrement = (players, setPlayers, camels) => {
  const playersArray = [players.playerOne, players.playerTwo];

  setPlayers((prevState) => {
    const newPlayers = { ...prevState };

    const playerOne = { ...newPlayers.playerOne };
    const playerTwo = { ...newPlayers.playerTwo };

    playersArray.forEach((player) => {
      player.legBet.forEach((camel) => {
        let score = 0;
        switch (camel) {
          case camels[4]:
            score += 5;
            break;
          case camels[3]:
            score += 3;
            break;
          default:
            score -= 1;
            break;
        }

        if (playerOne.name === player.name) {
          playerOne.score += score;
        } else {
          playerTwo.score += score;
        }
      });
    });

    playerOne.legBet = [];
    playerTwo.legBet = [];

    newPlayers.playerOne = playerOne;
    newPlayers.playerTwo = playerTwo;

    return newPlayers;
  });
};
