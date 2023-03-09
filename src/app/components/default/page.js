import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";

// for validation
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Default = () => {
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [gender, setGender] = useState("");
  const [smoke, setSmoke] = useState("");
  const [spouseVisibility, setspouseVisibility] = useState(false);

  // initial continue btn
  const [continueBtnVisible, setContinueBtnVisible] = useState(true);
  const [stepsVisibility, setStepsVisibility] = useState(false);

  // schema
  const validationSchema = Yup.object().shape({
    gender: Yup.string().required("Gender is required"),
    smoke: Yup.string().required("Smoke is required"),
    spouse: Yup.string().required("Spouse is required"),
    child: Yup.string().required("Child is required"),
    country: Yup.string().required("Country is required"),
    month: Yup.string().required("Month is required"),
    year: Yup.string().required("Year is required"),
  });

  const countryOptions = [
    { label: "United States", value: "United States" },
    { label: "Canada", value: "Canada" },
    { label: "Mexico", value: "Mexico" },
  ];

  const monthName = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
  ];

  const yearName = [
    { label: 1999, value: 1999 },
    { label: 1998, value: 1998 },
    { label: 1997, value: 1997 },
    { label: 1996, value: 1996 },
    { label: 1995, value: 1995 },
    { label: 1994, value: 1994 },
    { label: 1993, value: 1993 },
  ];

  // go to top func
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setStepsVisibility(true);
    setContinueBtnVisible(false);
  };

  return (
    <>
      {/* default screen */}
      <Formik
        initialValues={{
          gender: "",
          smoke: "",
          spouse: "",
          child: "",
          country: null,
          month: null,
          year: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission here
          console.log("form values", values);
          values.spouse === "yes"
            ? setspouseVisibility(true)
            : setspouseVisibility(false);
        }}
      >
        {(formik) => (
          <Form>
            <div className="p-8">
              <div class="grid primaryBg">
                <div className="col-2 p-8">
                  <div
                    className="flex align-items-center justify-content-center secondaryBg"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="pi pi-user"></i>
                  </div>
                </div>
                <div className="col p-6 pl-0">
                  <div className="wrap">
                    <h2 className="mb-5">TELL US ABOUT YOURSELF</h2>

                    <div className="flex mb-4">
                      <div className="col-6">
                        <p className="primaryText text-xl">
                          Select your province:
                        </p>
                      </div>
                      <div className="col-6">
                        <Field
                          name="country"
                          as={Dropdown}
                          options={countryOptions}
                          style={{ width: "80%" }}
                          placeholder="Select your country"
                          className={
                            formik.errors.country && formik.touched.country
                              ? "p-invalid"
                              : ""
                          }
                        />

                        <p className="p-error pt-2">
                          {" "}
                          <ErrorMessage name="country" />
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      <div className="col-6">
                        <p className="primaryText text-xl">Your gender:</p>
                      </div>
                      <div className="col-6">
                        <div className="flex flex-wrap gap-3">
                          <div className="flex align-items-center">
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
                            <label htmlFor="ingredient1" className="ml-2">
                              Male
                            </label>
                          </div>
                          <div className="flex align-items-center">
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
                            <label htmlFor="ingredient2" className="ml-2">
                              Female
                            </label>
                          </div>
                        </div>
                        <p className="p-error pt-2">
                          {" "}
                          <ErrorMessage name="gender" />
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      <div className="col-6">
                        <p className="primaryText text-xl">
                          Your date of birth:
                        </p>
                      </div>
                      <div className="col-6 flex w-5 pr-0">
                        <div className="w-full">
                          <Field
                            name="month"
                            as={Dropdown}
                            options={monthName}
                            placeholder="Select a month"
                            style={{ width: "90%", marginRight: "1%" }}
                            className={
                              formik.errors.month && formik.touched.month
                                ? "p-invalid"
                                : ""
                            }
                          />
                          <p className="p-error pt-2">
                            {" "}
                            <ErrorMessage name="month" />
                          </p>
                        </div>
                        <div className="w-full">
                          <Field
                            name="year"
                            as={Dropdown}
                            options={yearName}
                            placeholder="Select a year"
                            style={{ width: "90%", marginLeft: "1%" }}
                            className={
                              formik.errors.year && formik.touched.year
                                ? "p-invalid"
                                : ""
                            }
                          />
                          <p className="p-error pt-2">
                            {" "}
                            <ErrorMessage name="year" />
                          </p>
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
                            <Field
                              type="radio"
                              name="smoke"
                              value="yes"
                              as={RadioButton}
                              className={
                                formik.errors.smoke && formik.touched.smoke
                                  ? "p-invalid"
                                  : ""
                              }
                            />
                            <label htmlFor="ingredient1" className="ml-2">
                              Yes
                            </label>
                          </div>
                          <div className="flex align-items-center">
                            <Field
                              type="radio"
                              name="smoke"
                              value="no"
                              as={RadioButton}
                              className={
                                formik.errors.smoke && formik.touched.smoke
                                  ? "p-invalid"
                                  : ""
                              }
                            />
                            <label htmlFor="ingredient2" className="ml-2">
                              No
                            </label>
                          </div>
                        </div>
                        <p className="p-error pt-2">
                          {" "}
                          <ErrorMessage name="smoke" />
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      <div className="col-6">
                        <p className="primaryText text-xl">
                          Do you have a spouse?
                        </p>
                      </div>

                      <div className="col-6">
                        <div className="flex flex-wrap gap-3">
                          <div className="flex align-items-center">
                            <Field
                              type="radio"
                              name="spouse"
                              value="yes"
                              as={RadioButton}
                              className={
                                formik.errors.spouse && formik.touched.spouse
                                  ? "p-invalid"
                                  : ""
                              }
                            />
                            <label htmlFor="ingredient1" className="ml-2">
                              Yes
                            </label>
                          </div>
                          <div className="flex align-items-center">
                            <Field
                              type="radio"
                              name="spouse"
                              value="no"
                              as={RadioButton}
                              className={
                                formik.errors.spouse && formik.touched.spouse
                                  ? "p-invalid"
                                  : ""
                              }
                            />
                            <label htmlFor="ingredient2" className="ml-2">
                              No
                            </label>
                          </div>
                        </div>
                        <p className="p-error pt-2">
                          {" "}
                          <ErrorMessage name="spouse" />
                        </p>
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
                            <Field
                              type="radio"
                              name="child"
                              value="yes"
                              as={RadioButton}
                              className={
                                formik.errors.child && formik.touched.child
                                  ? "p-invalid"
                                  : ""
                              }
                            />
                            <label htmlFor="ingredient1" className="ml-2">
                              Yes
                            </label>
                          </div>
                          <div className="flex align-items-center">
                            <Field
                              type="radio"
                              name="child"
                              value="no"
                              as={RadioButton}
                              className={
                                formik.errors.child && formik.touched.child
                                  ? "p-invalid"
                                  : ""
                              }
                            />
                            <label htmlFor="ingredient2" className="ml-2">
                              No
                            </label>
                          </div>
                        </div>
                        <p className="p-error pt-2">
                          {" "}
                          <ErrorMessage name="child" />
                        </p>
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
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                      }}
                    >
                      <i className="pi pi-user"></i>
                    </div>
                  </div>
                  <div className="col p-6 pl-0">
                    <div className="wrap">
                      <h2 className="mb-5">TELL US ABOUT YOUR SPOUSE</h2>

                      <div className="flex mb-4">
                        <div className="col-6">
                          <p className="primaryText text-xl">
                            Spouse's gender:
                          </p>
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
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Default;
