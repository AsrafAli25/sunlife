"use client";
import React, { useState, useEffect, useContext } from "react";
import { Card } from "primereact/card";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";

import { ValuesContext } from "@/app/ValuesContext";

const SixthPolicy = () => {
  const [value, setValue] = useState(
    ()=>{
      const storedValue = window.localStorage.getItem('value');
      return storedValue !== null ? parseInt(storedValue) : 0;
    }
  );
  const [spouseValue, setSpouseValue] = useState(
    ()=>{
      const storedValue = window.localStorage.getItem('spouseValue');
      return storedValue !== null ? parseInt(storedValue) : 0;
    }
  );
  const [child, setChild] = useState(
    ()=>{
      const storedValue = window.localStorage.getItem('child');
      return storedValue !== null ? storedValue : "";
    }
  );

  const { valueSix, setValueSix } = useContext(ValuesContext);

  const handleChange = () => {
    console.log("value is changing comp 6");
    setValueSix(total());
  };

  const spousePremium = (value) => {
    return Number(((value * 0.0057) / 10).toFixed(2));
  };

  const total = () => {
    return (
      // yourPremium(value * 5000) +
      (spousePremium(spouseValue * 5000) + (child === "yes" ? 6.6 : 0)).toFixed(
        2
      )
    );
  };

  useEffect(() => {
    total();
    handleChange();
    window.localStorage.setItem('value', value.toString());
    window.localStorage.setItem('spouseValue', spouseValue.toString());
    window.localStorage.setItem('child', child);
  }, [handleChange, value,spouseValue,child]);

  return (
    <div className="card m-8">
      <Card title="LONG-TERM DISABILITY INSURANCE">
        <p className="m-0">
          Create a safety net with this income-style benefit that helps pay
          bills that keep coming even if you have to stop working due to a
          serious illness or injury.
        </p>
        <p className="font-semibold text-right my-2 text-xl">
          Monthly premium:
        </p>

        {/* body */}
        <div className="flex my-4">
          <div className="col-4">
            <p>Your annual earned income:</p>
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
                {/* $ */}
                {/* {yourPremium(value * 5000)} */}
              </p>
            </div>
          </div>
        </div>

        <div className="flex my-4">
          <div className="col-4">
            <p>Coverage amount:</p>
          </div>
          <div className="col-8 flex">
            <div className="col-9">
              <div className="card flex justify-content-between align-items-center">
                <Slider
                  value={spouseValue}
                  onChange={(e) => setSpouseValue(e.value)}
                  className="w-6"
                />
                <InputText
                  value={`$${spouseValue * 5000}`}
                  onChange={(e) => setSpouseValue(e.target.value)}
                  className="w-3"
                />
              </div>
            </div>
            <div className="col-3">
              {/* <p className="font-semibold text-right my-2 text-xl">
                ${spousePremium(spouseValue * 5000)}
              </p> */}
            </div>
          </div>
        </div>

        <div className="flex my-4">
          <div className="col-4">
            <p className="w-7">Elimination period:</p>
          </div>
          <div className="col-8 flex">
            <div className="col-9 pl-0">
              <div className="card flex justify-content-between align-items-center">
                <p className="w-7">120 days</p>
              </div>
            </div>
            <div className="col-3">
              <p className="font-semibold text-right my-2 text-xl">
                {/* {child === "yes" ? "$6.60" : "$0.00"} */}
                {spousePremium(spouseValue * 5000)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-4">
          <div className="col-4">
            <p className="w-7">
              Would you like “Cost of Living
              <br />
              Adjustment” rider?
            </p>
          </div>
          <div className="col-8 flex">
            <div className="col-9 pl-0">
              <div className="card flex justify-content-between align-items-center">
                <div className="flex flex-wrap gap-8">
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="ingredient1"
                      name="pizza"
                      value="yes"
                      onChange={(e) => setChild(e.value)}
                      checked={child === "yes"}
                    />
                    <label htmlFor="ingredient1" className="ml-2">
                      Yes
                    </label>
                  </div>
                  <div className="flex align-items-center">
                    <RadioButton
                      inputId="ingredient2"
                      name="pizza"
                      value="no"
                      onChange={(e) => setChild(e.value)}
                      checked={child === "no"}
                    />
                    <label htmlFor="ingredient2" className="ml-2">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <p className="font-semibold text-right my-2 text-xl">
                {child === "yes" ? "$6.60" : "$0.00"}
              </p>
            </div>
          </div>
        </div>

        {/* total */}
        <p>Value six: {valueSix}</p>
        <p className="font-semibold text-right my-2 text-3xl">
          Total: ${total()}
        </p>
      </Card>
    </div>
  );
};

export default SixthPolicy;
