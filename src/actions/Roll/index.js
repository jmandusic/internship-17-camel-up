import { camelSelector, sortCamelsArray } from "../../utils/helpers";
import {
  positionIncrement,
  randomDiceSelector,
  randomValueSelector,
} from "../../utils/roll";

export const roll = (
  setCamels,
  setDice,
  setPlayers,
  setCurrentRoundCamels,
  dice,
  rollCount
) => {
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

    setCurrentRoundCamels((prevState) => {
      let currentCamels = [...prevState];

      if (currentCamels[0].position !== 0) {
        for (let index = 0; index < currentCamels.length; index++) {
          if (currentCamels[index] === selectedCamel) {
            currentCamels.splice(index, 1);
            break;
          }
        }
      } else {
        currentCamels.shift();
      }

      currentCamels.push(selectedCamel);
      currentCamels = sortCamelsArray(currentCamels);
      return currentCamels;
    });

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
