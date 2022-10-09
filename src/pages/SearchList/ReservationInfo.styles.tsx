import styled from 'styled-components';

export const ReservationWrapper = styled.div`
  ${({ theme }) => theme.flexMixin()};
  margin: 40px 0;
  position: sticky;
  z-index: 1022;
  top: 120px;
  left: 120px;
`;

export const Reservation = styled.div`
  height: 80px;
  width: 400px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(95, 95, 95, 0.08),
    0 4px 4px 0 rgba(95, 95, 95, 0.01);
  z-index: 1;
`;

export const ReservationTitle = styled.h3`
  padding-bottom: 10px;
  color: ${props => props.theme.pointColor};
  border-bottom: 1px solid ${props => props.theme.grey};
  font-weight: 600;
  font-size: 20px;
`;

export const ResevationContents = styled.div`
  ${({ theme }) => theme.flexMixin('', 'space-around')};
  padding-top: 20px;
`;

export const ResevationInfo = styled.div``;
export const Title = styled.h4`
  padding-bottom: 10px;
  font-size: 14p;
  color: ${props => props.theme.lightGrey};
  text-align: center;
`;

export const Info = styled.div`
  ${({ theme }) => theme.flexMixin('center', '')};
  font-size: 18px;
  height: 30px;
  color: ${props => props.theme.text};
  text-align: center;
  .ant-picker {
    &:hover {
      color: white;
      border: 1px solid ${props => props.theme.keyColor};
    }
  }
  .ant-picker-focused {
    border-color: ${props => props.theme.keyColor};
    box-shadow: 0 0 0 2px rgb(255 173 29 / 20%);
    border-right-width: 1px;
    outline: 0;
  }
  .ant-input-number {
    &:hover {
      border: 1px solid ${props => props.theme.keyColor};
    }
  }
  .ant-input-number-focused {
    border-color: ${props => props.theme.keyColor};
    box-shadow: 0 0 0 2px rgb(255 173 29 / 20%);
    border-right-width: 1px;
    outline: 0;
  }
`;
