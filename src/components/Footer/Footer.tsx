import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterLogo src="/images/bobMorgan-logo.png" alt="밥먹언 로고" />
      <FooterText>
        Copyright Bob Morgan(밥먹언). All rights reserved.
      </FooterText>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  position: relative;
  padding: 22px 0;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  line-height: 1.4em;
  color: #f69d3e;
`;

const FooterLogo = styled.img`
  height: 65px;
  margin-bottom: 8px;
  line-height: 0;
`;
export default Footer;
