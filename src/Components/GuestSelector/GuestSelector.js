import React, { useState } from 'react';

const GuestSelector = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  

  const handleAdultsChange = (operation) => {
    // allow up to 10 adults to book a room
    if (operation === 'increment' && adults < 10) {
      setAdults(adults + 1);
    // don't allow users to select more than 10 adults   
    } else if (operation === 'decrement' && adults > 1) {
      setAdults(adults - 1);
    }
  };

  const handleChildrenChange = (operation) => {
    // allow up to 10 children to book a room
    if (operation === 'increment' && children < 10) {
      setChildren(children + 1);
      // dont allow users to select more than 10 children
    } else if (operation === 'decrement' && children > 0) {
      setChildren(children - 1);
    }
  };

  // allow up to 10 rooms
  const handleRoomsChange = (operation) => {
    if (operation === 'increment' && rooms < 10) {
      setRooms(rooms + 1);
    // dont allow users to select more than 10 rooms 
    } else if (operation === 'decrement' && rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  return (
    <div className='guestSelector-Container'>
      <div>
        <h3>Select number of Guests:</h3>
        <label>Adults:</label>
        {/* - button so users can select less */}
        <button onClick={() => handleAdultsChange('decrement')}>-</button>
        <span>{adults}</span>
        {/* + button so users can select more*/}
        <button onClick={() => handleAdultsChange('increment')}>+</button>
      </div>

      <div>
        <label>Children:</label>
        {/* - button so users can select less */}
        <button onClick={() => handleChildrenChange('decrement')}>-</button>
        <span>{children}</span>
        {/* + button so users can select more*/}
        <button onClick={() => handleChildrenChange('increment')}>+</button>
      </div>

      <div>
        <label>Rooms:</label>
        {/* - button so users can select less */}
        <button onClick={() => handleRoomsChange('decrement')}>-</button>
        <span>{rooms}</span>
        {/* + button so users can select more*/}
        <button onClick={() => handleRoomsChange('increment')}>+</button>
      </div>
      <button type='submit'>Done</button>
    </div>
  );
};

export default GuestSelector; 

