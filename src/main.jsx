import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App.jsx';
import Recommendations from './Components/Recommendations.jsx';
import Footer from './Components/Footer.jsx';
import Location from './Components/Location.jsx';
import global_en from './Translations/EN/global.json';
import global_es from './Translations/ES/global.json';
import Nav from './Components/Nav.jsx'
import Rules from './Components/rules.jsx';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
    interpolation: { escapeValue: false },
    lng: "es",
    resources: {
      en:{
        global: global_en,
      },
      es:{
        global: global_es,
      },
    },
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <Nav/>
    <App />
    <Rules/>
    <Recommendations/>
    <Location/>
    <Footer/>
    </I18nextProvider>
  </React.StrictMode>,
)
