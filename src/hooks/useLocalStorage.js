import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
      return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : initialValue;
    });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;