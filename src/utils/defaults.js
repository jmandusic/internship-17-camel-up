import { gameColors } from "../constants";

const colors = gameColors();

export const initializePlayers = () => {
  const firstPlayer = {
    name: "",
    current: true,
    score: 0,
    legBet: [],
    raceBet: [],
  };

  const secondPlayer = {
    name: "",
    current: false,
    score: 0,
    legBet: [],
    raceBet: [],
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
      color: colors.BLUE,
      position: 0,
    },
    {
      id: 2,
      color: colors.YELLOW,
      position: 0,
    },
    {
      id: 3,
      color: colors.GREEN,
      position: 0,
    },
    {
      id: 4,
      color: colors.WHITE,
      position: 0,
    },
    {
      id: 5,
      color: colors.RED,
      position: 0,
    },
  ];

  return camels;
};

export const initializeDice = () => {
  const dice = [
    {
      id: 1,
      value: "?",
      color: colors.BLUE,
      rolled: false,
      legBet: false,
      raceBet: false,
    },
    {
      id: 2,
      value: "?",
      color: colors.YELLOW,
      rolled: false,
      legBet: false,
      raceBet: false,
    },
    {
      id: 3,
      value: "?",
      color: colors.GREEN,
      rolled: false,
      legBet: false,
      raceBet: false,
    },
    {
      id: 4,
      value: "?",
      color: colors.WHITE,
      rolled: false,
      legBet: false,
      raceBet: false,
    },
    {
      id: 5,
      value: "?",
      color: colors.RED,
      rolled: false,
      legBet: false,
      raceBet: false,
    },
  ];

  return dice;
};

export const initializeCurrentCamels = () => {
  const camels = [
    {
      position: 0,
    },
    {
      position: 0,
    },
    {
      position: 0,
    },
    {
      position: 0,
    },
    {
      position: 0,
    },
  ];

  return camels;
};

export const panelLayoutOptions = () => {
  return Object.freeze({
    DEFAULT: "DEFAULT",
    LEG_BET: "LEG_BET",
    RACE_BET: "RACE_BET",
  });
};
