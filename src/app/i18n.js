
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to my website',
      about: 'About Us',
      contact: 'Contact Us',
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenidos a mi sitio web',
      about: 'Sobre Nosotros',
      contact: 'Contáctanos',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue sur mon site web',
      about: 'À propos de nous',
      contact: 'Nous Contacter',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
