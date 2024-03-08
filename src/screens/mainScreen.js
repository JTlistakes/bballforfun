import React, { useState } from "react";
import Draggable from "react-draggable";
import useWindowDimensions from "../hooks/useWindowDimensions";

const MainScreen = () => {
  const [players, setPlayers] = useState(1);
  const [oppPlayers, setOppPlayers] = useState(1);
  const handleStart = () => {};
  const handleDrag = () => {};
  const handleStop = () => {};
  const { height, width } = useWindowDimensions();
  const playerSize = Math.max(0.05 * Math.min(width, height), 30);

  const player = (color, position, playerName) => {
    console.log("height,width -> ", height, width);
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
            width: playerSize,
            background: color,
            height: playerSize,
            borderRadius: "100px",
            alignItems: "center",
            borderColor: "black",
            border: "2px",
          }}
        >
          <h3 style={{ textAlign: "center", alignItems: "center" }}>
            {playerName}
          </h3>
        </div>
      </Draggable>
    );
  };
  const draggables = [];

  for (let i = 0; i < 5; i++) {
    draggables.push(
      player(
        "lightBlue",
        { x: playerSize * 2 + 90 * i, y: -i * (21 + playerSize) },
        `P${i + 1}`
      )
    );
  }
  draggables.push(
    player(
      "Orange",
      { x: playerSize * 2 + 90 * 5, y: -5 * (21 + playerSize) },
      `王`
    )
  );
  for (let i = 0; i < 5; i++) {
    draggables.push(
      player(
        "red",
        { x: playerSize * 2 + 90 * i, y: playerSize - (6 + i) * (21 + playerSize) },
        `O${i + 1}`
      )
    );
  }

  return <div style={{ height: "100vh", width: "100vw" }}>{draggables}</div>;
};

export default MainScreen;
