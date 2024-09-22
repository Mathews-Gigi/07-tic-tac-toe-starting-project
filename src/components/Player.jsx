import React from "react";
import { useState } from "react";

function Player({ playerName, PlayerSymbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [player, setPlayer] = useState(playerName);
  function handleEditing() {
    // if (isEditing) {
    //   setIsEditing(false);
    // } else {
    //   setIsEditing(true);
    // }

    // setIsEditing(isEditing ? false : true);

    // setIsEditing(!isEditing);

    {
      /* any this way can be used but when applaying state that  is baised on previous state use of a function is the best way*/
    }
    setIsEditing((editing) => !editing);
  }
  function handleChangeName(e) {
    setPlayer(e.target.value);
  }
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {isEditing ? (
            <span className="player-name">
              <input type="text" value={player} onChange={handleChangeName} />
            </span>
          ) : (
            <span className="player-name">{player}</span>
          )}

          <span className="player-symbol">{PlayerSymbol}</span>
        </span>
        <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

export default Player;
