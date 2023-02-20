import React from "react";
import image from "../../image/avtokursy 1.jpg"
import metodichka from "../../image/Metodichka.png"
import Photo from "../../image/photoasd.jpg"

 
const Main = () => {
  return (
    <>
      <div className="Main-page">
        <div className="Main-h1">
          <h1>Профессиональный инструктор по вождению</h1>
          <button className="btn-1">Пройти тест онлайн</button>
        </div>
        <div>
          <img src={image} alt="car" />
        </div>
      </div>
      <div className="main-biography">
        <div className="static">
          <h2>Омурбеков Руслан Жакшылыкович- Инструктор по вождению</h2>
          <div>
            <p>
              <span></span>Водительский стаж <br /> более 25 лет.
            </p>
            <p>
              <span></span>Индивидуально подготовил к практическому <br />{" "}
              вождению более 1500 студентов
            </p>
            <p>
              <span></span>Опыт преподавания и <br /> инструкторский стаж более
              12 лет.
            </p>
            <p>
              <span></span>За 6 лет преподавания в автошколе <br /> выпустил
              более 1600 студентов
            </p>

            <button className="btn-2">Записаться на вождение</button>
          </div>
        </div>
        <div >
          <img src={Photo} alt="fgjsfjsgfj" />
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className="main-manual">
        <div>
          <img src={metodichka} alt="manual" />
        </div>
        <div className="main-manual-posob">
          <h4>Методическое пособие</h4>
          <p>
            <span></span>Во время преподавания ПДД в автошколе, обнаружил ошибки
            и не полную информацию в ПДД Кыргызстана от 5.02.2020 года.
            Отталкиваясь от этих ошибок, составил свою методичку по ПДД
          </p>
          <h6>Стоимость методички</h6>
          <b>250 сом</b>
          <button className="btn-2">Купить методичку</button>
        </div>
      </div>
    </>
  );
};

export default Main;
