import { useState } from "react";
import { Redirect } from "react-router";

import { usePlayers } from "../../providers/Players/hooks";
import { Form } from "../index.styled";

const PlayerForm = () => {
  const [players, setPlayers] = usePlayers();
  const [errorMessage, setErrorMessage] = useState("");
  const [arePlayersDefined, setArePlayersDefined] = useState(false);

  const playerOneNameHandler = (e) => {
    setPlayers((prevState) => {
      const newPlayers = { ...prevState };

      const player = { ...newPlayers.playerOne };
      player.name = e.target.value;

      newPlayers.playerOne = player;
      return newPlayers;
    });
  };

  const playerTwoNameHandler = (e) => {
    setPlayers((prevState) => {
      const newPlayers = { ...prevState };

      const player = { ...newPlayers.playerTwo };
      player.name = e.target.value;

      newPlayers.playerTwo = player;
      return newPlayers;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!players.playerOne.name) {
      setErrorMessage("Player One name is not defined");
      return;
    }

    if (!players.playerTwo.name) {
      setErrorMessage("Player Two name is not defined");
      return;
    }

    if (
      players.playerOne.name.trim().length < 3 ||
      players.playerTwo.name.trim().length < 3
    ) {
      setErrorMessage("Player name requires min 3 characters");
      return;
    }

    if (
      players.playerOne.name.trim().length > 12 ||
      players.playerTwo.name.trim().length > 12
    ) {
      setErrorMessage("Player name requires max 12 characters");
      return;
    }

    if (
      players.playerOne.name.trim().toLowerCase() ===
      players.playerTwo.name.trim().toLowerCase()
    ) {
      setErrorMessage("Player names must be different");
      return;
    }

    setErrorMessage("");
    setArePlayersDefined(true);
  };

  if (arePlayersDefined) {
    return <Redirect to="/game" />;
  }

  return (
    <Form>
      <h1>Welcome to the Camel Up !!!</h1>

      <form onSubmit={handleSubmit}>
        <label>Enter Player One name:</label>
        <input
          placeholder="Player One..."
          value={players.playerOne.name}
          onChange={playerOneNameHandler}
        />

        <label>Enter Player Two name:</label>
        <input
          placeholder="Player Two..."
          value={players.playerTwo.name}
          onChange={playerTwoNameHandler}
        />

        <button type="submit">Play</button>
        {errorMessage && <span>{errorMessage}</span>}
      </form>
    </Form>
  );
};

export default PlayerForm;
