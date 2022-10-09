import React, { useEffect, useState, Space } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { TimePicker, InputNumber, Input, DatePicker } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { tokenState } from '../../components/SocialLogin/GlobalState';
import { useRecoilState } from 'recoil';

import moment from 'moment';
import * as S from './ReservationInfo.styles';
import 'antd/dist/antd.min.css';

const ResevationInfo = ({ placeName, placeRegion }) => {
  const [value] = useState(null);
  const [userCount, setUserCount] = useState(0);
  const [userName, setUserName] = useState('');
  const [request, setUserRequest] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [token, setToken] = useRecoilState(tokenState);
  const [date, setDate] = useState('');
  const location = useLocation();
  const params = useParams();
  const { RangePicker } = DatePicker;

  const format = 'HH:mm';

  const range = (start, end) => {
    const result = [];

    for (let i = start; i < end; i++) {
      result.push(i);
    }

    return result;
  };

  const onChangeDate = (date, dateString) => {
    setDate(dateString);
  };

  const disabledDate = current => {
    let customDate = moment().format('YYYY-MM-DD');
    return current && current < moment(customDate, 'YYYY-MM-DD');
  };

  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  });
  // 시간
  const onChangeTime = (time, timeString) => {
    console.log(time, timeString);
    setReservationTime(timeString);
  };

  // 예약인원
  const reservationUSer = value => {
    setUserCount(value);
  };

  // 요청 사항
  const onChangeRequest = e => {
    setUserRequest(e.target.value);
  };
  // 유저 이름
  const onChangeUserName = e => {
    setUserName(e.target.value);
  };
  console.log('params', params.id);
  const submit = () => {
    fetch(`http://10.58.3.127:8000/reservations/${params.id}`, {
      method: 'POST',
      headers: {
        //'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: localStorage.getItem('morganToken'),
      },
      body: JSON.stringify({
        reservation_date: date,
        under_name: userName,
        number_of_people: userCount,
        request_message: request,
        reservation_time: reservationTime,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.access_token) {
          alert('예약 완료 되었습니다.');
        }
        alert('예약 완료 되었습니다.');
      });

    // .then(response => response.text())
    // .then(text => console.log(text));
  };

  return (
    <S.ReservationWrapper>
      <S.Reservation>
        <S.ReservationTitle>제주 맛집</S.ReservationTitle>
        <S.ResevationContents>
          <S.ResevationInfo>
            <S.Title>지역</S.Title>
            <S.Info>{placeRegion}</S.Info>
          </S.ResevationInfo>
          <S.ResevationInfo>
            <S.Title>가게 이름</S.Title>
            <S.Info>{placeName}</S.Info>
          </S.ResevationInfo>
          <S.ResevationInfo>
            <S.Title>예약 날짜</S.Title>
            <S.Info>
              <DatePicker
                format="YYYY-MM-DD"
                disabledDate={disabledDate}
                onChange={onChangeDate}
              />
            </S.Info>
          </S.ResevationInfo>
          <S.ResevationInfo>
            <S.Title>시간</S.Title>
            <S.Info>
              <TimePicker
                // value={value}
                defaultValue={moment(format)}
                format={format}
                minuteStep={30}
                onChange={onChangeTime}
              />
            </S.Info>
          </S.ResevationInfo>
          <S.ResevationInfo>
            <S.Title>인원 수</S.Title>
            <S.Info>
              <InputNumber
                min={1}
                max={10}
                defaultValue={1}
                onChange={reservationUSer}
              />
            </S.Info>
          </S.ResevationInfo>
        </S.ResevationContents>

        <S.RequestsSection>
          <S.ResevationUserInfo>
            <S.RequestTitle>예약자 명</S.RequestTitle>
            <S.Info>
              <Input
                placeholder="예약자명"
                prefix={<UserOutlined />}
                onChange={onChangeUserName}
              />
            </S.Info>
          </S.ResevationUserInfo>
          <S.RequestInfo>
            <S.RequestTitle>요청 사항</S.RequestTitle>
            <Input showCount maxLength={500} onChange={onChangeRequest} />
          </S.RequestInfo>
        </S.RequestsSection>
      </S.Reservation>

      <S.ReservationButton onClick={submit}>
        <S.DoneIcon src="/images/icon/done.png" />
        예약
      </S.ReservationButton>
    </S.ReservationWrapper>
  );
};

export default ResevationInfo;
