import React, { useEffect, useState, useRef } from 'react';
import { Range, getTrackBackground } from 'react-range';
import Slide from './Slide';
import PlaceList from './PlaceList';
import Empty from './Empty';
import ResevationInfo from './ReservationInfo';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { API } from '../../config';

const SearchList = () => {
  const location = useLocation();
  const code = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [placeList, setPlaceList] = useState([]);
  const [date, setDate] = useState(code.date);
  const [searchInput, setSearchInput] = useState('');
  const [selectedRegion, setSelectedRegion] = useState([code.region]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [scroll, setScroll] = useState(false);
  const [values, setValues] = useState([0, 7]);
  const detailRef = useRef(null);

  const regionQuery = selectedRegion
    .map(region => `region=${region}`)
    .join('&');

  const categoryQuery = selectedCategory
    .map(category => `category=${category}`)
    .join('&');

  useEffect(() => {
    window.addEventListener('scroll', scrollButtonView);
    return () => {
      window.removeEventListener('scroll', scrollButtonView);
    };
  }, []);

  useEffect(() => {
    fetch(`${API.searchList}?${regionQuery}&${categoryQuery}`)
      .then(res => res.json())
      .then(data => {
        setPlaceList(data.results);
        setDate(data.date);
      });
  }, [regionQuery, categoryQuery]);

  const saveRegion = region => {
    if (selectedRegion.includes(region)) {
      const selectedIdx = selectedRegion.indexOf(region);
      selectedRegion.splice(selectedIdx, 1);
      setSelectedRegion([...selectedRegion]);
    } else {
      setSelectedRegion(selectedRegion.concat(region));
    }
  };

  const saveCategory = category => {
    if (selectedCategory.includes(category)) {
      const selectedIdex = selectedCategory.indexOf(category);
      selectedCategory.splice(selectedIdex, 1);
      setSelectedCategory([...selectedCategory]);
    } else {
      setSelectedCategory(selectedCategory.concat(category));
    }
  };

  const scrollButtonView = () => {
    if (window.scrollY >= 500) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const goTopScroll = () => {
    detailRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const updateSearchInput = e => {
    setSearchInput(e.target.value);
  };

  const sortedPlaces = placeList.filter(place => {
    return place.place_name.includes(searchInput);
  });
  const range = sortedPlaces.filter(range => {
    return (
      values[0] <= range.menu_avg_price / 10000 &&
      range.menu_avg_price / 10000 <= values[1]
    );
  });

  return (
    <div ref={detailRef}>
      <ResevationInfo date={date} placeList={placeList} />
      <ListWrap>
        <FilfterList>
          <RestaurantCategory>
            <div>식당분류</div>
            {CATEGORY_OPTION.map(item => {
              return (
                <div key={item.id} onChange={() => saveCategory(item.id)}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedCategory.includes(item.id)}
                      onChange={e => {}}
                    />
                    {item.category}
                  </label>
                </div>
              );
            })}
          </RestaurantCategory>

          <RegionCategory>
            <div>지역</div>
            {REGION_OPTION.map(place => {
              return (
                <div key={place.id} onChange={() => saveRegion(place.id)}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedRegion.includes(place.id)}
                      onChange={e => {}}
                    />
                    {place.region}
                  </label>
                </div>
              );
            })}
          </RegionCategory>
          <SearchRestaurant>
            <SearchPlace
              type="search"
              placeholder="식당 이름으로 검색할 수 있습니다"
              onChange={updateSearchInput}
            />
          </SearchRestaurant>
          <PriceRangeWrap>
            <PriceRange>
              <div>메뉴 평균 가격</div>
              <div>
                {values[0]}만원 ~ {values[1]}만원
              </div>
            </PriceRange>
            <Range
              values={values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={values => {
                setValues(values);
              }}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    display: 'flex',
                    height: '36px',
                    width: '250px',
                    padding: '0 30px',
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: '5px',
                      width: '100%',
                      borderRadius: '4px',
                      background: getTrackBackground({
                        values,
                        colors: ['#ddd', '#FFAD1D', '#ddd'],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: 'center',
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '24px',
                    width: '24px',
                    borderRadius: '40px',
                    backgroundColor: '#FFAD1D',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0px 2px 6px #AAA',
                    outline: 'none',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '4px',
                      height: '3.5px',
                      width: '3.5px',
                      borderRadius: '40px',
                      backgroundColor: '#15d300',
                    }}
                  />
                </div>
              )}
            />
          </PriceRangeWrap>
          <FilterReset>
            <ResetBtn type="button">↩︎ 필터 초기화</ResetBtn>
          </FilterReset>
        </FilfterList>

        <ListForm>
          <Slide placeList={placeList} key={placeList.place_id} />

          {range.length === 0 && <Empty />}
          {range.map(place => {
            return <PlaceList place={place} key={place.place_id} />;
          })}
        </ListForm>
        {scroll && (
          <MoveTopButton
            src="/images/buttonImage/imgTopBtn.png"
            alt="화면상단이동버튼"
            onClick={() => {
              goTopScroll();
            }}
          />
        )}
      </ListWrap>
    </div>
  );
};
const MoveTopButton = styled.img`
  position: fixed;
  bottom: 200px;
  right: 50%;
  margin-right: -500px;
  cursor: pointer;
`;

const ListWrap = styled.div`
  background-color: #f8f8f8;
  padding-bottom: 100px;
`;

const FilfterList = styled.div`
  position: fixed;
  top: 300px;
  left: 50%;
  margin-left: -780px;
  height: 700px;
  padding-top: 16px;
  background-color: white;
`;

const PriceRange = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListForm = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const RestaurantCategory = styled.div`
  border-bottom: 1px solid #ccc;
  margin: 0 10px;
  padding: 20px 0;
  line-height: 27px;
`;

const RegionCategory = styled.div`
  border-bottom: 1px solid #ccc;
  margin: 0 10px;
  padding: 20px 0;
  line-height: 27px;
`;

const SearchPlace = styled.input`
  display: flex;
  width: 250px;
  height: 30px;
  &:focus {
    outline: solid #f69d3e;
  }
`;

const FilterReset = styled.div`
  padding: 10px;
`;
const ResetBtn = styled.button`
  width: 100%;
  height: 45px;
  border: 0;
  border-radius: 5px;
  background-color: #f69d3e;
  color: #f0f0f0;
  cursor: pointer;
`;
const SearchRestaurant = styled.div`
  border-bottom: 1px solid #ccc;
  margin: 0 10px;
  padding: 20px 0;
`;
const PriceRangeWrap = styled.div`
  border-bottom: 1px solid #ccc;
  margin: 0 10px;
  padding: 20px 0;
`;

const CATEGORY_OPTION = [
  { id: 1, category: '한식' },
  { id: 2, category: '중식' },
  { id: 3, category: '일식' },
  { id: 4, category: '양식' },
  { id: 5, category: '카페' },
];
const REGION_OPTION = [
  { id: 1, region: '제주시' },
  { id: 2, region: '애월 · 한림' },
  { id: 3, region: '구좌 · 조천' },
  { id: 4, region: '성산 · 표선' },
  { id: 5, region: '서귀포' },
  { id: 6, region: '대정 · 안덕 · 한경' },
];

const STEP = 1;

const MIN = 0;

const MAX = 7;

export default SearchList;
