import React, { useRef, useState, useEffect } from 'react';
import { KAKAO_AUTH_URL } from './OAuth';
import styled from 'styled-components';

const SocialLogin = ({
  isLoginOpen,
  setIsLoginOpen,
}: {
  isLoginOpen: boolean;
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [changeAnimation, setChangeAnimation] = useState(true);

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
  });

  const clickModalOutside = (e: MouseEvent) => {
    if (
      modalRef.current !== null &&
      isLoginOpen &&
      !modalRef.current.contains(e.target as Node)
    ) {
      setChangeAnimation(false);
      setTimeout(() => {
        setIsLoginOpen(!isLoginOpen);
      }, 300);
    }
  };

  const handleLoginForKakao = () => {
    window.location.replace(KAKAO_AUTH_URL);
  };

  return (
    <SocialLoginModal>
      <LoginWrap>
        <LoginContent ref={modalRef} animation={changeAnimation}>
          <LoginMain>
            <LogoImage src="/images/bobMorgan-logo.png" alt="bob-morgan-logo" />
            <LoginH3>3초 가입/로그인 시 추가 할인!🍊</LoginH3>
            <LoginH3>성함이 "박 모건"인 경우 동반 1인 반값 할인!🍊</LoginH3>
            <LoginH3>신규 가입하고 첫 예약 시 10% 할인!🍊</LoginH3>
            <LoginP>
              카카오 계정으로 3초만에 가입하고
              <br /> 매달 회원 전용 쿠폰도 겟해보세요
            </LoginP>
          </LoginMain>
          <LoginFooter>
            <LoginButton onClick={handleLoginForKakao}>
              <KakaoLoginImage
                src="/images/kakao_login_large_wide.png"
                alt="kakao-login-button-large-wide"
              />
            </LoginButton>
          </LoginFooter>
        </LoginContent>
      </LoginWrap>
    </SocialLoginModal>
  );
};

const SocialLoginModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 399;
`;

const LoginWrap = styled.div`
  ${({ theme }) => theme.flexMixin()};
  width: 100%;
  height: 100%;
  padding: 70px 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const LoginContent = styled.div<{ animation: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 16px;
  z-index: 400;
  animation: ${props =>
    props.animation
      ? 'scale-in-ver-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both'
      : 'scale-out-ver-top 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'};

  @keyframes scale-in-ver-top {
    0% {
      transform: scaleY(0);
      transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }

  @keyframes scale-out-ver-top {
    0% {
      transform: scaleY(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleY(0);
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }
`;

const LoginMain = styled.div`
  width: 100%;
  text-align: center;
`;

const LogoImage = styled.img`
  height: 100px;
  margin-bottom: 16px;
`;

const LoginH3 = styled.h3`
  width: 100%;
  margin-bottom: 4px;
  font-size: 20px;
  line-height: 1.3em;
  font-weight: bold;
`;

const LoginP = styled.p`
  margin-top: 12px;
  color: #666;
  font-size: 14px;
  font-weight: bolder;
  line-height: 1.8em;
`;

const LoginFooter = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const KakaoLoginImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default SocialLogin;
