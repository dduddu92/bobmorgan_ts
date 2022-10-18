/*global kakao*/
import React, { useState, useEffect, useRef } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import * as S from './AreaModal.styled';
import 'bootstrap/dist/css/bootstrap.min.css';

declare global {
  interface Window {
    kakao: any;
  }
}

const AreaModal = ({
  setIsOpen,
  setSearchAreaName,
  areaMenu,
  setSearchAreaId,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchAreaName: React.Dispatch<React.SetStateAction<string>>;
  areaMenu: { region_id: number; region_name: string }[];
  setSearchAreaId: React.Dispatch<React.SetStateAction<number | undefined>>;
}) => {
  const [key, setKey] = useState<string | null>('home');
  const mapId = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let options = {
      center: new window.kakao.maps.LatLng(
        33.50431022611561,
        126.49432520073913
      ),
      level: 4,
    };

    let map = new window.kakao.maps.Map(mapId.current, options);
    let geocoder = new window.kakao.maps.services.Geocoder();

    let imageSrc = '/images/bobMorgan-map-pick2.png';
    let imageSize = new window.kakao.maps.Size(36, 50);
    let imageOption = { offset: new window.kakao.maps.Point(15, 50) };

    let markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    let marker = new window.kakao.maps.Marker({
      image: markerImage,
    });

    interface EventProps {
      latLng: {
        La: number;
        Ma: number;
      };
      point: {
        x: number;
        y: number;
      };
    }

    interface AddressRoot {
      road_address: RoadAddress;
      address: Address;
    }

    interface RoadAddress {
      address_name: string;
      region_1depth_name: string;
      region_2depth_name: string;
      region_3depth_name: string;
      road_name: string;
      underground_yn: string;
      main_building_no: string;
      sub_building_no: string;
      building_name: string;
      zone_no: string;
    }

    interface Address {
      address_name: string;
      region_1depth_name: string;
      region_2depth_name: string;
      region_3depth_name: string;
      mountain_yn: string;
      main_address_no: string;
      sub_address_no: string;
      zip_code: string;
    }

    window.kakao.maps.event.addListener(
      map,
      'click',
      function (mouseEvent: EventProps) {
        let coord = new window.kakao.maps.LatLng(
          mouseEvent.latLng.La,
          mouseEvent.latLng.Ma
        );
        searchDetailAddrFromCoords(
          coord,
          function (result: AddressRoot[], status: string) {
            if (status === 'OK') {
              let detailAddr = result[0].address.address_name;
              let message = `<input type="text" value="${detailAddr}" />`;
              let resultDiv: HTMLElement | null =
                document.getElementById('centerAddr');
              resultDiv!.innerHTML = message;
              marker.setPosition(mouseEvent.latLng);
              marker.setMap(map);
            }
          }
        );
      }
    );

    function searchDetailAddrFromCoords(
      coord: any,
      callback: CallableFunction
    ) {
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
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
                  {areaMenu.map(
                    ({
                      region_id,
                      region_name,
                    }: {
                      region_id: number;
                      region_name: string;
                    }) => {
                      return (
                        <S.AreaMenuLi
                          key={region_id}
                          onClick={() => {
                            setSearchAreaName(
                              region_name.replaceAll('_', ' ・ ')
                            );
                            setSearchAreaId(region_id);
                            setIsOpen(false);
                          }}
                        >
                          {region_name.replaceAll('_', ' ・ ')}
                        </S.AreaMenuLi>
                      );
                    }
                  )}
                </S.AreaMenu>
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
