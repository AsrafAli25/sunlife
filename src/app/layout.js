
'use client'


import './globals.css'

// theme
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";   
// flex                                      
import "primeflex/primeflex.css";                                         
import Header from './components/header/page';
import Footer from './components/footer/page';
         
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <>
        <I18nextProvider i18n={i18n}>

          <Header/>
          {children}
          <Footer/>


        </I18nextProvider>
        </>
      </body>
    </html>
  )
}
