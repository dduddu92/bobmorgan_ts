import styled from 'styled-components';

export const ReservationWrapper = styled.div`
  ${({ theme }) => theme.flexMixin()};
  margin: 40px 0;
`;

export const Reservation = styled.div`
  width: 400px;
  height: 80px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 4px 0 rgba(95, 95, 95, 0.08),
    0 4px 4px 0 rgba(95, 95, 95, 0.01);
`;

export const ResevationContents = styled.div`
  ${({ theme }) => theme.flexMixin('align', 'space-around')};
  padding: 20px 0;
`;

export const ResevationInfo = styled.div``;
export const Title = styled.h4`
  width: 150px;
  padding-bottom: 10px;
  color: ${props => props.theme.lightGrey};
  font-size: 14px;
  text-align: center;
`;

export const Info = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  height: 30px;
  color: ${props => props.theme.text};
  font-size: 18px;
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
