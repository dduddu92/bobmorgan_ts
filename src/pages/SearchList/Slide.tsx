import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ placeList }) => {
  return (
    <CarouselWrap>
      <Slider {...settings}>
        {placeList.length >= 4 &&
          placeList.map(img => {
            return (
              <div key={img.place_id}>
                <Carousels src={img.place_image} alt="image" />
              </div>
            );
          })}
      </Slider>
    </CarouselWrap>
  );
};

export default Slide;

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
};

const Carousels = styled.img`
  width: 200px;
  height: 200px;
  padding-left: 8px;
`;

const CarouselWrap = styled.div`
  margin-bottom: 40px;
  width: 800px;
  height: 200px;
`;
