import {useTranslation} from "react-i18next";

export function AboutMe() {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t("about.title")}</h2>
        </>
    )
}