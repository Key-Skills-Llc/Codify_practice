import styled from "styled-components";

export const StyledMain = {
  MainPage: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 93px;
    margin-left: 155px;

    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 61px;
    color: #2e3538;
  `,
  MainCar: styled.div`
    left: 500px;
  `,
  MainH1: styled.div`
    width: 576px;
    margin-bottom: 109px;
  `,
  Biography: styled.div`
    display: flex;
    margin-left: 150px;
    margin-top: 78px;
    margin-bottom: 79px;

    img {
      width: 367px;
      height: 481px;
      margin-left: 129px;
    }
  `,
  Static: styled.div``,
  MainH2: styled.h2`
    width: 560px;
    font-weight: 700;
    font-size: 25px;
    line-height: 45px;
    letter-spacing: 0.03em;
    color: #2e3538;
    margin-bottom: 51px;
  `,
  MainItemCommet: styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 20px;

    width: 560px;
    height: 70px;

    background: linear-gradient(
      90deg,
      rgba(148, 197, 45, 0.2) 0%,
      rgba(42, 145, 52, 0) 100%
    );
    border-radius: 5px;
    word-wrap: 270px;

  `,
  Matches: styled.span`
    width: 5px;
    height: 70px;
    margin-right: 10px;

    background: #94c52d;
    box-shadow: 0px 0px 10px rgba(148, 197, 45, 0.5);
    border-radius: 100px;

    flex: none;
    order: 0;
    flex-grow: 0;
  `,
  Line: styled.hr`
    position: absolute;
    width: 100%;
    height: 0px;
    margin: 0;
    border: 1px solid #454f54;
    transform: rotate(180deg);
  `,
  MainManual: styled.div`
    display: flex;
    margin-left: 150px;
    padding-top: 45px;

    img {
      width: 452px;
      height: 524px;
      margin-top: 3px;
    }
  `,
  MainManualPosob: styled.div`
    margin-left: 126px;

    h4 {
      font-weight: 800;
      font-size: 25px;
      line-height: 45px;
      letter-spacing: 0.03em;
      margin-bottom: 19px;
      color: #2e3538;
    }

    p {
      width: 456px;
      height: 206px;
      margin: 0;
      font-weight: 500;
      font-size: 22px;
      line-height: 30px;
      color: #2e3538;

      background: linear-gradient(
        90deg,
        rgba(148, 197, 45, 0.2) 0%,
        rgba(42, 145, 52, 0) 100%
      );
      border-radius: 5px;

      span {
        width: 5px;
        height: 206px;
        margin-right: 10px;

        background: #94c52d;
        box-shadow: 0px 0px 10px rgba(148, 197, 45, 0.5);
        border-radius: 100px;

        flex: none;
        order: 0;
        flex-grow: 0;
      }
    }
  `,
  MainH6: styled.h6`
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    color: #2e3538;

    margin: 35px 0px 17px 11px;
  `,
};
