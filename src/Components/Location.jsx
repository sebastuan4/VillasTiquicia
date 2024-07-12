import { useTranslation } from 'react-i18next';
function Location(){
    const [t] = useTranslation("global");
    return(
        <>
            <div className='ubicacion row'>
                <div className='container column'>
                    <h1>{t('location.title')}</h1>
                    <p>{t('location.text')}</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.6740887142732!2d-84.62571814596443!3d10.473194522498757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa00cbd37af6d93%3A0x9072461b3a3f9939!2sGrupo%20Ecoquintas!5e0!3m2!1sen!2scr!4v1720622931013!5m2!1sen!2scr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>    
        </>
    );
}
export default Location