import React, { useState } from "react";
import Draggable from "react-draggable";

const MainScreen = () => {
  const [players, setPlayers] = useState(1);
  const [oppPlayers, setOppPlayers] = useState(1);
  const handleStart = () => {
    console.log("start -> ");
  };
  const handleDrag = () => {};
  const handleStop = () => {};

  const player = (color, position, playerName) => {
    console.log("color -> ", color);
    return (
      <Draggable
        // axis="x"
        handle=".handle"
        defaultPosition={position}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div
          className="handle"
          style={{
            width: "50px",
            background: color,
            height: "50px",
            borderRadius: "100px",
            alignItems: "center",
            borderColor: "black",
            border: "2px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>{playerName}</h1>
        </div>
      </Draggable>
    );
  };
  const draggables = [];

  for (let i = 0; i < 5; i++) {
    draggables.push(
      player("lightBlue", { x: 100+90 * i, y: -i * 71 }, `P${i + 1}`)
    );
  }
  draggables.push(
    player("Orange", { x: 1000 - 90 * 5, y:   -(5) * 71 }, `王`)
  );
  for (let i = 0; i < 5; i++) {
    draggables.push(
      player("red", { x: 1000 - 90 * i, y:   -(6+i) * 71 }, `O${i + 1}`)
    );
  }

  return <div style={{ height: "100vh", width: "100vw" }}>{draggables}</div>;
};

export default MainScreen;
