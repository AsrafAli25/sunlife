"use client";
import React, { useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";

const FourthPolicy = () => {
  const [bundle, setBundle] = useState("Single");
  const [value, setValue] = useState(0);

  const coverageType = [
    { name: "Single" },
    { name: "Couple (or Member + 1 dependent child)" },
    { name: "Family" },
  ];
  const yourPremium = (value) => {
    return Number(((value * 0.0158) / 100).toFixed(2));
  };

  const dropFunc =(e) => {
    setBundle(e.value)
 
    {bundle.name === "Single" && setValue(78)}

  {bundle.name === "Couple (or Member + 1 dependent child)" && setValue(144)}

  {bundle.name === "Family" && setValue(194)}
    console.log('v',value)
  }
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
                onChange={dropFunc}
                options={coverageType}
                optionLabel="name"
                placeholder="Select coverage type"
                // className="w-full md:w-14rem"
                style={{ width: "80%" }}
                value={bundle}
              />
            </div>
            <div className="col-4 pr-0">
              {/* <p className="font-semibold text-right my-2 text-xl">
                {bundle.name === "Single" && "$86.25"}
                {bundle.name === "Couple, Member + 1 or Family" &&
                  "$141.58"}
              </p> */}
            </div>
          </div>
        </div>
        <div className="flex my-4">
          <div className="col-4 pl-0">
            <p> Plan:</p>
          </div>
          <div className="col-8 flex">
            <div className="col-9">
              {/* <div className="card flex justify-content-between align-items-center">
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
              </div> */}
              <p> Option 2</p>
            </div>
            <div className="col-3">
              <p className="font-semibold text-right my-2 text-xl">
                {bundle.name === "Single" && yourPremium(value * 10000)}
              </p>
              <p className="font-semibold text-right my-2 text-xl">
              {bundle.name === "Couple (or Member + 1 dependent child)" && yourPremium(value * 15000)}
              </p>
              <p className="font-semibold text-right my-2 text-xl">
              {bundle.name === "Family" && yourPremium(value * 20000)}
              </p>
            </div>
          </div>
        </div>
        {/* total */}
        <p className="font-semibold text-right my-2 text-3xl">
          Total: ${bundle.name === "Single)" && yourPremium(value * 10000)}
          {bundle.name === "Couple (or Member + 1 dependent child)" &&
            yourPremium(value * 15000)}
          {bundle.name === "Family" && yourPremium(value * 20000)}
        </p>
      </Card>
    </div>
  );
};

export default FourthPolicy;
