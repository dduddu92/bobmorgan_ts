import React, { useState, useEffect } from 'react';
import AreaModal from './AreaModal/AreaModal';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import 'moment/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';
import * as S from './Main.styled';
import 'antd/dist/antd.min.css';

const DATE_FORMAT = 'YYYY년 MM월 DD일';

const Main = () => {
  const [areaMenu, setAreaMenu] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [searchAreaName, setSearchAreaName] = useState('');
  const [searchAreaId, setSearchAreaId] = useState();
  const [searchDate, setSearchDate] = useState();

  const dateOnChange = (date, dateString) => {
    let regex = /[^0-9]/gi;
    let regexBlank = /\s/g;
    let deleteKo = dateString
      .replaceAll(regexBlank, '')
      .replaceAll('일', '')
      .replaceAll(regex, '-');
    return setSearchDate(deleteKo);
  };

  const disabledDate = current => {
    let customDate = moment().format('YYYY-MM-DD');
    return current && current < moment(customDate, 'YYYY-MM-DD');
  };

  useEffect(() => {
    fetch('/data/areaMenu.json', {})
      .then(res => res.json())
      .then(data => {
        setAreaMenu(data.region_list);
      });
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  return (
    <>
      <S.MainSlider>
        <S.StyledSlider {...settings}>
          {SLIDER_ITEMS.map(item => {
            return (
              <S.SliderImgBox key={item.id}>
                <S.SliderImg src={item.url} alt="비주얼 이미지" />
              </S.SliderImgBox>
            );
          })}
        </S.StyledSlider>
      </S.MainSlider>
      <S.MainSearch>
        <S.SearchInner>
          <S.SearchBox>
            <S.SearchNav>
              <S.SearchTitle>제주맛집</S.SearchTitle>
            </S.SearchNav>
            <S.SearchItems>
              <S.SearchItem>
                <S.SearchTit>지역</S.SearchTit>
                <S.SearchArea onClick={() => setIsOpen(true)}>
                  {searchAreaName === '' ? '제주 검색' : ''}
                  {searchAreaName}
                </S.SearchArea>
              </S.SearchItem>
              <S.SearchItem>
                <S.SearchTit>날짜</S.SearchTit>
                <S.SearchData>
                  <Space direction="vertical">
                    <DatePicker
                      onChange={dateOnChange}
                      bordered={false}
                      disabledDate={disabledDate}
                      format={DATE_FORMAT}
                      locale={locale}
                    />
                  </Space>
                </S.SearchData>
              </S.SearchItem>
            </S.SearchItems>
          </S.SearchBox>
          <S.SearchBtn
            to={
              searchAreaName === ''
                ? ''
                : `/searchlist?region=${searchAreaId}&date=${searchDate}`
            }
          >
            <S.SearchIcon src="/images/icon_search.svg" alt="" />
            <S.SearchBtTXt>맛집 검색</S.SearchBtTXt>
          </S.SearchBtn>
        </S.SearchInner>
      </S.MainSearch>
      {isOpen && (
        <AreaModal
          setIsOpen={setIsOpen}
          setSearchAreaName={setSearchAreaName}
          areaMenu={areaMenu}
          setSearchAreaId={setSearchAreaId}
        />
      )}
    </>
  );
};

const SLIDER_ITEMS = [
  { id: 1, url: '/images/main_vs1.jpg' },
  { id: 2, url: '/images/main_vs2.jpg' },
  { id: 3, url: '/images/main_vs3.jpg' },
  { id: 4, url: '/images/main_vs4.jpg' },
];

export default Main;
