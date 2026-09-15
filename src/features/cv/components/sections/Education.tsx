import { useTranslation } from "react-i18next";

export function Education() {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t("education.title")}</h2>
        </>
    )
}