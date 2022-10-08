import React from 'react';
import * as S from './DetailCarousel.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DetailCarousel = ({ carouselImage }) => {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    pauseOnHover: false,
  };

  return (
    <S.Container>
      <S.StyledSlider {...settings}>
        {carouselImage.map(item => {
          return (
            <div key={item.id}>
              <S.ImageContainer>
                <S.Image src={item.url} />
              </S.ImageContainer>
            </div>
          );
        })}
      </S.StyledSlider>
    </S.Container>
  );
};

const items = [
  { id: 1, url: '/images/carousel/1.jpg' },
  { id: 2, url: '/images/carousel/2.jpg' },
  { id: 3, url: '/images/carousel/3.jpg' },
  { id: 4, url: '/images/carousel/4.jpg' },
  { id: 5, url: '/images/carousel/5.jpg' },
  { id: 6, url: '/images/carousel/6.jpg' },
  { id: 7, url: '/images/carousel/7.jpg' },
  { id: 8, url: '/images/carousel/8.jpg' },
  { id: 9, url: '/images/carousel/9.jpg' },
  { id: 10, url: '/images/carousel/10.jpg' },
  { id: 11, url: '/images/carousel/11.jpg' },
  { id: 12, url: '/images/carousel/12.jpg' },
];

export default DetailCarousel;
