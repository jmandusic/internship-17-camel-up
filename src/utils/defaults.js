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

export const initializeCamels = () => {
  const camels = [
    {
      id: 1,
      color: "blue",
    },
    {
      id: 2,
      color: "gold",
    },
    {
      id: 3,
      color: "green",
    },
    {
      id: 4,
      color: "white",
    },
    {
      id: 5,
      color: "red",
    },
  ];

  return camels;
};
