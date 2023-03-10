"use client";

import React, { useState,useEffect,useContext,useRef } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

import { ValuesContext } from "@/app/ValuesContext";



const ThirdPolicy = () => {
  const [value, setValue] = useState(
    ()=>{
      const storedValue = window.localStorage.getItem('value');
      return storedValue !== null ? parseInt(storedValue) : 0;
    }
  );
  const [options, setOptions] = useState([
    { label: "Single", value: "Single" },
    {
      label: "Couple, Member + 1 or Family",
      value: "Couple, Member + 1 or Family",
    },
  ]);
  const [selectedOption, setSelectedOption] = useState(
    () => {
      const storedValue = window.localStorage.getItem("selectedOption");
      return storedValue !== null ? storedValue : "Single";
      }
  );
  const { valueThree, setValueThree } = useContext(ValuesContext);

  
const totalRef = useRef(0); 

const handleChange = () => {
  console.log('value is changing comp 3')
  console.log(totalRef.current.innerText)
  setValueThree( 

    totalRef.current.innerText
  );
};


useEffect(() => {
  handleChange()
  window.localStorage.setItem("selectedOption", selectedOption);
  window.localStorage.setItem('value', value.toString());
},[handleChange,selectedOption,value]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.value);
  };


  const yourPremium = (value) => {
    return Number(((value * 0.0158) / 100).toFixed(2));
  };
  return (
    <div className="card m-8">
      <Card title="ACCIDENTAL DEATH AND DISMEMBERMENT INSURANCE">
        <p className="m-0">
          Prepare for the unexpected with coverage that provides a lump sum
          payment if you or a family member suffers a serious injury or
          accidental death.
        </p>
        <p className="font-semibold text-right my-2 text-xl">
          Monthly premium:
        </p>
        {/* body */}
        <div className="flex">
          <div className="col-6 pl-0">
            <p>Coverage type:</p>
          </div>
          <div className="col-6 flex pr-0">
            <div className="col-8">
              <Dropdown
                onChange={handleOptionChange}
                options={options}
                style={{ width: "80%" }}
                value={selectedOption}
              />
            </div>
            <div className="col-4 pr-0"></div>
          </div>
        </div>
        <div className="flex my-4">
          <div className="col-4 pl-0">
            <p> Coverage:</p>
          </div>
          <div className="col-8 flex">
            <div className="col-9">
              <div className="card flex justify-content-between align-items-center">
                <Slider
                  value={value}
                  onChange={(e) => setValue(e.value)}
                  className="w-6"
                />
                <InputText
                  value={`$${value * 5000}`}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-3"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="font-semibold text-right my-2 text-xl">
                $
                {selectedOption === "Couple, Member + 1 or Family"
                  ? yourPremium(value * 10000)
                  : yourPremium(value * 5000)}
              </p>
            </div>
          </div>
        </div>
        {/* total */}
        <p>Value three: {valueThree}</p>
        <p className="font-semibold text-right my-2 text-3xl" >
          Total: $

          <span ref={totalRef}>
            {selectedOption === "Couple, Member + 1 or Family"
              ? yourPremium(value * 10000)
              : yourPremium(value * 5000)}
          </span>
        </p>
      </Card>
    </div>
  );
};

export default ThirdPolicy;
