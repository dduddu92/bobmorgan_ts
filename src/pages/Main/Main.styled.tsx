import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MainSlider = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  overflow: hidden;
  z-index: 1;
`;

export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  .slick-dots {
    bottom: 150px;
    right: 0;
    text-align: right;
    padding: 0 50px;

    li {
      height: 5px;

      button {
        height: 5px;
        background: rgba(255, 255, 255, 0.8);
        padding: 0;

        &::before {
          display: none;
        }
      }

      &.slick-active {
        button {
          background: #ffad1d;
        }
      }
    }
  }
`;

export const SliderImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  overflow: hidden;
`;

export const SliderImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;

export const MainSearch = styled.div`
  position: relative;
  margin-top: -100px;
  padding-bottom: 100px;
  z-index: 2;
`;

export const SearchInner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 906px;
  height: 255px;
  margin: 0 auto;
`;

export const SearchBox = styled.div`
  position: relative;
  width: 730px;
  padding: 16px 40px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 5px 20px 0 rgba(71, 71, 71, 0.1);
`;

export const SearchNav = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 25px;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #f3f3f3;
    z-index: -1;
  }
`;

export const SearchTitle = styled.div`
  position: relative;
  display: inline-block;
  padding: 8px;
  font-size: 16px;
  line-height: 1.2em;
  color: #f69d3e;
  z-index: 2;

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background: #f69d3e;
  }
`;

export const SearchItems = styled.div`
  display: flex;
  margin: 0 -8px;
`;

export const SearchItem = styled.div`
  width: 50%;
  padding: 0 8px;
`;

export const SearchTit = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.5em;
  color: #999;
`;

export const SearchArea = styled.button`
  width: 100%;
  height: 60px;
  padding: 0 14px;
  border: 1px solid #f3f3f3;
  border-radius: 4px;
  background: #fff;
  font-size: 20px;
  line-height: 60px;
  font-weight: 700;
  color: #424346;
  text-align: left;
  cursor: pointer;
`;

export const SearchData = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'flex-end')};
  width: 100%;
  height: 60px;
  padding: 0 14px;
  border: 1px solid #f3f3f3;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4em;
  text-align: center;
  color: #424346;

  .ant-space {
    width: 100%;
  }

  .ant-picker {
    width: 100%;
    padding: 4px 0;
  }

  .ant-picker-input > input {
    font-size: 18px;
  }
`;

export const DataTt = styled.div`
  font-weight: 700;
`;

export const SearchBtn = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 100%;
  margin-left: 8px;
  background: #f69d3e;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(71, 71, 71, 0.1);
  color: inherit;
  text-decoration: none;
`;

export const SearchIcon = styled.img`
  height: 50px;
  line-height: 0;
`;

export const SearchBtTXt = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;
