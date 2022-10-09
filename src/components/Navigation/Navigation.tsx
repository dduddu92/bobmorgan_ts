import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { tokenState } from '../SocialLogin/GlobalState';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
const Navigation = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [token, setToken] = useRecoilState(tokenState);

  const handleLogout = () => {
    localStorage.removeItem('morganToken');
    setToken('');
  };

  let activeClassName = 'active';

  return (
    <>
      <Nav>
        <NavInner>
          <LogoBtn to="/">
            <LogoImg src="/images/bobMorgan-logo.png" alt="" />
          </LogoBtn>
          <GnbMenus>
            {MENU_LIST.map(({ id, name, link }) => {
              return (
                <GnbMenuLink
                  key={id}
                  to={link}
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  {name}
                </GnbMenuLink>
              );
            })}
          </GnbMenus>
          <UtilBox>
            <CsBtn>
              친절상담 <CsStrong>* 8716-6728</CsStrong>
            </CsBtn>

            {!token ? (
              <LoginBtn
                onClick={() => {
                  setIsLoginOpen(true);
                }}
              >
                로그인
              </LoginBtn>
            ) : (
              <LoginBtn
                onClick={() => {
                  handleLogout();
                }}
              >
                로그아웃
              </LoginBtn>
            )}
          </UtilBox>
        </NavInner>
      </Nav>
      {isLoginOpen && (
        <SocialLogin
          isLoginOpen={isLoginOpen}
          setIsLoginOpen={setIsLoginOpen}
        />
      )}
    </>
  );
};

const MENU_LIST = [
  {
    id: 1,
    name: '홈',
    link: '/',
  },
  {
    id: 2,
    name: '제주맛집',
    link: '/searchlist',
  },
  {
    id: 3,
    name: '마이페이지',
    link: '/mypage',
  },
];

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
  z-index: 20;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #f3f3f3;
  }
`;

const NavInner = styled.div`
  position: relative;
  max-width: 1140px;
  height: 80px;
  margin: 0 auto;
  padding-left: 100px;
`;

const LogoBtn = styled(Link)`
  position: absolute;
  top: 50%;
  left: 0;
  height: 60px;
  margin-top: -30px;
`;

const LogoImg = styled.img`
  height: 100%;
`;

const GnbMenus = styled.div`
  display: flex;
`;

const GnbMenuLink = styled(NavLink)`
  display: inline-block;
  padding: 0 18px;
  font-size: 16px;
  line-height: 80px;
  color: #666;
  text-decoration: none;

  &:hover {
    color: #f69d3e;
  }
  &.active {
    color: #f69d3e;
  }
`;

const UtilBox = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
`;

const CsBtn = styled.div`
  display: inline-block;
  height: 36px;
  padding: 0 15px;
  margin-right: 22px;
  border-radius: 18px;
  background: #f69d3e;
  font-size: 14px;
  line-height: 36px;
  color: #fff;
  text-align: center;

  &:hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  }
`;

const CsStrong = styled.strong`
  font-size: 15px;
  font-weight: 700;
`;

const LoginBtn = styled.button`
  display: inline-block;
  border: 0;
  background: none;
  font-size: 15px;
  line-height: 22px;
  color: #f69d3e;
  text-decoration: none;

  &:hover {
    color: #666;
  }
`;

export default Navigation;
