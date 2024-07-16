import React, { useState, useEffect } from 'react';
import '../App.css';
import arenal from '../Images/arenal.gif';
import { useTranslation } from 'react-i18next';

function App() {
  const [ t ] = useTranslation("global");
  useEffect(() => {
    const timer = setTimeout(() => {
      const descriptionText = document.querySelector(".header__text");
      if (descriptionText) {
        descriptionText.style.opacity = "1";
      }
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='header'>
      <div className='header__img__container'>
        <img className='header__img' src={arenal} alt=""/>
        <div className='header__text'>
          <h1>{t("header.message")}</h1>
        </div>
      </div>
      <div className='description__background'>
        <div className='description container'>
          <h1>Un lugar adaptado para toda la familia</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam eum ut est, blanditiis facilis aliquid excepturi sed! Qui architecto asperiores nam, nisi illum voluptatum ea optio aliquid corrupti accusantium quis.</p>
        </div>
      </div>
     
    </div>
  );
}

export default App;
