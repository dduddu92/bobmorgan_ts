import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Main from './pages/Main/Main';
import SearchList from './pages/SearchList/SearchList';
import Detail from './pages/Detail/Detail';
import KakaoLogin from './components/SocialLogin/KakaoLogin';
import Footer from './components/Footer/Footer';

const Router = props => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/searchlist" element={<SearchList />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/signin/kakao" element={<KakaoLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
