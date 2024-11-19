import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer((player) => ({
      ...player,
      score: player.score + 1,
    }));
  }

  function handleFirstNameChange(e) {
    setPlayer((player) => ({
      ...player,
      firstName: e.target.value,
    }));
  }

  function handleLastNameChange(e) {
    setPlayer((player) => ({
      ...player,
      lastName: e.target.value,
    }));
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        Nombre:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Apellido:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}