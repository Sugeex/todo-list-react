import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue:T): [T, (value: T | ((val: T) => T)) => void] {
    const [value, setValue] = useState<T>(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
    });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;