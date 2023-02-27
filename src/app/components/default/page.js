import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

// for validation
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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
  const [validGender, setValidGender] = useState("");
  const [validMonth, setValidMonth] = useState("");
  const [validYear, setValidYear] = useState("");
  const [formErrors, setFormErrors] = useState({});

  // schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    gender: Yup.string().required("Gender is required"),
    country: Yup.string().required("Country is required"),
  });

  const countryOptions = [
    { label: "United States", value: "United States" },
    { label: "Canada", value: "Canada" },
    { label: "Mexico", value: "Mexico" },
  ];

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
    if (!validGender) {
      errors.validGender = "Gender is required";
    }
    if (!city) {
      errors.city = "City is required";
    }
    if (!validMonth) {
      errors.validMonth = "Month is required";
    }
    if (!validYear) {
      errors.validYear = "Year is required";
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
                    {formErrors.city && (
                      <p className="p-error">{formErrors.city}</p>
                    )}
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
                    {formErrors.validGender && (
                      <p className="p-error">{formErrors.validGender}</p>
                    )}
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="col-6">
                    <p className="primaryText text-xl">Your date of birth:</p>
                  </div>
                  <div className="col-6 flex w-5 pr-0">
                    <div className="w-full">
                      <Dropdown
                        value={month}
                        onChange={(e) => setMonth(e.value)}
                        options={monthName}
                        optionLabel="name"
                        placeholder="Select a Month"
                        // className="w-full md:w-14rem"
                        style={{ width: "90%", marginRight: "1%" }}
                      />
                      {formErrors.validMonth && (
                        <p className="p-error">{formErrors.validMonth}</p>
                      )}
                    </div>
                    <div className="w-full">
                      <Dropdown
                        value={year}
                        onChange={(e) => setYear(e.value)}
                        options={yearName}
                        optionLabel="name"
                        placeholder="Select a Year"
                        // className="w-full md:w-14rem"
                        style={{ width: "90%", marginLeft: "1%" }}
                      />
                      {formErrors.validYear && (
                        <p className="p-error">{formErrors.validYear}</p>
                      )}
                    </div>
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

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          gender: "",
          country: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission here
          console.log("form values", values);
        }}
      >
        {(formik) => (
          <Form>
            <div className="p-fluid">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                as={InputText}
                className={
                  formik.errors.name && formik.touched.name ? "p-invalid" : ""
                }
              />
              <ErrorMessage name="name" />
            </div>

            <div className="p-fluid">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                as={InputText}
                className={
                  formik.errors.email && formik.touched.email ? "p-invalid" : ""
                }
              />
              <ErrorMessage name="email" />
            </div>

            <div className="p-fluid">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                as={InputText}
                type="password"
                className={
                  formik.errors.password && formik.touched.password
                    ? "p-invalid"
                    : ""
                }
              />
              <ErrorMessage name="password" />
            </div>

            <div className="p-field-radiobutton">
              <label>Gender</label>
              <div className="p-formgroup-inline">
                <Field
                  type="radio"
                  name="gender"
                  value="male"
                  as={RadioButton}
                  className={
                    formik.errors.gender && formik.touched.gender
                      ? "p-invalid"
                      : ""
                  }
                />
                <label htmlFor="gender" className="p-radiobutton-label">
                  Male
                </label>
                <Field
                  type="radio"
                  name="gender"
                  value="female"
                  as={RadioButton}
                  className={
                    formik.errors.gender && formik.touched.gender
                      ? "p-invalid"
                      : ""
                  }
                />
                <label htmlFor="gender" className="p-radiobutton-label">
                  Female
                </label>
              </div>
              <ErrorMessage name="gender" />
            </div>

            <div className="p-field">
              <label htmlFor="country">Country</label>
              <Field
                name="country"
                as={Dropdown}
                options={countryOptions}
                className={
                  formik.errors.country && formik.touched.country
                    ? "p-invalid"
                    : ""
                }
              />
              <ErrorMessage name="country" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Default;
