import React from "react";
import logo from './logo.svg';
import './App.css';
import Chessboard from "chessboardjsx";

import StockFish from "./integrations/Stockfish.js";

function App() {
  return (
    <div >
    <StockFish>
      {({ position, onDrop }) => (
        <Chessboard
          id="stockfish"
          position={position}
          width={320}
          onDrop={onDrop}
          orientation="black"
        />
      )}
    </StockFish>
  </div>
  );
}

export default App;
