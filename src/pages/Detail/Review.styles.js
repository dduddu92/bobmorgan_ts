import styled from 'styled-components';
export const ReviewWrapper = styled.div`
  width: 100%;
  padding: 85px 0 45px 0;
`;
export const ReviewHeader = styled.h3`
  padding-bottom: 36px;
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.text};
`;

export const ReviewContents = styled.div`
  padding-bottom: 30px;
`;
export const ReviewContentsHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
`;
export const ReviewUserId = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.theme.text};
`;
export const ReviewTime = styled.p`
  padding-left: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.theme.lightGrey};
`;

export const ReviewArea = styled.div`
  background-color: ${props => props.theme.whiteGrey};
  border-radius: 4px;
  padding: 16px 18px;
`;

export const ReviewText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.theme.text};
`;

export const ReViewButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;
export const ModifyButton = styled.button`
  display: flex;
  align-self: center;
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
    color: white;
    background-color: ${props => props.theme.keyColor};
    border: 1px solid ${props => props.theme.keyColor};
  }
`;
export const DeleteButton = styled(ModifyButton)`
  &:hover {
    color: white;
    background-color: ${props => props.theme.red};
    border: 1px solid ${props => props.theme.red};
  }
`;

export const ReviewWriteArea = styled.div`
  padding-top: 20px;
`;

export const ReviewWriteTextArea = styled.div`
  .ant-input {
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
