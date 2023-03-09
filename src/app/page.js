"use client";

import React, { useState, useRef } from "react";

// prime react imports
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";

// local component imports
import Default from "./components/default/page";
import FirstPolicy from "./components/firstPolicy/page";
import SecondPolicy from "./components/secondPolicy/page";
import ThirdPolicy from "./components/thirdPolicy/page";
import FourthPolicy from "./components/fourthPolicy/page";
import FifthPolicy from "./components/fifthPolicy/page";
import SixthPolicy from "./components/sixthPolicy/page";
import SeventhPolicy from "./components/seventhPolicy/page";

// validation imports
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// translations component imports
import { useTranslation } from "react-i18next";
import Link from "next/link";
import i18n from "./i18n";


// translation functions
i18n.init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  allLanguages: ["en", "fr", "es"], // set allLanguages option here
});

const MultiStepForm = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [language, setLanguage] = useState(i18n.language);

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(null);

  const genderYesRef= useRef()


  // for spouse
  const [spouseVisibility, setspouseVisibility] = useState(false);

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const nextStep = () => {
    setActiveIndex(activeIndex + 1);
  };

  const prevStep = () => {
    setActiveIndex(activeIndex - 1);
  };

  const optionList = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const validationSchema = Yup.object().shape({
    country: Yup.string().required("Country is required"),
    gender: Yup.string().required("Gender is required"),
    month: Yup.string().required("Month is required"),
    year: Yup.string()
      .required("Year is required"),
      // .min(1990, "You must have been born in 1990 or later."),
    // .max(1995, "You must have been born in 1995 or earlier."),
    smoke: Yup.string().required("Select an option"),
    spouse: Yup.string().required("Spouse is required"),
    child: Yup.string().required("Select an option"),
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
    { label: 2001, value: 2001 },
    { label: 2000, value: 2000 },
    { label: 1999, value: 1999 },
    { label: 1998, value: 1998 },
    { label: 1997, value: 1997 },
    { label: 1996, value: 1996 },
    { label: 1995, value: 1995 },
    { label: 1994, value: 1994 },
    { label: 1993, value: 1993 },
    { label: 1992, value: 1992 },
    { label: 1991, value: 1991 },
    { label: 1990, value: 1990 },
    { label: 1989, value: 1989 },
    { label: 1988, value: 1988 },
  ];

  // const openSpouse = ()=>{
  //   console.log('run')
  //   setspouseVisibility(true);
  //   console.log(genderYesRef.current === 'undefined' && genderYesRef.current.value==='yes')

  // }
  // const closeSpouse = ()=>{
  //   console.log('run')
  //   setspouseVisibility(false);
  // }
  return (
    <main>
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        <TabPanel header="Step 1">
          <div>
            <h1>Step 1</h1>
            <Formik
              initialValues={{
                country: "",
                gender: "",
                month: "",
                year: "",
                smoke: "",
                spouse: "",
                child: "",
              }}
              validationSchema={validationSchema}
              onSubmit={() => nextStep()}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                formik,
              }) => (
                <Form>
                  {/*  */}
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
                              <Dropdown
                                value={values.country}
                                options={countryOptions}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Select an option"
                                name="country"
                                style={{ width: "80%" }}
                              />
                              <p className="p-error font-semibold  pt-1">
                                <ErrorMessage name="country" />
                              </p>
                            </div>
                          </div>

                          <div className="flex mb-4">
                            <div className="col-6">
                              <p className="primaryText text-xl">
                                Your gender:
                              </p>
                            </div>
                            <div className="col-6">
                              <div className="flex flex-wrap gap-3">
                                <div className="flex align-items-center">
                                  <Field
                                    as={RadioButton}
                                    inputId="male"
                                    name="gender"
                                    value="male"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.gender === "male"}
                                  />
                                  <label className="ml-2" htmlFor="male">
                                    Male
                                  </label>
                                </div>
                                <div className="flex align-items-center">
                                  <Field
                                    as={RadioButton}
                                    inputId="female"
                                    name="gender"
                                    value="female"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.gender === "female"}
                                  />
                                  <label className="ml-2" htmlFor="female">
                                    Female
                                  </label>
                                </div>
                              </div>
                              <p className="p-error font-semibold  pt-1">
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
                                <Dropdown
                                  value={values.month}
                                  options={monthName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="month"
                                  placeholder="Select a month"
                                  style={{ width: "90%", marginRight: "1%" }}
                                />
                                <p className="p-error font-semibold  pt-1">
                                  <ErrorMessage name="month" />
                                </p>
                              </div>
                              <div className="w-full">
                                <Dropdown
                                  value={values.year}
                                  options={yearName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="year"
                                  placeholder="Select a year"
                                  style={{ width: "90%", marginLeft: "1%" }}
                                />
                                <p className="p-error font-semibold  pt-1">
                                  <ErrorMessage name="year" />
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex mb-4">
                            <div className="col-6">
                              <p className="primaryText text-xl">
                                Do you smoke?
                              </p>
                            </div>
                            <div className="col-6">
                              <div className="flex flex-wrap gap-3">
                                <div className="flex align-items-center">
                                  <Field
                                    as={RadioButton}
                                    inputId="yes"
                                    name="smoke"
                                    value="yes"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.smoke === "yes"}
                                  />
                                  <label className="ml-2" htmlFor="yes">
                                    Yes
                                  </label>
                                </div>
                                <div className="flex align-items-center">
                                  <Field
                                    as={RadioButton}
                                    inputId="no"
                                    name="smoke"
                                    value="no"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.smoke === "no"}
                                  />
                                  <label className="ml-2" htmlFor="no">
                                    No
                                  </label>
                                </div>
                              </div>
                              <p className="p-error font-semibold  pt-1">
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
                                    as={RadioButton}
                                    inputId="yes"
                                    name="spouse"
                                    value="yes"
                                    onChange={
                                      handleChange
                                      // openSpouse();
                                    }
                                    onBlur={handleBlur}
                                    checked={values.spouse === "yes"}
                                    ref={genderYesRef}
                                  />
                                  <label className="ml-2" htmlFor="yes">
                                    Yes
                                  </label>
                                </div>
                                <div className="flex align-items-center">
                                  <Field
                                    as={RadioButton}
                                    inputId="no"
                                    name="spouse"
                                    value="no"
                                    onChange={
                                      handleChange
                                      // closeSpouse();
                                    }
                                    onBlur={handleBlur}
                                    checked={values.spouse === "no"}
                                  />
                                  <label className="ml-2" htmlFor="no">
                                    No
                                  </label>
                                </div>
                              </div>
                              <p className="p-error font-semibold  pt-1">
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
                                    as={RadioButton}
                                    inputId="yes"
                                    name="child"
                                    value="yes"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.child === "yes"}
                                  />
                                  <label className="ml-2" htmlFor="yes">
                                    Yes
                                  </label>
                                </div>
                                <div className="flex align-items-center">
                                  <Field
                                    as={RadioButton}
                                    inputId="no"
                                    name="child"
                                    value="no"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.child === "no"}
                                  />
                                  <label className="ml-2" htmlFor="no">
                                    No
                                  </label>
                                </div>
                              </div>
                              <p className="p-error font-semibold  pt-1">
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
                                  <Field
                                    as={RadioButton}
                                    inputId="male"
                                    name="gender"
                                    value="male"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.gender === "male"}
                                  />
                                  <label className="ml-2" htmlFor="male">
                                    Male
                                  </label>
                                </div>
                                <div className="flex align-items-center">
                                  <Field
                                    as={RadioButton}
                                    inputId="female"
                                    name="gender"
                                    value="female"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.gender === "female"}
                                  />
                                  <label className="ml-2" htmlFor="female">
                                    Female
                                  </label>
                                </div>
                              </div>
                              <p className="p-error font-semibold  pt-1">
                                <ErrorMessage name="gender" />
                              </p>
                            </div>
                          </div>

                          <div className="flex mb-4">
                            <div className="col-6">
                              <p className="primaryText text-xl">
                              Spouse's  date of birth:
                              </p>
                            </div>
                            <div className="col-6 flex w-5 pr-0">
                              <div className="w-full">
                                <Dropdown
                                  value={values.month}
                                  options={monthName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="month"
                                  placeholder="Select a month"
                                  style={{ width: "90%", marginRight: "1%" }}
                                />
                                <p className="p-error font-semibold  pt-1">
                                  <ErrorMessage name="month" />
                                </p>
                              </div>
                              <div className="w-full">
                                <Dropdown
                                  value={values.year}
                                  options={yearName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="year"
                                  placeholder="Select a year"
                                  style={{ width: "90%", marginLeft: "1%" }}
                                />
                                <p className="p-error font-semibold  pt-1">
                                  <ErrorMessage name="year" />
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex mb-4">
                            <div className="col-6">
                              <p className="primaryText text-xl">
                              Does your spouse smoke?
                              </p>
                            </div>

                            <div className="col-6">
                              <div className="flex flex-wrap gap-3">
                                <div className="flex align-items-center">
                                  <Field
                                    as={RadioButton}
                                    inputId="yes"
                                    name="child"
                                    value="yes"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.child === "yes"}
                                  />
                                  <label className="ml-2" htmlFor="yes">
                                    Yes
                                  </label>
                                </div>
                                <div className="flex align-items-center">
                                  <Field
                                    as={RadioButton}
                                    inputId="no"
                                    name="child"
                                    value="no"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.child === "no"}
                                  />
                                  <label className="ml-2" htmlFor="no">
                                    No
                                  </label>
                                </div>
                              </div>
                              <p className="p-error font-semibold  pt-1">
                                <ErrorMessage name="child" />
                              </p>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-content-end mr-8">
                    <Button type="button" label="Next" onClick={handleSubmit} />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </TabPanel>
        <TabPanel header="Step 2">
          <div>
            <h1>Step 2</h1>
            <FirstPolicy />
            <div className="flex mx-8 justify-content-between">
              <Button label="Prev" onClick={prevStep} />
              <Button label="Next" onClick={nextStep} />
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Step 3">
          <div>
            <h1>Step 3</h1>
            <SecondPolicy />
            <div className="flex mx-8 justify-content-between">
              <Button label="Prev" onClick={prevStep} />
              <Button label="Next" onClick={nextStep} />
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Step 4">
          <div>
            <h1>Step 4</h1>
            <ThirdPolicy />
            <div className="flex mx-8 justify-content-between">
              <Button label="Prev" onClick={prevStep} />
              <Button label="Next" onClick={nextStep} />
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Step 5">
          <div>
            <h1>Step 5</h1>
            <FourthPolicy />
            <div className="flex mx-8 justify-content-between">
              <Button label="Prev" onClick={prevStep} />
              <Button label="Next" onClick={nextStep} />
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Step 6">
          <div>
            <h1>Step 6</h1>
            <FifthPolicy />
            <div className="flex mx-8 justify-content-between">
              <Button label="Prev" onClick={prevStep} />
              <Button label="Next" onClick={nextStep} />
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Step 7">
          <div>
            <h1>Step 7</h1>
            <SixthPolicy />
            <div className="flex mx-8 justify-content-between">
              <Button label="Prev" onClick={prevStep} />
              <Button label="Next" onClick={nextStep} />
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Step 8">
          <div>
            <h1>Step 8</h1>
            <SeventhPolicy />
            <div className="flex mx-8 justify-content-between">
              <Button label="Prev" onClick={prevStep} />
              {/* <Button label="Submit" /> */}
            </div>
          </div>
        </TabPanel>
      </TabView>

      {/* demo text */}
      <div className="m-8">
        <h1>{t("welcome")}</h1>
        <h1>{t("about")}</h1>
        <h1>{t("contact")}</h1>
        <p className="text-xl line-height-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, numquam
          vel facere minima aliquam, iste vitae expedita quam voluptatum aut
          magni enim reiciendis sapiente incidunt impedit ullam harum. Doloribus
          repellendus cupiditate ipsum sapiente sequi exercitationem facilis
          velit cumque non minima nemo, sint veniam soluta illo molestiae
          incidunt. Fugiat ad, cumque consequuntur obcaecati a nesciunt optio
          animi tenetur, quos sequi dolores amet iste officiis repudiandae
          aliquid ipsam sed at quia! Dignissimos ex inventore sint ratione earum
          veniam in? Incidunt quas dolores at, recusandae culpa, quisquam neque
          facilis sint id in dolorum est a dolor excepturi? Alias possimus
          explicabo ducimus odio vitae eaque. Maiores, accusamus odio? Nemo
          obcaecati totam ea minus nostrum, aperiam nam sequi porro harum quia
          explicabo autem consequatur magnam necessitatibus enim, est velit hic
          deleniti earum, numquam facilis voluptatum sint voluptatem.
          Praesentium eligendi eaque nisi, dolor aliquam sequi voluptates ut
          enim asperiores eveniet possimus cumque assumenda facere delectus,
          blanditiis voluptatem dolores accusamus beatae ad aspernatur sed error
          vero omnis. Eius labore animi sapiente aperiam, asperiores
          voluptatibus ducimus neque eaque modi placeat, minus enim voluptatum.
          Est ut quasi quis architecto nesciunt repellendus enim laboriosam
          voluptates. Sint reprehenderit vitae rem alias asperiores. Nulla
          repellat ea itaque exercitationem deserunt provident cupiditate
          asperiores, assumenda doloribus cumque corrupti, autem in voluptates
          vero aliquam, dolorum ipsa veniam! Repudiandae beatae dolor fugit
          eaque ipsum voluptatem, consectetur quis! Repellat sint nostrum
          debitis. Obcaecati nostrum magnam quos ratione odit, temporibus ipsum
          quam quia mollitia quis quasi quo eligendi necessitatibus saepe
          praesentium blanditiis quae impedit dolorem similique. Adipisci illo
          repellendus natus suscipit, nobis nostrum consequatur minus ab quos
          soluta. Accusantium nihil pariatur tempore. Nulla repellat modi
          officiis voluptatibus molestiae quisquam illum blanditiis autem esse
          laborum! Illo possimus aliquam maxime ipsa iusto itaque officia dicta
          ullam, ducimus cupiditate iste magnam modi recusandae adipisci ipsam
          beatae aspernatur eaque praesentium, velit culpa, sunt ad qui
          temporibus. Quo delectus beatae neque dicta qui facere id minus
          doloremque earum? Laborum et aliquid ut animi vel sequi doloremque ad
          perferendis, quod cupiditate a. Voluptatem ipsam placeat distinctio
          reprehenderit illum est aperiam provident? Cumque placeat quasi vel
          illo assumenda maiores repellat magnam, omnis tempore nemo
          perspiciatis esse ad totam illum praesentium numquam quam dolorum ea
          eligendi. Ducimus, magnam accusantium aut natus sit beatae
          necessitatibus accusamus deserunt temporibus assumenda iusto autem
          placeat minima, facere iure doloribus ex quod nesciunt. Dolorem
          accusamus, fugit repellendus, nostrum, fuga architecto obcaecati
          asperiores ab nam iure delectus impedit. Recusandae, dicta minus
          incidunt excepturi aut omnis? Fugit, saepe, fuga enim nihil quisquam
          tempora tempore repellendus, vitae voluptas id molestias illo. Tempore
          inventore quae, blanditiis, cumque odio optio eum ea ut iusto autem
          doloribus officiis, voluptates fugit amet nemo libero accusantium a.
          Est laudantium officiis, porro molestias, velit ipsam repellat
          deleniti aliquid nisi facilis aspernatur. Eligendi eum deserunt
          laboriosam maxime ex nostrum delectus inventore fugiat dicta! Itaque
          officia ducimus velit consectetur similique nesciunt aspernatur iure
          in perferendis labore aliquam suscipit maxime placeat molestiae ea
          natus animi odio, praesentium reprehenderit nam nihil tempora!
          Consectetur totam doloribus eligendi cum suscipit perferendis sit odit
          exercitationem quas beatae.
        </p>
      </div>

      <div>
        <nav>
          {i18n.options.allLanguages && (
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              {i18n.options.allLanguages.map((lng) => (
                <option key={lng} value={lng}>
                  {lng.toUpperCase()}
                </option>
              ))}
            </select>
          )}
        </nav>
      </div>
    </main>
  );
};

export default MultiStepForm;
