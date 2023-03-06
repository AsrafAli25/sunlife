import React, { createContext, useState } from 'react';

export const ValuesContext = createContext();

export const ValuesProvider = ({ children }) => {
  const [valueOne, setValueOne] = useState('');
  const [valueTwo, setValueTwo] = useState('');
  const [valueThree, setValueThree] = useState('');
  const [valueFour, setValueFour] = useState('');
  const [valueFive, setValueFive] = useState('');
  const [valueSix, setValueSix] = useState('');

  return (
    <ValuesContext.Provider value={{ valueOne, setValueOne, valueTwo, setValueTwo, valueThree, setValueThree,valueFour, setValueFour,valueFive, setValueFive, valueSix, setValueSix}}>
      {children}
    </ValuesContext.Provider>
  );
};
