import styled from 'styled-components'

export const StyledEducationVideo = {
  Wrapper: styled.div`
    padding: 4rem;
    max-width: 1000px;
    margin: 0 auto;
  `,
  Video: styled.video`
    width: ${({ width }) => width ? width : '1140px'};
    height: ${(props) => props.height ? props.height : '500px'}
  `,
  VideoSource: styled.source`
  
  `,
  VideoGalleryWrapper: styled.div`
    margin-top: 3rem;
    max-width: 1140px;
    width: 1140px;
  `
}