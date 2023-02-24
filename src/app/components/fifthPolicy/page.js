"use client";
import React, { useState } from "react";

import { Card } from "primereact/card";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

const FifthPolicy = () => {
  const [value, setValue] = useState(0);
  const [spousevalue, setSpouseValue] = useState(0);
  const [childvalue, setChildValue] = useState(0);

  const yourPremium = (value) => {
    return Number(((value * 0.0158) / 100).toFixed(2));
  };
  return (
    <div className="card m-8">
      <Card title="CRITICAL ILLNESS INSURANCE">
        <p className="m-0">
          Protect you and your family from the financial impact of a serious
          illness; 25 illnesses are covered including cancer, heart attack and
          stoke.
        </p>
        <p className="font-semibold text-right my-2 text-xl">
          Monthly premium:
        </p>
        {/* body */}
        <div className="flex my-4">
          <div className="col-4 pl-0">
            <p> Your coverage:</p>
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
                ${yourPremium(value * 10000)}
              </p>
            </div>
          </div>
        </div>
        {
          value!==0 && (
            <>
                      <div className="flex my-4">
          <div className="col-4 pl-0">
            <p> Spouse's coverage:</p>
          </div>
          <div className="col-8 flex">
            <div className="col-9">
              <div className="card flex justify-content-between align-items-center">
                <Slider
                  value={spousevalue}
                  onChange={(e) => setSpouseValue(e.value)}
                  className="w-6"
                />
                <InputText
                  value={`$${spousevalue * 5000}`}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-3"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="font-semibold text-right my-2 text-xl">
                ${yourPremium(spousevalue * 10000)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-4">
          <div className="col-4 pl-0">
            <p className="w-7">
              Dependent child(ren) coverage:
              <br />
              <span className="text-sm">
                (one premium covers all dependent children)
              </span>
            </p>
          </div>
          <div className="col-8 flex">
            <div className="col-9">
              <div className="card flex justify-content-between align-items-center">
                <Slider
                  value={childvalue}
                  onChange={(e) => setChildValue(e.value)}
                  className="w-6"
                />
                <InputText
                  value={`$${childvalue * 2000}`}
                  onChange={(e) => setChildValue(e.target.value)}
                  className="w-3"
                />
              </div>
            </div>
            <div className="col-3">
              <p className="font-semibold text-right my-2 text-xl">
                ${yourPremium(childvalue * 2000)}
              </p>
            </div>
          </div>
        </div>
            </>
          )
        }
        {/* total */}
        <p className="font-semibold text-right my-2 text-3xl">
          {/* Total: ${ yourPremium(value * 10000)} */}
          Total: {`${yourPremium(value * 5000) + yourPremium(spousevalue * 10000) + yourPremium(childvalue * 2000)}`}
        </p>
      </Card>
    </div>
  );
};

export default FifthPolicy;
