import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { REST_API_KEY, REDIRECT_URI, CLIENT_SECRET } from './OAuth';
import { API } from '../../config';
import axios from 'axios';
import qs from 'qs';
import { useRecoilState } from 'recoil';
import { tokenState } from './GlobalState';
import styled from 'styled-components';

const KakaoLogin = () => {
  const location = useLocation();

  const code = qs.parse(location.search, { ignoreQueryPrefix: true }).code;

  const navigate = useNavigate();

  const [token, setToken] = useRecoilState(tokenState);

  const postKaKaoToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    try {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload
      );
      fetch(`${API.sendKakaoToken}`, {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: res.data.access_token,
        },
      })
        .then(res => res.json())
        .then(result => {
          if (result.access_token) {
            localStorage.setItem('morganToken', result.access_token);
            setToken(localStorage.getItem('morganToken'));
            navigate('/');
          }
        });
    } catch (err) {
      alert('로그인에 실패 했어요 ㅠㅠ🍊');
    }
  };

  useEffect(() => {
    postKaKaoToken();
  }, []);

  return (
    <LogoBox>
      <LogoWrap>
        <BobMorganLogo src="/images/bobMorgan-logo.png" alt="bob-morgan-logo" />
        <LoginH1>밥 먹고완~?🍊</LoginH1>
      </LogoWrap>
    </LogoBox>
  );
};

const LogoBox = styled.div`
  ${({ theme }) => theme.flexMixin()};
  width: 100%;
  height: calc(100vh - 80px);
  padding-bottom: 80px;
`;

const LogoWrap = styled.div`
  ${({ theme }) => theme.flexMixin()};
  flex-direction: column;
  width: 400px;
  height: 400px;
`;

const BobMorganLogo = styled.img`
  height: 120px;
  animation: jello-horizontal infinite 0.9s both;
  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`;

const LoginH1 = styled.h1`
  margin-top: 35px;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.3em;
`;

export default KakaoLogin;
