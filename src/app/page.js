"use client";
import React, { useState, useRef } from "react";

// prime react components
import { Steps } from "primereact/steps";
import { Toast } from "primereact/toast";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import styles from "./page.module.css";

// local component imports
import FirstPolicy from "./components/firstPolicy/page";
import SecondPolicy from "./components/secondPolicy/page";
import ThirdPolicy from "./components/thirdPolicy/page";
import FourthPolicy from "./components/fourthPolicy/page";
import FifthPolicy from "./components/fifthPolicy/page";
import SixthPolicy from "./components/sixthPolicy/page";
import SeventhPolicy from "./components/seventhPolicy/page";
// import EighthPolicy from "./components/eighthPolicy/page";

import Default from "./components/default/page";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import i18n from "./i18n";

i18n.init({
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  allLanguages: ["en", "fr", "es"], // set allLanguages option here
});

export default function Home() {
  // steps
  const [stepsVisibility, setStepsVisibility] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);

  // for spouse
  const [spouseMonth, setSpouseMonth] = useState(null);
  const [spouseYear, setSpouseYear] = useState(null);
  const [spouseGender, setSpouseGender] = useState("");
  const [spouseSmoke, setSpouseSmoke] = useState("");

  const [language, setLanguage] = useState(i18n.language);

  // for steps
  const items = [
    {
      label: "Your Info",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Your Info",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Bundled Plan",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Bundled Plan",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Life Insurance",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Life Insurance",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Accidental Insurance",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Accidental Insurance",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Healthcare Insurance",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Healthcare Insurance",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Illness Insurance",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Illness Insurance",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Disability Insurance",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Disability Insurance",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
    {
      label: "Apply Now",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Apply Now",
          // detail: event.item.label,
          detail: "Thank you for choosing this policy",
        });
      },
    },
  ];

  // prev func
  const prevFunc = () => {
    setActiveIndex(activeIndex - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // next func
  const nextFunc = () => {
    setActiveIndex(activeIndex + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <main>
      <div className="bg-blue-50 pb-8">
        {/* steps pagination */}
        {stepsVisibility && (
          <div className="card mx-8  pt-8">
            <Toast ref={toast}></Toast>
            <Steps
              model={items}
              activeIndex={activeIndex}
              onSelect={(e) => setActiveIndex(e.index)}
              readOnly={false}
            />
          </div>
        )}
        <div>

          {/* steps components */}
          {stepsVisibility && (
            <div className="pt-1">
              {activeIndex === 0 && <Default />}
              {activeIndex === 1 && <FirstPolicy />}
              {activeIndex === 2 && <SecondPolicy />}
              {activeIndex === 3 && <ThirdPolicy />}
              {activeIndex === 4 && <FourthPolicy />}
              {activeIndex === 5 && <FifthPolicy />}
              {activeIndex === 6 && <SixthPolicy />}
              {activeIndex === 7 && <SeventhPolicy />}
            </div>
          )}

          {/* btns */}
          {stepsVisibility && (
            <div className="flex justify-content-between align-items-center w-8 mx-auto bg-blue-50 p-0">
              {/* prev btn */}
              <div className="card flex justify-content-center">
                <Button
                  label="Prev"
                  onClick={prevFunc}
                  style={{ display: activeIndex === 0 ? "none" : "" }}
                />
              </div>

              {/* next btn */}
              <div className="card flex justify-content-center ">
                <Button
                  style={{ display: activeIndex === 7 ? "none" : "" }}
                  label="Continue"
                  onClick={nextFunc}
                  type='submit'
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* demo text */}
      <h1>{t("welcome")}</h1>
      <h1>{t("about")}</h1>
      <h1>{t("contact")}</h1>

      <p className="m-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, numquam
        vel facere minima aliquam, iste vitae expedita quam voluptatum aut magni
        enim reiciendis sapiente incidunt impedit ullam harum. Doloribus
        repellendus cupiditate ipsum sapiente sequi exercitationem facilis velit
        cumque non minima nemo, sint veniam soluta illo molestiae incidunt.
        Fugiat ad, cumque consequuntur obcaecati a nesciunt optio animi tenetur,
        quos sequi dolores amet iste officiis repudiandae aliquid ipsam sed at
        quia! Dignissimos ex inventore sint ratione earum veniam in? Incidunt
        quas dolores at, recusandae culpa, quisquam neque facilis sint id in
        dolorum est a dolor excepturi? Alias possimus explicabo ducimus odio
        vitae eaque. Maiores, accusamus odio? Nemo obcaecati totam ea minus
        nostrum, aperiam nam sequi porro harum quia explicabo autem consequatur
        magnam necessitatibus enim, est velit hic deleniti earum, numquam
        facilis voluptatum sint voluptatem. Praesentium eligendi eaque nisi,
        dolor aliquam sequi voluptates ut enim asperiores eveniet possimus
        cumque assumenda facere delectus, blanditiis voluptatem dolores
        accusamus beatae ad aspernatur sed error vero omnis. Eius labore animi
        sapiente aperiam, asperiores voluptatibus ducimus neque eaque modi
        placeat, minus enim voluptatum. Est ut quasi quis architecto nesciunt
        repellendus enim laboriosam voluptates. Sint reprehenderit vitae rem
        alias asperiores. Nulla repellat ea itaque exercitationem deserunt
        provident cupiditate asperiores, assumenda doloribus cumque corrupti,
        autem in voluptates vero aliquam, dolorum ipsa veniam! Repudiandae
        beatae dolor fugit eaque ipsum voluptatem, consectetur quis! Repellat
        sint nostrum debitis. Obcaecati nostrum magnam quos ratione odit,
        temporibus ipsum quam quia mollitia quis quasi quo eligendi
        necessitatibus saepe praesentium blanditiis quae impedit dolorem
        similique. Adipisci illo repellendus natus suscipit, nobis nostrum
        consequatur minus ab quos soluta. Accusantium nihil pariatur tempore.
        Nulla repellat modi officiis voluptatibus molestiae quisquam illum
        blanditiis autem esse laborum! Illo possimus aliquam maxime ipsa iusto
        itaque officia dicta ullam, ducimus cupiditate iste magnam modi
        recusandae adipisci ipsam beatae aspernatur eaque praesentium, velit
        culpa, sunt ad qui temporibus. Quo delectus beatae neque dicta qui
        facere id minus doloremque earum? Laborum et aliquid ut animi vel sequi
        doloremque ad perferendis, quod cupiditate a. Voluptatem ipsam placeat
        distinctio reprehenderit illum est aperiam provident? Cumque placeat
        quasi vel illo assumenda maiores repellat magnam, omnis tempore nemo
        perspiciatis esse ad totam illum praesentium numquam quam dolorum ea
        eligendi. Ducimus, magnam accusantium aut natus sit beatae
        necessitatibus accusamus deserunt temporibus assumenda iusto autem
        placeat minima, facere iure doloribus ex quod nesciunt. Dolorem
        accusamus, fugit repellendus, nostrum, fuga architecto obcaecati
        asperiores ab nam iure delectus impedit. Recusandae, dicta minus
        incidunt excepturi aut omnis? Fugit, saepe, fuga enim nihil quisquam
        tempora tempore repellendus, vitae voluptas id molestias illo. Tempore
        inventore quae, blanditiis, cumque odio optio eum ea ut iusto autem
        doloribus officiis, voluptates fugit amet nemo libero accusantium a. Est
        laudantium officiis, porro molestias, velit ipsam repellat deleniti
        aliquid nisi facilis aspernatur. Eligendi eum deserunt laboriosam maxime
        ex nostrum delectus inventore fugiat dicta! Itaque officia ducimus velit
        consectetur similique nesciunt aspernatur iure in perferendis labore
        aliquam suscipit maxime placeat molestiae ea natus animi odio,
        praesentium reprehenderit nam nihil tempora! Consectetur totam doloribus
        eligendi cum suscipit perferendis sit odit exercitationem quas beatae.
      </p>

      <div>
        <nav>
          {/* <ul>
          <li>
            <Link href="/" locale={language}>
              {t('contact')}
            </Link>
          </li>
          <li>
            <Link href="/about" locale={language}>
              {t('about')}
            </Link>
          </li>
        </ul> */}
          {/* Check if i18n.options.allLanguages is defined before using map() method */}
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
}
