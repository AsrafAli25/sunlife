"use client";

import { Menubar } from "primereact/menubar";
import './footer.css'

const Footer = () => {
  // menu
  const items = [

    {
      label: "This is copyright text",
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = 'The QA';

  return (
    <>
      <div className="card footer">
        <Menubar model={items} start={start} end={end} />
      </div>
    </>
  );
};

export default Footer;
