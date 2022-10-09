import styled from 'styled-components';

export const Detail = styled.div`
  width: 100%;
`;

export const BookingModalWrapper = styled.div`
  ${({ theme }) => theme.flexMixin()}
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const CarouselSection = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.flexMixin()}
  width: 100%;
`;

export const Container = styled.div`
  width: 730px;
`;

export const MoveTopButton = styled.img`
  position: fixed;
  z-index: 3;
  width: 18px;
  bottom: 25%;
  right: 50%;
  cursor: pointer;
  margin-right: -455px;
`;

export const Header = styled.div`
  padding-top: 40px;
`;

export const HeaderTop = styled.div`
  ${({ theme }) => theme.flexMixin('', 'space-between')};
  align-items: center;
  padding-bottom: 18px;
`;

export const Region = styled.div`
  color: #999;
  font-weight: 600;
`;

export const HeaderButtons = styled.div`
  ${({ theme }) => theme.flexMixin()};
  padding-bottom: 2px;
`;

export const HeaderButton = styled.button`
  ${({ theme }) => theme.flexMixin('center', '')};
  padding: 4px 10px;
  margin-left: 8px;
  color: ${props => props.theme.text};
  background-color: white;
  border: 1px solid #f3f3f3;
  border-radius: 2px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    border: 1px solid #f69d3e;
  }
`;

export const ButtonImage = styled.img`
  width: 22px;
  padding-right: 5px;
  opacity: 1;
`;

export const HeaderTitle = styled.h2`
  color: #49495a;
  font-size: 58px;
  font-weight: 700;
`;

export const HeaderDescription = styled.p`
  padding-top: 20px;
  color: ${props => props.theme.text};
  font-size: 14px;
  font-weight: 350;
  letter-spacing: -1px;
`;

export const Contents = styled.div`
  padding-top: 80px;
`;

export const ContentsTitle = styled.h3`
  padding-bottom: 36px;
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.text};
`;

export const MapSection = styled.div`
  margin-bottom: 10px;
`;
export const Map = styled.div`
  position: relative;
  margin-bottom: 10px;
  height: 160px;
  z-index: 1;
`;

export const goToMapButton = styled.button`
  ${({ theme }) => theme.flexMixin('center', '')}

  background-color: white;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
`;

export const StoreInfo = styled.div`
  padding-top: 20px;
`;

export const StoreInfoTitle = styled.h6`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.text};
`;

export const StoreInfoContents = styled.p`
  ${({ theme }) => theme.flexMixin('center', '')};
  padding-top: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.theme.text};
`;
export const ReviewSection = styled.div`
  width: 100%;
`;
export const DetailFooter = styled.div`
  ${({ theme }) => theme.flexMixin('center', '')};
  margin-top: 80px;
  background-color: #f8f8f8;
  padding: 10px;
`;

export const FooterContents = styled.div`
  ${({ theme }) => theme.flexMixin('center', '')};

  width: 1110px;
  justify-content: space-between;
`;

export const FooterLogo = styled.img`
  width: 80px;
`;

export const ListMoveButton = styled.button`
  height: 38px;
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  color: #6c757d;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.pointColor};
    color: white;
    border: 1px solid ${props => props.theme.pointColor};
  }
`;

export const MenuInfo = styled.div`
  padding: 80px 0 80px 0;
  width: 100%;
`;
export const MenuContents = styled.div`
  ${({ theme }) => theme.flexMixin('', '')};
`;

export const MenuImage = styled.img`
  width: 300px;
`;

export const Menulist = styled.div`
  padding-left: 30px;
  width: 100%;
`;

export const Menu = styled.div`
  ${({ theme }) => theme.flexMixin('', '')};
  width: 100%;
  padding: 20px;
  margin-bottom: 14px;
  border-radius: 4px;
  background-color: ${props => props.theme.whiteGrey};
`;

export const MenuName = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export const MenuPrice = styled.div`
  padding-left: 10px;
`;

export const MenuTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  padding: 20px 20px 30px 20px;
`;

export const ReservationSection = styled.div`
  position: relative;
  margin: 0 auto;
  width: 780px;
  z-index: 1;
  top: -40px;
`;
