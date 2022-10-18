import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface IPlace {
  place: {
    place_id: number;
    place_name: string;
    place_opening_hours: string;
    place_maximum_number_of_subscriber: number;
    place_able_to_reserve: boolean;
    place_closed_temporarily: boolean;
    place_category: string;
    place_region: string;
    place_image: string;
    menus: { id: number; name: string; price: string; is_signature: boolean }[];
    menu_avg_price: string;
  };
}

const PlaceList = ({ place }: IPlace) => {
  const {
    place_image,
    place_name,
    place_region,
    place_maximum_number_of_subscriber,
    place_opening_hours,
    place_able_to_reserve,
    menu_avg_price,
    place_id,
    menus,
  } = place;

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${place_id}`);
  };

  return (
    <PlaceDataList>
      <PlaceDataWrap onClick={goToDetail}>
        <PlaceData>
          <PlaceImage src={place_image} alt="place" />
          <div>
            <CategoryName>{place_region.replaceAll('_', ' · ')}</CategoryName>
            <CategoryName>
              {place_able_to_reserve === true
                ? `예약가능 ${place_maximum_number_of_subscriber}명 `
                : '불가능'}
            </CategoryName>
            <br />
            <RestaurantName> {place_name}</RestaurantName>
            <br />
            <RestaurantTime>{place_opening_hours}</RestaurantTime>
          </div>
        </PlaceData>
        <Menus>
          {menus.map(({ id, name, price, is_signature }) => {
            return (
              <Menu key={id}>
                {is_signature === true ? (
                  <div>🐥 {name}</div>
                ) : (
                  <div>🐣 {name}</div>
                )}
                <div>{Number(price).toLocaleString()}원</div>
              </Menu>
            );
          })}

          <Menu>
            <div> 메뉴 평균 가격 </div>
            <div> {Math.round(Number(menu_avg_price))}원</div>
          </Menu>
        </Menus>
      </PlaceDataWrap>
    </PlaceDataList>
  );
};

const PlaceDataList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  cursor: pointer;
`;
const PlaceDataWrap = styled.div`
  display: flex;
`;

const PlaceData = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
`;

const PlaceImage = styled.img`
  height: 210px;
  width: 230px;
  margin-bottom: 15px;
`;

const Menus = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 45px);
  height: 55px;
  margin-bottom: 25px;
  margin-left: 45px;
  padding: 15px;
  border-radius: 5px;
  background-color: #f8f8f8;
`;

const CategoryName = styled.span`
  display: inline-block;
  padding: 3px 6px;
  margin-bottom: 10px;
  margin-right: 8px;
  border-radius: 5px;
  font-size: 13px;
  background-color: #f69d3e;
  color: #fff;
`;

const RestaurantName = styled.p`
  color: #333;
  font-size: 28px;
  font-weight: bold;
`;

const RestaurantTime = styled.p`
  font-size: 15px;
  line-height: 1.4em;
  color: #555;
  letter-spacing: -0.03em;
`;

export default PlaceList;
