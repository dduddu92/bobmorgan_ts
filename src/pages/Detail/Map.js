/*global kakao*/
import React, { useEffect, useRef } from 'react';
import * as S from './Map.styles';
const Location = ({ detailInfo }) => {
  const { place_latitude, place_longitude } = detailInfo;
  const mapId = useRef();

  useEffect(() => {
    let options = {
      center: new kakao.maps.LatLng(
        Number(place_latitude),
        Number(place_longitude)
      ),
      level: 3,
    };

    let map = new kakao.maps.Map(mapId.current, options);
    let markerPosition = new kakao.maps.LatLng(
      Number(place_latitude),
      Number(place_longitude)
    );
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, [place_latitude, place_longitude]);

  return (
    <div>
      <S.Map ref={mapId} />
    </div>
  );
};

export default Location;
