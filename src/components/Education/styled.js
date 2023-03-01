import styled from 'styled-components'

export const StyledEducation = {
  Wrapper: styled.div`
    padding: 50px;
    max-width: 1000px;
    margin: 0 auto;
  `,
  VideosWrapper: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px;
  `,
  VideoWrapper: styled.li`
    display: flex;
    gap: 19px;
  `,
  VideoGallery: styled.img`
    width: 367px;
    border-radius: 5px;
    :hover {
      cursor: pointer;
    }
  `,
  VideoTitle: styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
  `
}