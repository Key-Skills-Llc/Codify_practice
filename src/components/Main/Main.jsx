import React from "react";
import { useTranslation } from "react-i18next";
import image from "../../image/MainCar.jpg";
import metodichka from "../../image/Metodichka.png";
import Photo from "../../image/photoasd.jpg";

import { StyledMain } from "./styled";




const Main = () => {
  const { t } = useTranslation()

  return (
    <>
      <StyledMain.MainPage>
        <StyledMain.MainH1>
          <h1>{t("mainH1")}</h1>
          <button className="btn-1">Пройти тест онлайн</button>
        </StyledMain.MainH1>
        <StyledMain.MainCar>
          <img src={image} alt="car" />
        </StyledMain.MainCar>
      </StyledMain.MainPage>
      <StyledMain.Biography>
        <StyledMain.Static>
          <StyledMain.MainH2>
            {t("mainBio")}
          </StyledMain.MainH2>
          <div>
            <StyledMain.MainItemCommet>
              <StyledMain.Matches></StyledMain.Matches>
              {t("mainItem.1")}
            </StyledMain.MainItemCommet>
            <StyledMain.MainItemCommet>
              <StyledMain.Matches></StyledMain.Matches>
              {t("mainItem.2")}
            </StyledMain.MainItemCommet>
            <StyledMain.MainItemCommet>
              <StyledMain.Matches></StyledMain.Matches>
              {t("mainItem.3")}
            </StyledMain.MainItemCommet>
            <StyledMain.MainItemCommet>
              <StyledMain.Matches></StyledMain.Matches>
              {t("mainItem.4")}
            </StyledMain.MainItemCommet>

            <button className="btn-2">{t("mainBtn")}</button>
          </div>
        </StyledMain.Static>
        <div>
          <img src={Photo} alt="fgjsfjsgfj" />
        </div>
      </StyledMain.Biography>
      <div>
        <StyledMain.Line />
      </div>
      <StyledMain.MainManual>
        <div>
          <img src={metodichka} alt="manual" />
        </div>
        <StyledMain.MainManualPosob>
          <h4>{t("mainManual")}</h4>
          <StyledMain.MainItemCommet>
            <span></span>{t("mainManualItem")}
          </StyledMain.MainItemCommet>
          <StyledMain.MainH6>{t("mainManualPrice")}</StyledMain.MainH6>
          <b>250 сом</b>
          <button className="btn-2">{t("mainManualBtn")}</button>
        </StyledMain.MainManualPosob>
      </StyledMain.MainManual>
    </>
  );
};

export default Main;
