"use client";

import React, { useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";

const FirstPolicy = () => {
  const [options, setOptions] = useState([
    { label: "None", value: "None" },
    { label: "Single", value: "Single" },
    {
      label: "Couple (or Member + 1 dependent child)",
      value: "Couple (or Member + 1 dependent child)",
    },
    { label: "Family", value: "Family" },
  ]);
  const [selectedOption, setSelectedOption] = useState("None"); 

  const handleOptionChange = (e) => {
    setSelectedOption(e.value);
  };

  console.log("g", selectedOption);
  return (
    <div className="card m-8">
      <Card title="BUNDLED PLAN">
        <p className="m-0">
          The Bundled Plan helps you save money, while building a safety net for
          you and your loved ones' future.
        </p>
        <p className="font-semibold text-right my-2 text-xl">
          Monthly premium:
        </p>
        <div className="flex">
          <div className="col-6 pl-0">
            <p>Coverage type:</p>
          </div>
          <div className="col-6 flex pr-0">
            <div className="col-8">
              <Dropdown
                value={selectedOption}
                options={options}
                onChange={handleOptionChange}
                style={{ width: "80%" }}
              />
            </div>
            <div className="col-4 pr-0">
              <p className="font-semibold text-right my-2 text-xl">
                {selectedOption === "None" && "$0.00"}
                {selectedOption === "Single" && "$86.25"}
                {selectedOption === "Couple (or Member + 1 dependent child)" &&
                  "$141.58"}
                {selectedOption === "Family" && "$183.41"}
              </p>
            </div>
          </div>
        </div>
        {/* body */}
        {selectedOption !== "None" && selectedOption !== "" && (
          <main>
            <p className="my-2">
              Monthly premiums include coverage for four products:
            </p>
            <div className="flex my-4">
              <div className="col-6 pl-0">
                <p className="font-semibold text-2xl w-6">
                  TERM LIFE INSURANCE:
                </p>
              </div>
              <div className="col-6">
                <p className="font-normal text-xl">$30,000 (Member only)</p>
              </div>
            </div>
            <div className="flex my-4">
              <div className="col-6 pl-0">
                <p className="font-semibold text-2xl w-6">
                  LONG-TERM DISABILITY INSURANCE:
                </p>
              </div>
              <div className="col-6">
                <p className="font-normal text-xl w-5">
                  $750 a month (Member only)
                </p>
              </div>
            </div>
            <div className="flex my-4">
              <div className="col-6 pl-0">
                <p className="font-semibold text-2xl w-6">
                  ACCIDENTAL DEATH & DISMEMBERMENT INSURANCE:
                </p>
              </div>
              <div className="col-6">
                <p className="font-normal text-xl">
                  $30,000 (
                  {
                    <span>
                      {selectedOption === "Single" && "Single"}
                      {selectedOption ===
                        "Couple (or Member + 1 dependent child)" &&
                        "Couple, Member + 1 or Family"}
                      {selectedOption === "Family" && "Family"}
                    </span>
                  }
                  )
                </p>
              </div>
            </div>
            <div className="flex my-4">
              <div className="col-6 pl-0">
                <p className="font-semibold text-2xl w-6">
                  EXTENDED HEALTHCARE INSURANCE:
                </p>
              </div>
              <div className="col-6">
                <p className="font-normal text-xl">
                  Option 1 (
                  {
                    <span>
                      {selectedOption === "Single" && "Single"}
                      {selectedOption ===
                        "Couple (or Member + 1 dependent child)" &&
                        "Couple or Member + 1"}
                      {selectedOption === "Family" && "Family"}
                    </span>
                  }
                  )
                </p>
              </div>
            </div>
            <p className="my-2">
              Make it your own: add any of the coverage options below to your
              Bundled Plan to get more of what you want.
            </p>
          </main>
        )}
        {/* total */}
        <p className="font-semibold text-right my-2 text-3xl">
          Total:
          <span className="font-semibold text-right my-2 text-3xl ml-2">
            {selectedOption === "None" && "$0.00"}
            {selectedOption === "Single" && "$86.25"}
            {selectedOption === "Couple (or Member + 1 dependent child)" &&
              "$141.58"}
            {selectedOption === "Family" && "$183.41"}
          </span>
        </p>
      </Card>
    </div>
  );
};

export default FirstPolicy;
