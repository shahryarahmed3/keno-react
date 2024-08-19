import React, { useState } from 'react';

import "./ButtonContainer.css";

function ButtonContainer() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [spots, setSpots] = useState(0);

  const handleButtonClick = (i) => {
    let newSelectedNumbers = [...selectedNumbers];
    let newSpots = spots;

    if (selectedNumbers.includes(i)) {
      newSelectedNumbers = newSelectedNumbers.filter(num => num !== i);
      newSpots--;
    } else if (!selectedNumbers.includes(i) && selectedNumbers.length < 10) {
      newSelectedNumbers.push(i);
      newSpots++;
    }

    setSelectedNumbers(newSelectedNumbers);
    setSpots(newSpots);
  };

  const buttons = [];
  for (let i = 1; i <= 80; i++) {
    buttons.push(
      <button
        key={i}
        className={`keno-button ${selectedNumbers.includes(i) ? 'selected' : ''}`}
        onClick={() => handleButtonClick(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="button-container">
      {buttons}
    </div>
  );
}

export default ButtonContainer;