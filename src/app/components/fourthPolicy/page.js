"use client";
import React, { useState, useRef, useContext, useEffect } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";

import { ValuesContext } from "@/app/ValuesContext";

const FourthPolicy = () => {
  const [options, setOptions] = useState([
    // { label: "None", value: "None" },
    { label: "Single", value: "Single" },
    {
      label: "Couple (or Member + 1 dependent child)",
      value: "Couple (or Member + 1 dependent child)",
    },
    { label: "Family", value: "Family" },
  ]);
  const [selectedOption, setSelectedOption] = useState(
    () => {
      const storedValue = window.localStorage.getItem("selectedOption");
      return storedValue !== null ? storedValue : "";
      }
  );
  const { valueFour, setValueFour } = useContext(ValuesContext);

  const totalRef = useRef(0);

  const handleChange = () => {
    console.log("value is changing comp 4");
    console.log(totalRef.current.innerText);
    setValueFour(totalRef.current.innerText);
  };

  useEffect(() => {
    handleChange();
    window.localStorage.setItem("selectedOption", selectedOption);
  }, [handleChange,selectedOption]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.value);
  };

  const yourPremium = (value) => {
    return (value * 0.0158).toFixed(2);
  };

  return (
    <div className="card m-8">
      <Card title="EXTENDED HEALTHCARE INSURANCE">
        <p className="m-0">
          Save out-of-pocket costs not covered by your provincial health plan
          including prescription drugs, massage therapy, physiotherapy,
          chiropractor visits, vision care and more.
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
                placeholder="Select coverage type"
                style={{ width: "80%" }}
                value={selectedOption}
              />
            </div>
            <div className="col-4 pr-0"></div>
          </div>
        </div>
        <div className="flex my-4">
          <div className="col-4 pl-0">
            <p> Plan:</p>
          </div>
          <div className="col-8 flex">
            <div className="col-9">
              <p> Option 2</p>
            </div>
            <div className="col-3">
              <p className="font-semibold text-right my-2 text-xl">
                {selectedOption === "" && yourPremium(0.0)}
              </p>
              <p className="font-semibold text-right my-2 text-xl">
                {selectedOption === "Single" && yourPremium(10000)}
              </p>
              <p className="font-semibold text-right my-2 text-xl">
                {selectedOption === "Couple (or Member + 1 dependent child)" &&
                  yourPremium(15000)}
              </p>
              <p className="font-semibold text-right my-2 text-xl">
                {selectedOption === "Family" && yourPremium(20000)}
              </p>
            </div>
          </div>
        </div>
        {/* total */}
        <p>Value four: {valueFour}</p>
        <p className="font-semibold text-right my-2 text-3xl">
          Total: $
          <span ref={totalRef}>
            {selectedOption === "" && yourPremium(0.0)}
            {selectedOption === "Single" && yourPremium(10000)}
            {selectedOption === "Couple (or Member + 1 dependent child)" &&
              yourPremium(15000)}
            {selectedOption === "Family" && yourPremium(20000)}
          </span>
        </p>
      </Card>
    </div>
  );
};

export default FourthPolicy;
