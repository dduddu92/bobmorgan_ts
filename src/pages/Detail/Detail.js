import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { API } from '../../config';
import Carousel from './DetailCarousel';
import Review from './Review';
import Map from './Map';
import ReservatonInfo from './ReservationInfo';

import * as S from './Detail.styles';
const Detail = () => {
  const [isScroll, isSetScroll] = useState(false);
  const [detailInfo, setDetailInfo] = useState({});

  const detailRef = useRef(null);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`${API.places}/${params.id}`)
      // fetch(`/data/detail.json`)
      .then(res => res.json())
      .then(detailInfo => {
        setDetailInfo(detailInfo.results);
      });
  }, [params]);

  useEffect(() => {
    window.addEventListener('scroll', scrollButtonView);
    return () => {
      window.removeEventListener('scroll', scrollButtonView);
    };
  }, []);
  const goTopScroll = () => {
    detailRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const goToMain = () => {
    navigate('/');
  };
  const scrollButtonView = () => {
    if (window.scrollY >= 120) {
      isSetScroll(true);
    } else {
      isSetScroll(false);
    }
  };

  const isDataEmpty = Object.keys(detailInfo).length === 0;
  if (isDataEmpty) return <>Loading,...</>;

  const STORE_INFO = [
    {
      id: 1,
      title: '주소',
      result: detailInfo.place_address,
    },
    {
      id: 2,
      title: '영업 시간',
      result: detailInfo.place_opening_hours,
    },
    {
      id: 3,
      title: '대표 메뉴',
      result: detailInfo.menus[0].name,
    },
  ];

  return (
    <S.Detail ref={detailRef}>
      <S.CarouselSection />
      <Carousel carouselImage={detailInfo.place_images} />
      <S.CarouselSection />
      <S.ReservationSection>
        <ReservatonInfo
          placeName={detailInfo.place_name}
          placeRegion={detailInfo.place_region}
        />
      </S.ReservationSection>
      <S.Wrapper>
        <S.Container>
          {isScroll && (
            <S.MoveTopButton
              src="/images/buttonImage/imgTopBtn.png"
              alt="화면상단이동버튼"
              onClick={() => {
                goTopScroll();
              }}
            />
          )}

          <S.Header>
            <S.HeaderTop>
              <S.Region>{detailInfo.place_region} </S.Region>
            </S.HeaderTop>
            <S.HeaderTitle>{detailInfo.place_name}</S.HeaderTitle>
            <S.HeaderDescription>
              {detailInfo.place_description}
            </S.HeaderDescription>
          </S.Header>
          <S.MenuInfo>
            <S.ContentsTitle>메뉴 정보</S.ContentsTitle>
            <S.MenuContents>
              <S.MenuImage
                src={detailInfo.place_images[0].url}
                alt={detailInfo.place_name}
              />
              <S.Menulist>
                <S.MenuTitle>메뉴 이름 및 가격 </S.MenuTitle>
                {detailInfo.menus.map(menuInfo => {
                  return (
                    <S.Menu key={menuInfo.id}>
                      <S.MenuName> {menuInfo.name}</S.MenuName>
                      <S.MenuPrice>{menuInfo.price}원</S.MenuPrice>
                    </S.Menu>
                  );
                })}
              </S.Menulist>
            </S.MenuContents>
          </S.MenuInfo>

          <S.Contents>
            <S.ContentsTitle>가게 정보</S.ContentsTitle>
            <S.MapSection>
              <S.Map>
                <Map detailInfo={detailInfo} />
              </S.Map>
              <S.goToMapButton>
                <S.ButtonImage
                  src="/images/icon/location.png"
                  alt="지도 아이콘"
                />
                지도보기
              </S.goToMapButton>
            </S.MapSection>
            {STORE_INFO.map(storeInfo => {
              return (
                <S.StoreInfo key={storeInfo.id}>
                  <S.StoreInfoTitle>{storeInfo.title}</S.StoreInfoTitle>
                  <S.StoreInfoContents>{storeInfo.result}</S.StoreInfoContents>
                </S.StoreInfo>
              );
            })}

            <S.StoreInfo>
              <S.StoreInfoTitle>주소</S.StoreInfoTitle>
              <S.StoreInfoContents>
                {detailInfo.place_address}
              </S.StoreInfoContents>
            </S.StoreInfo>
          </S.Contents>
          <S.ReviewSection>
            <Review />
          </S.ReviewSection>
        </S.Container>
      </S.Wrapper>
      <S.DetailFooter>
        <S.FooterContents>
          <S.FooterLogo
            src="/images/logo/bobMorgan-logo.png"
            alt="BobMorgan Logo"
            onClick={goToMain}
          />
          <S.ListMoveButton>
            {detailInfo.place_region} 맛집 더 보기
          </S.ListMoveButton>
        </S.FooterContents>
      </S.DetailFooter>
    </S.Detail>
  );
};
export default Detail;
