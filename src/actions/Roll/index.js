import {
  camelSelector,
  positionIncrement,
  randomDiceSelector,
  randomValueSelector,
} from "../../utils/roll";

export const roll = (setCamels, setDice, setPlayers, dice, rollCount) => {
  let value = randomValueSelector(1, 3);
  const diceValue = value;

  // if (rollCount !== 0) {
  //   value /= 2;
  // }

  const selectedDice = randomDiceSelector(dice);

  setCamels((prevState) => {
    const newCamels = { ...prevState };
    const camelsArray = [...newCamels.camels];

    const selectedCamel = camelSelector(newCamels.camels, selectedDice);
    camelsArray[selectedCamel.id - 1] = positionIncrement(selectedCamel, value);
    console.log(newCamels);

    return newCamels;
  });

  setDice((prevState) => {
    const newDice = { ...prevState };

    selectedDice.rolled = true;
    selectedDice.value = diceValue;
    newDice.dice[selectedDice.id - 1] = selectedDice;

    return newDice;
  });

  setPlayers((prevState) => {
    const newPlayers = { ...prevState };

    const playerOne = { ...newPlayers.playerOne };
    const playerTwo = { ...newPlayers.playerTwo };

    if (playerOne.current) {
      playerOne.score += 1;
    } else {
      playerTwo.score += 1;
    }

    playerOne.current = !playerOne.current;
    playerTwo.current = !playerTwo.current;

    newPlayers.playerOne = playerOne;
    newPlayers.playerTwo = playerTwo;

    return newPlayers;
  });
};
