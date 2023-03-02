"use client";

import React, { useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

const ThirdPolicy = () => {
  const [value, setValue] = useState(0);
  const [options, setOptions] = useState([
    { label: "Single", value: "Single" },
    {
      label: "Couple, Member + 1 or Family",
      value: "Couple, Member + 1 or Family",
    },
  ]);
  const [selectedOption, setSelectedOption] = useState("Single");

  const handleOptionChange = (e) => {
    setSelectedOption(e.value);
  };

  console.log("g", selectedOption);

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
        <p className="font-semibold text-right my-2 text-3xl">
          Total: $
          {selectedOption === "Couple, Member + 1 or Family"
            ? yourPremium(value * 10000)
            : yourPremium(value * 5000)}
        </p>
      </Card>
    </div>
  );
};

export default ThirdPolicy;
