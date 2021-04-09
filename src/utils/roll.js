export const randomDiceSelector = (dice) => {
  while (true) {
    const diceId = randomValueSelector(1, 5);
    const selectedDice = dice.find(
      (oneDice) => oneDice.id === diceId && oneDice.rolled === false
    );

    if (selectedDice) {
      return selectedDice;
    }
  }
};

export const positionIncrement = (camel, value) => {
  camel.position += value;
  return camel;
};

export const randomValueSelector = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const checkGameState = (camels) => {
  const camelsPositionsArray = camels.map((camel) => camel.position);
  let gameState = false;

  camelsPositionsArray.forEach((position) => {
    if (position > 15) {
      gameState = true;
    }
  });

  return gameState;
};
