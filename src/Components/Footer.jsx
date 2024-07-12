import whats from '../Images/whatsapp.png'
import call from '../Images/telephone.png'
import email from '../Images/email.png'
import instagram from '../Images/instagram.png'
import facebook from '../Images/facebook.png'
import airbnb from '../Images/airbnb.png'
function Footer(){
    return(
        <>
        <div className='footer'>
                 <img src={whats} alt="" />
                 <img src={call} alt="" />
                 <img src={email} alt="" />
                 <img src={instagram} alt="" /> 
                 <img src={facebook} alt="" />
                 <img src={airbnb} alt="" />
         </div>
       </>
    );
}
export default Footer