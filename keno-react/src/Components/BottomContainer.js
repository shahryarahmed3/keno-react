import React from 'react';

import './BottomContainer.css';

function BottomContainer() {
  return (
    <div className="bottom-container">
      <div id="numSpotsSelected">0 Spots Selected</div>
      <div className="enter_ticket_button">
        <button id="enterTicketButton" onClick={() => alert('Enter ticket logic here')}>Enter Ticket</button>
      </div>
    </div>
  );
}

export default BottomContainer;
