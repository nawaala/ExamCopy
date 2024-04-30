import React, { useState } from 'react';


// Component for selecting the number of adults and children visitors
const VisitorSelector = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);


  // Function to handle changes in the number of adults
  const handleAdultsChange = (operation) => {
    if (operation === 'increment' && adults < 10) { // If incrementing and below 10
      setAdults(adults + 1);
    } else if (operation === 'decrement' && adults > 1) { // If decrementing and above 1
      setAdults(adults - 1);
    }
  };
// Function to handle changes in the number of children
  const handleChildrenChange = (operation) => {
    if (operation === 'increment' && children < 10) { // If incrementing and below 10
      setChildren(children + 1);
    } else if (operation === 'decrement' && children > 0) {  // If decrementing and above 0
    }
  };



  return (
    <div className='VisitorSelector-Container'>
      <div>
        <label>Adults:</label>
        <button onClick={() => handleAdultsChange('decrement')}>-</button>
        <span>{adults}</span>
        <button onClick={() => handleAdultsChange('increment')}>+</button>
      </div>

      <div>
        <label>Children:</label>
        <button onClick={() => handleChildrenChange('decrement')}>-</button>
        <span>{children}</span>
        <button onClick={() => handleChildrenChange('increment')}>+</button>
      </div>

      <button type='submit'>Done</button>
    </div>
  );
};

export default VisitorSelector; 