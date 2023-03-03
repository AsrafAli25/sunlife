import React, { createContext, useState } from 'react';

export const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = (number) => {
    setNumbers([...numbers, number]);
  };

  const removeNumber = (index) => {
    const newNumbers = [...numbers];
    newNumbers.splice(index, 1);
    setNumbers(newNumbers);
  };

  const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('am your total', total)
  return (
    <NumberContext.Provider value={{ numbers, addNumber, removeNumber, total }}>
      {children}
    </NumberContext.Provider>
  );
};
