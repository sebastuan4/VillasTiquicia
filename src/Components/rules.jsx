import { useTranslation } from "react-i18next";
function rules (){
    const [ t ] = useTranslation("global");
    return(
        <>
            <div className="rules container column">
                <h1>{t("rules.title")}</h1>
                <ol>
                    <li>{t("rlies.norm1")}</li>
                    <li>{t("rlies.norm2")}</li>
                    <li>{t("rlies.norm3")}</li>
                    <li>{t("rlies.norm4")}</li>
                    <li>{t("rlies.norm5")}</li>
                    <li>{t("rlies.norm6")}</li>
                    <li>{t("rlies.norm7")}</li>
                    <li>{t("rlies.norm8")}</li>
                </ol>
                

            </div>
        </>
    );
}
export default rules