
import { useTranslation } from 'react-i18next'
import logo from '../Images/VillasTiquisia.png'
import React, {useState} from 'react';

function Nav(){

const [t, i18n] = useTranslation("global");

const handleChangeLanguage = (lang, number) => {
    i18n.changeLanguage(lang);
    setIndex(i => number);
};

const lenguage=[
    "English",  "Español"
]
const flags=[
    "https://flagsapi.com/US/flat/32.png",  "https://flagsapi.com/ES/flat/32.png"
]

const [index,setIndex] = useState(1)



    return(
        <>
            <div className='row'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>

                <div className='lang-menu column'>
                    <div className='selected-lang row'>
                        <img src={flags[index]} alt="" />
                        <p>{lenguage[index]}</p>
                    </div>
                    <ul>
                        <li id='en' className='row' onClick={() => handleChangeLanguage("en",0)}>
                            <img src="https://flagsapi.com/US/flat/32.png" alt="" />
                            <a>English</a>
                        </li>
                        <li id='es' className='row' onClick={() => handleChangeLanguage("es",1)}>
                            <img src="https://flagsapi.com/ES/flat/32.png" alt="" />
                            <a>Español</a>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}
export default Nav