export const initializePlayers = () => {
  const firstPlayer = {
    name: "",
    current: true,
    score: 0,
  };

  const secondPlayer = {
    name: "",
    current: false,
    score: 0,
  };

  return [firstPlayer, secondPlayer];
};

export const initializeBoard = () => {
  const board = [];

  const numberOfRows = 2;
  const numberOfColumns = 8;

  for (let index = 0; index < numberOfColumns * numberOfRows; index++) {
    const initialCell = {
      id: index,
      camels: [],
    };
    board.push(initialCell);
  }

  return board;
};

export const initializeDice = () => {
  const dice = [
    {
      id: 1,
      value: "?",
      color: "#228ce6",
    },
    {
      id: 2,
      value: "?",
      color: "#fab006",
    },
    {
      id: 3,
      value: "?",
      color: "#83c91d",
    },
    {
      id: 4,
      value: "?",
      color: "white",
    },
    {
      id: 5,
      value: "?",
      color: "#fa5352",
    },
  ];
  return dice;
};
