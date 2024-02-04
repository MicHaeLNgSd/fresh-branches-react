import React from 'react';
import { useClick } from '../../hooks';

function Clicker() {
  const [clicks] = useClick();
  return (
    <>
      <div>Clicks {clicks}</div>
    </>
  );
}

export default Clicker;
