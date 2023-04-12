import styled from "styled-components";

export const StyledFooter = {
  Footer: styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 92px;
    margin-top: 77px;
    max-width: 100%;
    color: #fff;
    background: linear-gradient(180deg, #94c52d 0%, #2a9134 100%);
  `,

  Basement: styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 11px 152px;
  `,
  BasementWrapper: styled.div`
    margin-right: 143px;
  `,
  ItemIcon: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: -2px 63px 13px 0;

    a {
      text-decoration: none;
    }
  `,
};
