import React from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("ask")}</div>
      <p>
        {t("lorem")}
      </p>
    </>
  );
};

export default HomePage;
