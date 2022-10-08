import styled from 'styled-components';

export const AreaModalBox = styled.div`
  position: fixed;
  inset: 0;
  width: 798px;
  height: 550px;
  margin: auto;
  background: #fff;
  border-radius: 16px;
  z-index: 20;
`;

export const AreaTit = styled.div`
  padding: 15px 20px;
  font-size: 16px;
  line-height: 1.3em;
  font-weight: 500;
  color: #494949;
`;

export const AreaClose = styled.a`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 25px;
  height: 25px;
  border-radius: 3px;
  background: rgba(108, 117, 125, 0.1);

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 60%;
    background: #6c757d;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 60%;
    background: #6c757d;
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    background: #6c757d;

    &:before {
      background: #fff;
    }

    &:after {
      background: #fff;
    }
  }
`;
export const AreaTebContent = styled.div`
  .nav {
    position: relative;
    height: 58px;
    z-index: 2;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #fafafa;
    }
  }
  .nav-tabs {
    border: 0;
  }

  .nav-item {
    position: relative;
    width: 50%;
    border: 0;
    z-index: 2;

    &:hover {
      color: #f69d3e;
    }
  }

  .nav-link {
    position: relative;
    width: 100%;
    border: 0;
    padding: 0;
    text-align: center;
    font-size: 16px;
    line-height: 58px;
    color: #495057;
    z-index: 2;

    &:hover {
      border: 0;
      color: #f69d3e;
    }
  }
  .nav-link.active {
    font-weight: 700;
    border: 0;
    color: #f69d3e;

    &:after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 3px;
      background: #f69d3e;
      z-index: 1;
    }
  }
`;

export const AreaTeb = styled.ul`
  position: relative;
  display: flex;
  height: 58px;
  z-index: 2;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #f3f3f3;
    z-index: 1;
  }
`;
export const AreaTebLi = styled.li`
  position: relative;
  width: 50%;
  text-align: center;
  font-size: 16px;
  line-height: 58px;
  color: #495057;
  z-index: 2;

  &:hover {
    color: #f69d3e;
  }
`;

export const AreaMenu = styled.ul`
  height: 354px;
  padding: 25px 30px;
  background: #f5f5f5;
  overflow: hidden;
`;

export const AreaMenuLi = styled.li`
  margin-bottom: 13px;
  font-size: 16px;
  line-height: 1.4em;
  color: #666;
  cursor: pointer;

  &:hover {
    color: #f69d3e;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AreaMenuSearchBox = styled.div`
  padding: 15px 20px;
`;

export const AreaMenuSearch = styled.input`
  display: block;
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border: 0;
  border-radius: 8px;
  background: #f3f3f3;
`;

export const MapBox = styled.div`
  position: relative;
  width: 100%;
  height: 354px;
  overflow: hidden;
  z-index: 1;
`;
export const MapContainerBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MapContainerBoxTxt = styled.div`
  width: calc(100% - 40px);
  height: 52px;
  margin: 15px 20px;
  padding: 0 16px;
  border: 0;
  border-radius: 8px;
  background: #f3f3f3;

  input {
    display: block;
    width: 100%;
    border: 0;
    background: transparent;
    line-height: 52px;
    outline: none;
  }
`;

export const AreaModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 5;
`;
