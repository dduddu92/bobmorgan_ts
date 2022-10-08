import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 5;
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  width: 670px;
  height: 264px;
  margin: auto;
  padding: 40px;
  background: #fff;
  border-radius: 20px;
  z-index: 10;
  box-shadow: 0 4px 4px 0 rgba(71, 71, 71, 0.1),
    0 4px 4px 0 rgba(71, 71, 71, 0.1); ;
`;

export const ModalHeader = styled.h3`
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.grey};
  color: ${props => props.theme.text};
`;

export const ModalContents = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  width: 100%;
`;

export const User = styled.div`
  width: 200px;
`;

export const Input = styled.div`
  .ant-input-affix-wrapper {
    width: 100%;
    &:hover {
      border-color: ${props => props.theme.keyColor};
    }
  }
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    border-color: ${props => props.theme.keyColor};
    box-shadow: 0 0 0 2px rgb(255 173 29 / 20%);
    border-right-width: 1px;
    outline: 0;
  }
`;
export const Title = styled.p`
  font-weight: 600;
  padding-bottom: 14px;
  color: ${props => props.theme.text};
`;

export const UserCounter = styled.div`
  width: 100px;
`;

export const InputNumber = styled.div`
  .ant-input-number {
    width: 100%;
    &:hover {
      border-color: ${props => props.theme.keyColor};
    }
  }
  .ant-input-number-focused {
    border-color: ${props => props.theme.keyColor};
    box-shadow: 0 0 0 2px rgb(255 173 29 / 20%);
    border-right-width: 1px;
    outline: 0;
  }
`;

export const ReservationDate = styled.div`
  .ant-picker {
    width: 250px;
    &:hover {
      border-color: ${props => props.theme.keyColor};
    }
  }
  .ant-picker-focused {
    border-color: ${props => props.theme.keyColor};
    box-shadow: 0 0 0 2px rgb(255 173 29 / 20%);
    border-right-width: 1px;
    outline: 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px 0px 20px 0;
`;
export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  margin-left: 8px;
  color: ${props => props.theme.text};
  background-color: white;
  border: 1px solid #f3f3f3;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    color: white;
    background-color: ${props => props.theme.keyColor};
    border: 1px solid ${props => props.theme.keyColor};
  }
`;
export const CancelButton = styled(SubmitButton)`
  &:hover {
    color: white;
    background-color: ${props => props.theme.red};
    border: 1px solid ${props => props.theme.red};
  }
  .ant-picker-focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    border-right-width: 1px;
    outline: 0;
  }
`;
