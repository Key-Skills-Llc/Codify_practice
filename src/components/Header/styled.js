import styled from "styled-components";

export const StyledHeader = {
  HeaderLeft: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 78px;
  `,
  HeaderLogo: styled.h3`
    margin-left: 5px;
    font-weight: 500;
    font-size: 18px;
  `,
  ItemWrapper: styled.div``,
  NavUl: styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 48px;
    margin-left: 71px;
    margin-right: 85.14px;
    font-weight: 400;
    font-size: 18px;
  `,
  HeaderLang: styled.div`
    display: flex;
    align-items: center;
    width: 87px;
    height: 32px;
    font-weight: 600;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


    
  `,
  LangRU: styled.div`
    border: 1px solid #2a9134;
    border-radius: 5px 0px 0px 5px;
    padding: 5px 8px 5px 8px;
  `,
  LangKG: styled.div`
    border: 1px solid #2a9134;
    border-radius: 0px 5px 5px 0px;
    padding: 5px 8px 5px 8px;
  `,
};
