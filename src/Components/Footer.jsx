import whats from '../Images/whatsapp.png'
import call from '../Images/telephone.png'
import email from '../Images/email.png'
import instagram from '../Images/instagram.png'
import facebook from '../Images/facebook.png'
import airbnb from '../Images/airbnb.png'
import React from 'react';
import { useTranslation } from 'react-i18next';
function Footer(){

    console.log("dede")
    const [t] = useTranslation("global");
    const copy = () => {
      navigator.clipboard.writeText("aalvarado@confia.co.cr");
      document.getElementById("popuptext").style.visibility = "visible";
      setTimeout(() => {
        document.getElementById("popuptext").style.visibility = "hidden";
      }, 1500);
    };


    return(
        <>
        <div className='footer'>
                 <a href="https://wa.me/50660407676"><img src={whats} alt="" /></a>
                 <a href=""><img src={call} alt="" /></a>
                 <div className='email'>
                    <a onClick={copy}><img src={email} alt="" /></a>
                    <span id="popuptext">{t("footer.popup")}</span>
                 </div>
                 <a href=""><img src={instagram} alt="" /> </a>
                 <a href=""><img src={facebook} alt="" /></a>
                 <a href=""><img src={airbnb} alt="" /></a>
         </div>
       </>
    );
}
export default Footer