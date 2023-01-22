import { useEffect, useState } from 'react';
const useOnline = () => {
  const [isOnline, setIsonline] = useState(true);

  useEffect(() => {
    window.addEventListener('online', () => {
      setIsonline(true);
    });
    window.addEventListener('offline', () => {
      setIsonline(false);
    });
  }, []);

  return isOnline; //Returns true and false
};

export default useOnline;
