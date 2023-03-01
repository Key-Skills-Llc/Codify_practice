import React, {useContext, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useParams } from "react-router-dom";

import {StyledEducationVideo} from "./styled";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import {VideoContext} from "../../context/store/VideoContext";

const EducationVideo = () => {
  const { id } = useParams()
  const {
    getVideoById,
    currentVideo
  } = useContext(VideoContext)

  useEffect(() => {
    // GET REQUEST WITH ID - VIDEO (useParams)
    getVideoById()
  }, [])

  return (
    <StyledEducationVideo.Wrapper>
      <StyledEducationVideo.Video
        poster={currentVideo.href}
        controls
      >
        <StyledEducationVideo.VideoSource src={currentVideo.href}/>
      </StyledEducationVideo.Video>
      <StyledEducationVideo.VideoGalleryWrapper>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {
            [1,2,3,4,5,6,7].map((elem, index) => (
              <SwiperSlide key={index}>
                <StyledEducationVideo.Video
                  poster={currentVideo.href}
                  controls
                  width='270px'
                  height='163px'
                >
                  <StyledEducationVideo.VideoSource src={currentVideo.href}/>
                </StyledEducationVideo.Video>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </StyledEducationVideo.VideoGalleryWrapper>
    </StyledEducationVideo.Wrapper>
  );
};

export default EducationVideo;