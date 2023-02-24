"use client";

import React, { useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";

const FirstPolicy = () => {
  const [bundle, setBundle] = useState("None");

  const coverageType = [
    { name: "None" },
    { name: "Single" },
    { name: "Couple (or Member + 1 dependent child)" },
    { name: "Family" },
  ];
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
                onChange={(e) => setBundle(e.value)}
                options={coverageType}
                optionLabel="name"
                placeholder="Select coverage type"
                // className="w-full md:w-14rem"
                style={{ width: "80%" }}
                value={bundle}
              />
            </div>
            <div className="col-4 pr-0">
              <p className="font-semibold text-right my-2 text-xl">
                {bundle.name === "None" && "$0.00"}
                {bundle.name === "Single" && "$86.25"}
                {bundle.name === "Couple (or Member + 1 dependent child)" &&
                  "$141.58"}
                {bundle.name === "Family" && "$183.41"}
              </p>
            </div>
          </div>
        </div>
        {/* body */}
        {bundle.name !== "None" && (
          bundle.name !== ''&&(
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
                      {bundle.name === "Single" && "Single"}
                      {bundle.name ===
                        "Couple (or Member + 1 dependent child)" &&
                        "Couple, Member + 1 or Family"}
                      {bundle.name === "Family" && "Family"}
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
                      {bundle.name === "Single" && "Single"}
                      {bundle.name ===
                        "Couple (or Member + 1 dependent child)" &&
                        "Couple or Member + 1"}
                      {bundle.name === "Family" && "Family"}
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
          )
        )}
        {/* total */}
        <p className="font-semibold text-right my-2 text-3xl">
          Total:
          <span className="font-semibold text-right my-2 text-3xl ml-2">
            {bundle.name === "None" && "$0.00"}
            {bundle.name === "Single" && "$86.25"}
            {bundle.name === "Couple (or Member + 1 dependent child)" &&
              "$141.58"}
            {bundle.name === "Family" && "$183.41"}
          </span>
        </p>
      </Card>
    </div>
  );
};

export default FirstPolicy;
