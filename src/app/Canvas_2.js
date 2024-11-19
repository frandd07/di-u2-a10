import { useState } from 'react';
import Background from './Background.js';
import Box from './Box.js';
import { produce } from 'immer';

const initialPosition = {
  x: 0,
  y: 600
};

export default function Canvas2() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    setShape((prevShape) =>
      produce(prevShape, (draft) => {
        draft.position.x += dx;
        draft.position.y += dy;
      })
    );
  }

  function handleColorChange(e) {
    setShape((prevShape) =>
      produce(prevShape, (draft) => {
        draft.color = e.target.value;
      })
    );
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        ¡Arrástrame!
      </Box>
    </>
  );
}
