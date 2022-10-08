import styled from 'styled-components';

export const ReservationWrapper = styled.div`
  ${({ theme }) => theme.flexMixin('', 'space-around')};
`;

export const Reservation = styled.div`
  height: 280px;
  width: 660px;
  padding: 30px;
  background-color: white;
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
  padding-top: 26px;
`;

export const ResevationInfo = styled.div`
  .ant-input-affix-wrapper {
    &:hover {
      color: white;
      border: 1px solid ${props => props.theme.keyColor};
    }
  }
  .ant-input-affix-wrapper-focused {
    border-color: ${props => props.theme.keyColor};
    box-shadow: 0 0 0 2px rgb(255 173 29 / 20%);
    border-right-width: 1px;
    outline: 0;
  }
`;
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

export const ReservationButton = styled.button`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  flex-direction: column;
  width: 120px;
  height: 280px;
  border-radius: 10px;
  margin-left: 10px;
  background-color: ${props => props.theme.pointColor};
  color: white;
  border: none;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 4px 0 rgba(95, 95, 95, 0.08),
    0 4px 4px 0 rgba(95, 95, 95, 0.01);
  transition: all 0.2s ease;
  &:hover {
    background-color: ${props => props.theme.keyColor};
  }
`;

export const DoneIcon = styled.img`
  width: 26px;
  margin-bottom: 12px;
`;

export const RequestsSection = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'space-between')};
  padding: 20px 10px 0 20px;
`;

export const RequestInfo = styled.div`
  width: 450px;
  padding: 14px;

  .ant-input-affix-wrapper {
    &:hover {
      border: 1px solid ${props => props.theme.keyColor};
    }
  }
  .ant-input-affix-wrapper-focused {
    border-color: ${props => props.theme.keyColor};
    box-shadow: 0 0 0 2px rgb(255 173 29 / 20%);
    border-right-width: 1px;
    outline: 0;
  }
`;
export const RequestTitle = styled.h3`
  padding-bottom: 10px;
  font-size: 14px;
  color: ${props => props.theme.lightGrey};
`;

export const ResevationUserInfo = styled.div`
  width: 200px;
  .ant-input-affix-wrapper {
    &:hover {
      border: 1px solid ${props => props.theme.keyColor};
    }
  }
  .ant-input-affix-wrapper-focused {
    border-color: ${props => props.theme.keyColor};
    box-shadow: 0 0 0 2px rgb(255 173 29 / 20%);
    border-right-width: 1px;
    outline: 0;
  }
`;
