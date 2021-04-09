export const legBet = (setDice, setPlayers, oneDice, camel) => {
  setDice((prevState) => {
    const newDice = { ...prevState };

    oneDice.legBet = true;
    newDice.dice[oneDice.id - 1] = oneDice;

    return newDice;
  });

  setPlayers((prevState) => {
    const newPlayers = { ...prevState };

    const playerOne = { ...newPlayers.playerOne };
    const playerTwo = { ...newPlayers.playerTwo };

    if (playerOne.current) {
      playerOne.legBet.push(camel);
    } else {
      playerTwo.legBet.push(camel);
    }

    playerOne.current = !playerOne.current;
    playerTwo.current = !playerTwo.current;

    newPlayers.playerOne = playerOne;
    newPlayers.playerTwo = playerTwo;

    return newPlayers;
  });
};
