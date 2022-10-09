/*global kakao*/
import React, { useState, useEffect, useRef } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import * as S from './AreaModal.styled';
import 'bootstrap/dist/css/bootstrap.min.css';

const AreaModal = ({
  setIsOpen,
  setSearchAreaName,
  areaMenu,
  setSearchAreaId,
}) => {
  const [key, setKey] = useState('home');
  const mapId = useRef();

  useEffect(() => {
    let options = {
      center: new kakao.maps.LatLng(33.50431022611561, 126.49432520073913),
      level: 4,
    };
    console.log(kakao.maps.services);
    let map = new kakao.maps.Map(mapId.current, options);
    let geocoder = new kakao.maps.services.Geocoder();

    let imageSrc = '/images/bobMorgan-map-pick2.png';
    let imageSize = new kakao.maps.Size(36, 50);
    let imageOption = { offset: new kakao.maps.Point(15, 50) };

    let markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    let marker = new kakao.maps.Marker({
      image: markerImage,
    });

    searchAddrFromCoords(map.getCenter());

    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          let detailAddr = result[0].address.address_name;

          let message = `<input type="text" value="${detailAddr}" />`;

          let resultDiv = document.getElementById('centerAddr');
          resultDiv.innerHTML = message;

          marker.setPosition(mouseEvent.latLng);
          marker.setMap(map);
        }
      });
    });

    function searchAddrFromCoords(coords, callback) {
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    }

    function searchDetailAddrFromCoords(coords, callback) {
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }
  }, [key, mapId]);

  return (
    <>
      <S.AreaModalBox>
        <S.AreaTit>지역검색</S.AreaTit>
        <S.AreaClose onClick={() => setIsOpen(false)} />
        <S.AreaTebContent>
          <Tabs defaultActiveKey="home" onSelect={k => setKey(k)}>
            <Tab eventKey="home" title="제주">
              <div>
                <S.AreaMenu>
                  {areaMenu.map(location => {
                    return (
                      <S.AreaMenuLi
                        key={location.region_id}
                        onClick={() => {
                          setSearchAreaName(
                            location.region_name.replaceAll('_', ' ・ ')
                          );
                          setSearchAreaId(location.region_id);
                          setIsOpen(false);
                        }}
                      >
                        {location.region_name.replaceAll('_', ' ・ ')}
                      </S.AreaMenuLi>
                    );
                  })}
                </S.AreaMenu>
                <S.AreaMenuSearchBox>
                  <S.AreaMenuSearch
                    type="text"
                    placeholder="지역이나 역, 건물 이름으로 검색"
                  />
                </S.AreaMenuSearchBox>
              </div>
            </Tab>
            <Tab eventKey="mapZone" title="지도">
              <S.MapBox>
                <S.MapContainerBox ref={mapId} />
              </S.MapBox>
              <S.MapContainerBoxTxt id="centerAddr" />
            </Tab>
          </Tabs>
        </S.AreaTebContent>
      </S.AreaModalBox>
      <S.AreaModalOverlay onClick={() => setIsOpen(false)} />
    </>
  );
};

export default AreaModal;
