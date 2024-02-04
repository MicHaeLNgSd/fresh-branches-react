import { useEffect, useState } from 'react';

function useClick(step = 1) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks((clicks) => clicks + step);
  };
  useEffect(() => {
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [clicks, setClicks];
}

export default useClick;
