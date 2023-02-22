import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './styled'


const Header = () => {
  


    return (
        <div className="wrapper">
        <StyledHeader.Header>
          <StyledHeader.HeaderLeft>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_270_1762)">
                <path
                  d="M17.4998 2.91602C25.5542 2.91602 32.0832 9.44497 32.0832 17.4993C32.0832 25.5537 25.5542 32.0827 17.4998 32.0827C9.44546 32.0827 2.9165 25.5537 2.9165 17.4993C2.9165 9.44497 9.44546 2.91602 17.4998 2.91602ZM11.6665 18.9577L5.92359 18.9591C6.24849 21.529 7.41901 23.9178 9.2508 25.7494C11.0826 27.5809 13.4716 28.7511 16.0415 29.0756V23.3327C14.8812 23.3327 13.7684 22.8717 12.9479 22.0513C12.1274 21.2308 11.6665 20.118 11.6665 18.9577ZM29.0761 18.9591L23.3332 18.9577C23.3332 20.118 22.8722 21.2308 22.0518 22.0513C21.2313 22.8717 20.1185 23.3327 18.9582 23.3327L18.9596 29.0756C21.5293 28.7508 23.918 27.5805 25.7494 25.749C27.5809 23.9175 28.7512 21.5288 29.0761 18.9591ZM17.4998 5.83268C14.6581 5.83273 11.9141 6.86983 9.7827 8.74935C7.65132 10.6289 6.27911 13.2216 5.92359 16.041H11.6665C11.6665 15.6542 11.8201 15.2833 12.0936 15.0098C12.3671 14.7363 12.7381 14.5827 13.1248 14.5827H21.8748C22.2616 14.5827 22.6325 14.7363 22.906 15.0098C23.1795 15.2833 23.3332 15.6542 23.3332 16.041H29.0761C28.7206 13.2216 27.3483 10.6289 25.217 8.74935C23.0856 6.86983 20.3416 5.83273 17.4998 5.83268Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_270_1762">
                  <rect width="35" height="35" rx="5" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <StyledHeader.HeaderLogo>Жакшы жол</StyledHeader.HeaderLogo>
          </StyledHeader.HeaderLeft>
          <div className="item-wrap">
            <StyledHeader.NavUl>
              <NavLink to="/">Главная</NavLink>
              <NavLink to="/test">Онлайн-тест</NavLink>
              <NavLink to="/posts">Последние изменения</NavLink>
              <NavLink to="/education">Обучающие видео</NavLink>
            </StyledHeader.NavUl>
          </div>
          <StyledHeader.HeaderLang>
            <StyledHeader.LangRU>
              <li value="ru">RU</li>
            </StyledHeader.LangRU>
            <StyledHeader.LangKG>
              <li value="ky">KG</li>
            </StyledHeader.LangKG>
          </StyledHeader.HeaderLang>
        </StyledHeader.Header>
       </div>
    );
};

export default Header;