import React from "react";
import image from "../../image/avtokursy 1.jpg";
import metodichka from "../../image/Metodichka.png";
import Photo from "../../image/photoasd.jpg";

import { StyledMain } from "./styled";



const Main = () => {
  return (
    <>
      <StyledMain.MainPage>
        <StyledMain.MainH1>
          <h1>Профессиональный инструктор по вождению</h1>
          <button className="btn-1">Пройти тест онлайн</button>
        </StyledMain.MainH1>
        <StyledMain.MainCar>
          <img src={image} alt="car" />
        </StyledMain.MainCar>
      </StyledMain.MainPage>
      <StyledMain.Biography>
        <StyledMain.Static>
          <StyledMain.MainH2>
            Омурбеков Руслан Жакшылыкович- Инструктор по вождению
          </StyledMain.MainH2>
          <div>
            <StyledMain.MainItemCommet>
              <StyledMain.Matches></StyledMain.Matches>Водительский стаж <br />{" "}
              более 25 лет.
            </StyledMain.MainItemCommet>
            <StyledMain.MainItemCommet>
              <StyledMain.Matches></StyledMain.Matches>Индивидуально подготовил
              к практическому <br /> вождению более 1500 студентов
            </StyledMain.MainItemCommet>
            <StyledMain.MainItemCommet>
              <StyledMain.Matches></StyledMain.Matches>Опыт преподавания и{" "}
              <br /> инструкторский стаж более 12 лет.
            </StyledMain.MainItemCommet>
            <StyledMain.MainItemCommet>
              <StyledMain.Matches></StyledMain.Matches>За 6 лет преподавания в
              автошколе <br /> выпустил более 1600 студентов
            </StyledMain.MainItemCommet>

            <button className="btn-2">Записаться на вождение</button>
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
          <h4>Методическое пособие</h4>
          <StyledMain.MainItemCommet>
            <span></span>Во время преподавания ПДД в автошколе, обнаружил ошибки
            и не полную информацию в ПДД Кыргызстана от 5.02.2020 года.
            Отталкиваясь от этих ошибок, составил свою методичку по ПДД
          </StyledMain.MainItemCommet>
          <StyledMain.MainH6>Стоимость методички</StyledMain.MainH6>
          <b>250 сом</b>
          <button className="btn-2">Купить методичку</button>
        </StyledMain.MainManualPosob>
      </StyledMain.MainManual>
    </>
  );
};

export default Main;
