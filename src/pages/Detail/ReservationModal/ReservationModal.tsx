import React from 'react';
import { InputNumber, Input, DatePicker } from 'antd';
import moment from 'moment';
import { UserOutlined } from '@ant-design/icons';
import * as S from './ReservationModal.styles';
import 'antd/dist/antd.min.css';

const ReservationModal = ({ ismodalView }) => {
  const isUserCounter = value => {
    console.log('changed', value);
  };

  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const disabledDate = current => {
    return current && current < moment().endOf('day');
  };

  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(20, 20),
    // disabledMinutes: () => range(30, 60),
  });

  return (
    <S.ModalWrapper
      onClick={() => {
        ismodalView();
      }}
    >
      <S.Modal
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <S.ModalHeader>{}경바님의 피아22 예약 </S.ModalHeader>
        <S.ModalContents>
          <S.ReservationDate>
            <S.Title>예약 날짜 및 시간</S.Title>
            <DatePicker
              format="YYYY-MM-DD HH:mm"
              disabledDate={disabledDate}
              disabledTime={disabledDateTime}
              showTime={{
                defaultValue: moment('00:00', 'HH:mm'),
              }}
            />
          </S.ReservationDate>
          <S.User>
            <S.Title>예약자 명</S.Title>
            <S.Input>
              <Input
                size="default"
                placeholder="예약자 명을 입력해주세요"
                prefix={<UserOutlined />}
              />
            </S.Input>
          </S.User>
          <S.UserCounter>
            <S.Title>예약 인원수</S.Title>
            <S.InputNumber>
              <InputNumber
                min={1}
                max={10}
                defaultValue={1}
                onChange={isUserCounter}
              />
            </S.InputNumber>
          </S.UserCounter>
        </S.ModalContents>
        <S.Buttons>
          <S.CancelButton
            onClick={() => {
              ismodalView();
            }}
          >
            취소
          </S.CancelButton>
          <S.SubmitButton>확인</S.SubmitButton>
        </S.Buttons>
      </S.Modal>
    </S.ModalWrapper>
  );
};

export default ReservationModal;
