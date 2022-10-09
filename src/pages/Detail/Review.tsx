import React, { useState } from 'react';
import { Input } from 'antd';
import * as S from './Review.styles';

const Review = () => {
  const { TextArea } = Input;
  const [value, setValue] = useState('');
  return (
    <S.ReviewWrapper>
      <S.ReviewHeader>피어22의 리뷰</S.ReviewHeader>
      <S.ReviewContents>
        <S.ReviewContentsHeader>
          <S.ReviewUserId>경바</S.ReviewUserId>
          <S.ReviewTime>2022.07.10 09:29</S.ReviewTime>
        </S.ReviewContentsHeader>
        <S.ReviewArea>
          <S.ReviewText>
            여기 찐맛집 찐여기 찐맛집 찐여기 찐맛집 찐여기 찐맛집 찐여기 찐맛집
            찐여기 찐맛집 찐여기 찐맛집 찐여기 찐맛집 찐 여기 찐맛집 찐여기
            찐맛집 찐여기 찐맛집 찐여기 찐맛집 찐여기 찐맛집 찐여기 찐맛집 찐
          </S.ReviewText>
          <S.ReViewButtons>
            <S.ModifyButton>수정</S.ModifyButton>
            <S.DeleteButton>삭제</S.DeleteButton>
          </S.ReViewButtons>
        </S.ReviewArea>
      </S.ReviewContents>
      <S.ReviewWriteArea>
        <S.ReviewContentsHeader>
          <S.ReviewUserId>경바</S.ReviewUserId>
        </S.ReviewContentsHeader>
        <S.ReviewWriteTextArea>
          <TextArea
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="리뷰내용을 입력해주세요"
            autoSize={{
              minRows: 3,
              maxRows: 5,
            }}
          />
        </S.ReviewWriteTextArea>
        <S.ReViewButtons>
          <S.ModifyButton>확인</S.ModifyButton>
        </S.ReViewButtons>
      </S.ReviewWriteArea>
    </S.ReviewWrapper>
  );
};

export default Review;
