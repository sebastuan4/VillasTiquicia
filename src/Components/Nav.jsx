
import { useTranslation } from 'react-i18next'


function Nav(){
const [t, i18n] = useTranslation("global");
const handleChangeLanguage = (lang, string) => {
    i18n.changeLanguage(lang);
};


    return(
        <>  
            <button onClick={() => handleChangeLanguage("en")}>En</button>
            <button onClick={() => handleChangeLanguage("es")}>Es</button>
        </>
    )
}
export default Nav