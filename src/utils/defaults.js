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
      color: "#228ce6",
    },
    {
      id: 2,
      color: "#fab006",
    },
    {
      id: 3,
      color: "#83c91d",
    },
    {
      id: 4,
      color: "white",
    },
    {
      id: 5,
      color: "#fa5352",
    },
  ];
  return camels;
};

export const initializeDice = () => {
  const dice = [
    {
      id: 1,
      value: "?",
      color: "#228ce6",
      rolled: false,
      legBet: false,
      raceBet: false,
    },
    {
      id: 2,
      value: "?",
      color: "#fab006",
      rolled: false,
      legBet: false,
      raceBet: false,
    },
    {
      id: 3,
      value: "?",
      color: "#83c91d",
      rolled: false,
      legBet: false,
      raceBet: false,
    },
    {
      id: 4,
      value: "?",
      color: "white",
      rolled: false,
      legBet: false,
      raceBet: false,
    },
    {
      id: 5,
      value: "?",
      color: "#fa5352",
      rolled: false,
      legBet: false,
      raceBet: false,
    },
  ];
  return dice;
};

export const panelLayoutOptions = () => {
  return Object.freeze({
    DEFAULT: "DEFAULT",
    LEG_BET: "LEG_BET",
    RACE_BET: "RACE_BET",
  });
};
