import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  position: relative;
  height: 360px;
  overflow: hidden;
  z-index: -1;
`;

export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

export const ImageContainer = styled.div`
  margin: 0 2px;
`;

export const Image = styled.img`
  height: 360px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
