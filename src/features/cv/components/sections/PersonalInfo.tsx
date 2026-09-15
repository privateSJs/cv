import {useTranslation} from "react-i18next";

export function PersonalInfo() {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t("personalInfo.title")}</h2>
        </>
    )
}