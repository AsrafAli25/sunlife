"use client";

import React, { useContext } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

import { ValuesContext } from "@/app/ValuesContext";

const SeventhPolicy = () => {
  const {
    valueOne,
    valueTwo,
    valueThree,
    valueFour,
    valueFive,
    valueSix,
  } = useContext(ValuesContext);

  const totalArr = [valueOne, valueTwo, valueThree,valueFour,valueFive,valueSix];
  const tv = totalArr.reduce((a, b) => (Number(a) + Number(b)).toFixed(2));

  return (
    <div className="card m-8">
      <Card title="Total estimated monthly premium before applicable taxes:">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
     
        <div>
          <h4 className="my-3">BUNDLED PLAN ${Number(valueOne)}</h4>
          <h4 className="my-3">TERM LIFE INSURANCE ${valueTwo}</h4>
          <h4 className="my-3">
            ACCIDENTAL DEATH AND DISMEMBERMENT INSURANCE ${valueThree}
          </h4>
          <h4 className="my-3">
          EXTENDED HEALTHCARE INSURANCE ${valueFour}
          </h4>
          <h4 className="my-3">
          CRITICAL ILLNESS INSURANCE ${valueFive}
          </h4>
          <h4 className="my-3">
          LONG-TERM DISABILITY INSURANCE ${valueSix}
          </h4>

          {/* {console.log('v1',typeof(Number(valueOne)))}
          {console.log('v2',typeof(Number(valueTwo)))}
          {console.log('v3',typeof(Number(valueThree)))} */}

          {/* <h1>Total ${(Number(valueOne) + Number(valueTwo) + Number(valueThree)).toFixed(2)}</h1> */}
          <h1>Total ${tv}</h1>

          {/* {console.log('t',(Number(valueOne) + Number(valueTwo) + Number(valueThree)).toFixed(2))} */}
        </div>
        <div className="card flex mt-5">
          <Button label="Apply now" type="submit" />
        </div>
      </Card>
    </div>
  );
};

export default SeventhPolicy;
