import React, { useEffect, useState, useContext } from "react";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Card } from "primereact/card";
import { ValuesContext } from "@/app/ValuesContext";

const SecondPolicy = () => {
  // slider value
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

  const { valueTwo, setValueTwo } = useContext(ValuesContext);

  const handleChange = () => {
    console.log("value is changing comp 2");
    setValueTwo(total());
  };

  const yourPremium = (value) => {
    return Number(((value * 0.0158) / 100).toFixed(2));
  };
  const spousePremium = (value) => {
    return Number(((value * 0.0057) / 100).toFixed(2));
  };

  const total = () => {
    return (
      yourPremium(value * 5000) +
      spousePremium(spouseValue * 5000) +
      (child === "yes" ? 2.6 : 0)
    ).toFixed(2);
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
      <Card title="TERM LIFE INSURANCE">
        <p className="m-0">
          Help protect your family’s lifestyle and their financial future if
          you’re not here to take care of them.
        </p>
        <p className="font-semibold text-right my-2 text-xl">
          Monthly premium:
        </p>

        {/* body */}
        <div className="flex my-4">
          <div className="col-4">
            <p>Your coverage:</p>
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
                ${/* {value *5000} */}
                {yourPremium(value * 5000)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-4">
          <div className="col-4">
            <p>Spouse's coverage:</p>
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
              {spouseValue > value && (
                <p className="p-error pt-2 w-6 font-semibold">
                  Spouse coverage cannot exceed the member's coverage
                </p>
              )}
            </div>
            <div className="col-3">
              {spouseValue > value ? (
                <p className="font-semibold text-right my-2 text-xl">
                  $ <span>0.00</span>
                </p>
              ) : (
                <p className="font-semibold text-right my-2 text-xl">
                  ${spousePremium(spouseValue * 5000)}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex my-4">
          <div className="col-4">
            <p className="w-7">
              Would you like to cover your child(ren)? <br />
              <span className="text-sm">
                (one premium covers all dependent children)
              </span>
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
                {child === "yes" ? "$2.60" : "$0.00"}
              </p>
            </div>
          </div>
        </div>

        {/* total */}
        <p className="font-semibold text-right my-2 text-3xl">
          Total: ${total()}
        </p>

        <p>Value two: {valueTwo}</p>

        {/* <button onClick={handleClick}>Set Value One</button> */}
      </Card>
    </div>
  );
};

export default SecondPolicy;
