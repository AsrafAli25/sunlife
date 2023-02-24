import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";

const Default = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [gender, setGender] = useState("");
  const [smoke, setSmoke] = useState("");
  const [spouse, setSpouse] = useState("");
  const [child, setChild] = useState("");
  const [spouseVisibility, setspouseVisibility] = useState(false);

  // initial continue btn
  const [continueBtnVisible, setContinueBtnVisible] = useState(true);
  const [stepsVisibility, setStepsVisibility] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");


  // states for validation
  const [city, setCity] = useState(null);
  const [validgender, setValidGender] = useState('');
  const [formErrors, setFormErrors] = useState({});


  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const monthName = [
    { name: "January" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const yearName = [
    { name: "1999" },
    { name: "1998" },
    { name: "1997" },
    { name: "1996" },
    { name: "1995" },
  ];

  const genderFunc = (e) => {
    setGender(e.value);
    e.value === "female"
      ? setspouseVisibility(true)
      : setspouseVisibility(false);
  };

  // go to top func
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setStepsVisibility(true);
    setContinueBtnVisible(false);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };


  // validation functionality
  const validateForm = () => {
    let errors = {};
    // if (!name) {
    //   errors.name = 'Name is required';
    // }
    if (!validgender) {
      errors.validgender = 'Gender is required';
    }
    if (!city) {
      errors.city = 'City is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle form submission
    }
  };

  return (
    <>
      {/* default screen */}
      <form onSubmit={handleSubmit}>
        <div className="p-8">
          <div class="grid primaryBg">
            <div className="col-2 p-8">
              <div
                className="flex align-items-center justify-content-center secondaryBg"
                style={{ width: "70px", height: "70px", borderRadius: "50%" }}
              >
                <i className="pi pi-user"></i>
              </div>
            </div>
            <div className="col p-6 pl-0">
              <div className="wrap">
                <h2 className="mb-5">TELL US ABOUT YOURSELF</h2>

                <div className="flex mb-4">
                  <div className="col-6">
                    <p className="primaryText text-xl">Select your province:</p>
                  </div>
                  <div className="col-6">
                    <Dropdown
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder="Select a City"
                      // className="w-full md:w-14rem"
                      style={{ width: "80%" }}
                      value={selectedCity}
                    />
                     {formErrors.city && <p className="p-error">{formErrors.city}</p>}
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="col-6">
                    <p className="primaryText text-xl">Your gender:</p>
                  </div>
                  <div className="col-6">
                    <div className="flex flex-wrap gap-3">
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="ingredient1"
                          name="pizza"
                          value="Cheese"
                          onChange={(e) => setSpouse(e.value)}
                          checked={spouse === "Cheese"}
                        />
                        <label htmlFor="ingredient1" className="ml-2">
                          Male
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="ingredient2"
                          name="pizza"
                          value="Mushroom"
                          onChange={(e) => setSpouse(e.value)}
                          checked={spouse === "Mushroom"}
                        />
                        <label htmlFor="ingredient2" className="ml-2">
                          Female
                        </label>
                      </div>
                    </div>
                      {formErrors.validgender && <p className="p-error">{formErrors.validgender}</p>}
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="col-6">
                    <p className="primaryText text-xl">Your date of birth:</p>
                  </div>
                  <div className="col-6">
                    <Dropdown
                      value={month}
                      onChange={(e) => setMonth(e.value)}
                      options={monthName}
                      optionLabel="name"
                      placeholder="Select a Month"
                      // className="w-full md:w-14rem"
                      style={{ width: "38%", marginRight: "2%" }}
                    />
                    <Dropdown
                      value={year}
                      onChange={(e) => setYear(e.value)}
                      options={yearName}
                      optionLabel="name"
                      placeholder="Select a Year"
                      // className="w-full md:w-14rem"
                      style={{ width: "38%", marginLeft: "2%" }}
                    />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="col-6">
                    <p className="primaryText text-xl">Do you smoke?</p>
                  </div>
                  <div className="col-6">
                    <div className="flex flex-wrap gap-3">
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="ingredient1"
                          name="pizza"
                          value="Cheese"
                          onChange={(e) => setSmoke(e.value)}
                          checked={smoke === "Cheese"}
                        />
                        <label htmlFor="ingredient1" className="ml-2">
                          Yes
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="ingredient2"
                          name="pizza"
                          value="Mushroom"
                          onChange={(e) => setSmoke(e.value)}
                          checked={smoke === "Mushroom"}
                        />
                        <label htmlFor="ingredient2" className="ml-2">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="col-6">
                    <p className="primaryText text-xl">Do you have a spouse?</p>
                  </div>
                  <div className="col-6">
                    <div className="flex flex-wrap gap-3">
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="gender2"
                          name="gender"
                          value="female"
                          onChange={genderFunc}
                          checked={gender === "female"}
                        />
                        <label htmlFor="gender2" className="ml-2">
                          Yes
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="gender1"
                          name="gender"
                          value="male"
                          onChange={genderFunc}
                          checked={gender === "male"}
                        />
                        <label htmlFor="gender1" className="ml-2">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="col-6">
                    <p className="primaryText text-xl">
                      Do you have dependent child(ren)?
                    </p>
                  </div>
                  <div className="col-6">
                    <div className="flex flex-wrap gap-3">
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="ingredient1"
                          name="pizza"
                          value="Cheese"
                          onChange={(e) => setChild(e.value)}
                          checked={child === "Cheese"}
                        />
                        <label htmlFor="ingredient1" className="ml-2">
                          Yes
                        </label>
                      </div>
                      <div className="flex align-items-center">
                        <RadioButton
                          inputId="ingredient2"
                          name="pizza"
                          value="Mushroom"
                          onChange={(e) => setChild(e.value)}
                          checked={child === "Mushroom"}
                        />
                        <label htmlFor="ingredient2" className="ml-2">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* for spouse */}
          {spouseVisibility && (
            <div className="grid primaryBg">
              <div className="col-2 p-8">
                <div
                  className="flex align-items-center justify-content-center secondaryBg"
                  style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                >
                  <i className="pi pi-user"></i>
                </div>
              </div>
              <div className="col p-6 pl-0">
                <div className="wrap">
                  <h2 className="mb-5">TELL US ABOUT YOUR SPOUSE</h2>
                  <div className="flex mb-4">
                    <div className="col-6">
                      <p className="primaryText text-xl">Spouse's gender:</p>
                    </div>
                    <div className="col-6">
                      <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="ingredient1"
                            name="pizza"
                            value="Cheese"
                            onChange={(e) => setGender(e.value)}
                            checked={gender === "Cheese"}
                          />
                          <label htmlFor="ingredient1" className="ml-2">
                            Male
                          </label>
                        </div>
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="ingredient2"
                            name="pizza"
                            value="Mushroom"
                            onChange={(e) => setGender(e.value)}
                            checked={gender === "Mushroom"}
                          />
                          <label htmlFor="ingredient2" className="ml-2">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="col-6">
                      <p className="primaryText text-xl">
                        Spouse's date of birth:
                      </p>
                    </div>
                    <div className="col-6">
                      <Dropdown
                        value={month}
                        onChange={(e) => setMonth(e.value)}
                        options={monthName}
                        optionLabel="name"
                        placeholder="Select a Month"
                        // className="w-full md:w-14rem"
                        style={{ width: "38%", marginRight: "2%" }}
                      />
                      <Dropdown
                        value={year}
                        onChange={(e) => setYear(e.value)}
                        options={yearName}
                        optionLabel="name"
                        placeholder="Select a Year"
                        // className="w-full md:w-14rem"
                        style={{ width: "38%", marginLeft: "2%" }}
                      />
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="col-6">
                      <p className="primaryText text-xl">
                        Does your spouse smoke?{" "}
                      </p>
                    </div>
                    <div className="col-6">
                      <div className="flex flex-wrap gap-3">
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="ingredient1"
                            name="pizza"
                            value="Cheese"
                            onChange={(e) => setSmoke(e.value)}
                            checked={smoke === "Cheese"}
                          />
                          <label htmlFor="ingredient1" className="ml-2">
                            Yes
                          </label>
                        </div>
                        <div className="flex align-items-center">
                          <RadioButton
                            inputId="ingredient2"
                            name="pizza"
                            value="Mushroom"
                            onChange={(e) => setSmoke(e.value)}
                            checked={smoke === "Mushroom"}
                          />
                          <label htmlFor="ingredient2" className="ml-2">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* continue button */}
        <div className="card flex justify-content-center ">
          <Button
            label="submit"
            // onClick={goToTop}
            // style={{ display: !continueBtnVisible ? "none" : "" }}
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default Default;
