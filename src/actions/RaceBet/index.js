export const raceBet = (setDice, setPlayers, oneDice, camel) => {
  setDice((prevState) => {
    const newDice = { ...prevState };

    oneDice.raceBet = true;
    newDice.dice[oneDice.id - 1] = oneDice;

    return newDice;
  });

  setPlayers((prevState) => {
    const newPlayers = { ...prevState };

    const playerOne = { ...newPlayers.playerOne };
    const playerTwo = { ...newPlayers.playerTwo };

    if (playerOne.current) {
      playerOne.raceBet.push(camel);
    } else {
      playerTwo.raceBet.push(camel);
    }

    playerOne.current = !playerOne.current;
    playerTwo.current = !playerTwo.current;

    newPlayers.playerOne = playerOne;
    newPlayers.playerTwo = playerTwo;

    return newPlayers;
  });
};
