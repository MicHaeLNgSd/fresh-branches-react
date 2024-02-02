import React from 'react';
import useClick from '../../hooks';

function Clicker() {
  const [clicks] = useClick(5);
  return (
    <>
      <div>Clicks {clicks}</div>
    </>
  );
}

export default Clicker;
