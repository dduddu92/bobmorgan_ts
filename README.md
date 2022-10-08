# 🍊 Bob Morgan Client Project

## 🍊 Bob Morgan Front Family

-- F.E<br />
[박수연](https://github.com/dduddu92)
[정예지](https://github.com/jeong9204)
[이범석](https://github.com/beomq/)
[이후경](https://github.com/kyungbaa)

## 🍊 팀원 소개

- 프론트엔드 : 박수연, 이범석, 이후경, 정예지
- 백엔드 : 이태권
  </br>

## 🍊 Bob Morgan 프로젝트 소개

- 제주도의 다양한 맛집들을 소개하고 일정과 입맛 그리고 인원수에 따라 맛집을 찾고 예약할 수 있는 사이트입니다.
  </br>

## 🍊 개발 인원 및 기간

- 개발기간<br />2022/07/04 ~ 2022/07/15
- 개발 인원<br />프론트엔드 4명, 백엔드 1명

- 1차 프로젝트 발표 자료<br />
  [PDF] https://url.kr/hntqs6

## 🍊 적용 기술 및 구현 기능

- <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=Styled Components&logoColor=white">
- and design, boot strap, axios, recoil, react-slick
  </br>

## 🍊 구현 페이지

### 데모 영상

https://scrawny-opera-4c6.notion.site/ebad7fd9511642fa9de656e1226aaf07
<br />

### 🔆Main (정예지)
![main2](https://user-images.githubusercontent.com/99022588/180638257-4f79ad17-9bdd-48fe-bac9-234598a1e10b.gif)

- Navigation
 : `const GnbMenuLink = styled(NavLink)` navLink를 활용해서 url의 주소명과 라우터의 이름이 같으면 해당 `li`에다 `.active`를 붙여줘서 어느 메뉴에 있는지 알려줄수 있다.

- main slick-slider
 : https://react-slick.neostack.com 사용해서 기술 구현
 ``` javascript
 const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };
  
 <S.StyledSlider {...settings}>
    {SLIDER_ITEMS.map(item => {
      return (
        <S.SliderImgBox key={item.id}>
          <S.SliderImg src={item.url} alt="비주얼 이미지" />
        </S.SliderImgBox>
      );
    })}
  </S.StyledSlider>
 ```
 변수 선언한 settings 에다가 슬라이드에 필요한내용을 넣고 슬라이드를 돌려줄 `div`에다가 변수를 복사해서 넣어줘서 슬라이드를 실행시켜준다.
 
 ``` javascript
 export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  .slick-dots {
    bottom: 150px;
    right: 0;
    text-align: right;
    padding: 0 50px;

    li {
      height: 5px;

      button {
        height: 5px;
        background: rgba(255, 255, 255, 0.8);
        padding: 0;

        &::before {
          display: none;
        }
      }

      &.slick-active {
        button {
          background: #ffad1d;
        }
      }
    }
  }
`;
 ```
 슬라이드에서 재공해주는 버튼을 사용하기 위해서 슬라이드를 감싸는 컴포넌트를 만들어준뒤에 scss nesting을 활용해서 버튼스타일을 변경해준다.
 
 - 모달창 만들기 <br />
  ```javascript
 const [isOpen, setIsOpen] = useState(false);
 
 //모달창 열기 버튼
  <S.SearchArea onClick={() => setIsOpen(true)}>
  
  //닫기버튼
  <S.AreaClose onClick={() => setIsOpen(false)} />
  ```
  isopen이라는 스테이트를 만들어서 false를 담아두고 클릭했을때 true로 변경시킨다. <br />
  그리고 배경이나 모달창안에 엑스버튼을 부르면 스테이트에 담아준 값을 다시 false로 변경시켜서 닫아준다.
  
  - 카카오맵  <br />
   : https://apis.map.kakao.com/web/sample/coord2addr/ <br />
     https://apis.map.kakao.com/web/sample/basicMarkerImage/ <br />
     두가지 기능을 합쳐서 지도를 받아왔다.
     주의할점은 <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 사용하세요&libraries=services"></script> <br />
     키값안에 `&libraries=services` 추가로 붙는 부분이 있었는데 확인꼭 한번씩 해주기! <br />
     ``` javascript
     var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
     ```
     이런식으로 리액트는 돔에 직접 접근할수 없기때문에
     `const mapId = useRef();` 변수를 만들어서 useRef를 이용해서 돔에 접근한다.

- react-bootstrap Tab 기능 사용하기
  ``` javascript
  import Tabs from 'react-bootstrap/Tabs';
  import Tab from 'react-bootstrap/Tab';
  
  const [key, setKey] = useState('home');
  
   <Tabs defaultActiveKey="home" onSelect={k => setKey(k)}>
    <Tab eventKey="home" title="제주">
    <Tab eventKey="mapZone" title="지도">
  ```
 내가 사용할 필수 기능에 대한부분만 bootstrap에서 불러온뒤 탭기능 사용하기 <br />
 스테이트안에 처음부터 보일 탭을 저장한뒤 `<Tabs defaultActiveKey="home" onSelect={k => setKey(k)}>` 보여준다.

</br>

### 🔆Search (이범석)

- 식당 검색 리스트 페이지에서는 효과적인 필터링 방법에 대해서 고민했다.

- 먼저 식당 검색기능은 아래와 같은 코드를 사용했다.
  여기서 PlaceList는 서버로부터 받아온 식당 리스트들이 담겨있는 배열이다. 이 배열에 input의 value인 searchInput가 포함되어있나 확인하면서 같은 값만 화면에 띄워주는 방식으로 검색기능을 구현했다.

- react-range 라는 라이브러리를 사용하여 필터링 기능을 구현했다. range가 양 옆으로 있는 구조라 0번째 인덱스 값이 최소값, 1번째 인덱스의 값이 최댓값이다. 여기서 menu_avg_price 와 range[0],range[1] 값을 비교해 해당하는 식당 리스트만 보여준다 

```javascript
const sortedPlaces = placeList.filter(place => {
  return place.place_name.includes(searchInput);
});
const range = sortedPlaces.filter(range => {
  return (
    values[0] <= range.menu_avg_price / 10000 &&
    range.menu_avg_price / 10000 <= values[1]
  );
});
```

</br>




### 🔆Login (박수연)

- 여러 소셜 로그인 방법이 있었으나, 2주의 기간과 백엔드가 1명이라는걸 감안하여<br /> 
  **(프론트엔드가 4명이다보니 태권님이 힘들어하셨던 기억이 난다^^; 미안하고도 감사한 부분이다.)**<br />
  여러 소셜 로그인 중 Kakao 소셜 로그인을 채택하여 진행하였다.

- 별도의 로그인 페이지를 만들지 않고, Navigation bar의 로그인 버튼을 누르면 소셜 로그인을 위한 모달 창이 뜨는 방식으로 구현했다.

- 모달 창이 열고 닫힐 때 **애니메이션 효과를 부여하여 자칫 딱딱해 보일 수 있는 홈페이지에 동적인 효과를 주었다.** <br/>
  
- 카카오의 REST API를 이용하여 소셜 로그인을 진행하였다. 선택지는 두가지였는데, 나는 두번째 방식을 채택했다.<br/>
  1.카카오로부터 인가코드만 받아 서버로 넘기기<br/>
  **2.카카오로부터 인가코드와 엑세스토큰까지 받아서 서버로 넘기기**<br/>

- 로그인 상태에 따라 로그인 ↔ 로그아웃 버튼이 변화하게끔 구현하였다.<br/>
  로그아웃 방식은 클라이언트 단에서 localStorage에 저장된 token을 삭제하는 방식으로 구현하였다. (``removeItem``)
  
- 각 기능에 대한 자세한 내용을 아래에 작성해 두었다. 


### **소셜 로그인 모달 창 동적 애니메이션 효과 부여**
  동적으로 애니메이션을 적용하기 위해 props를 활용함.
  애니메이션의 동작 상태를 boolean  타입으로 state에 저장하고,
  props로 넘겨 받은 state의 값에 따라 서로 다른 애니메이션이 동작하게 구현함.
```javascript
const LoginContent = styled.div`
  <생략>
  animation: ${props =>
    props.animation
      ? 'scale-in-ver-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both'
      : 'scale-out-ver-top 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'};
```
  모달 창이 닫힐 때 애니메이션이 동작한 후 모달 창이 닫혀야 하므로 ```setTimeout()```을 이용해서   ```setLoginIsOpen(!loginIsOpen)```가 0.3초 뒤에 동작하게 구현. 
```javascript
  const clickModalOutside = event => {
    if (loginIsOpen && !modalRef.current.contains(event.target)) {
      setChangeAnimation(false);
      setTimeout(() => {
        setLoginIsOpen(!loginIsOpen);
      }, 300);
    }
  };
```

### **카카오에서 인가 코드 및 인가 토큰 받아서 서버에 전달하는 과정**

  1. kakao developers에서 "내 어플리케이션"을 생성하고 "앱 키"를 받는다.
  2. "플랫폼" 메뉴에서 "웹 플랫폼 등록"을 한다. ( 도메인 주소가 없고 현재 개발 단계 이므로 ```http://localhost:3000```으로 설정)
  4. Redirect URI를 등록한다. REST API키를 이용해서 카카오에 ‘인가 코드’를 받는 callback 주소를 입력한다.
      (해당 부분은 백엔드분과 상의하여 결정한다. ```http://localhost:3000/signin/kakao```)
  5. 인가를 위해 필요한 앱키와 리다이렉트될 uri 및 보안키는 환경 변수로 설정하여 OAuth.js 파일에 import한다.
  6. 인가 코드를 요청하는 url에 내가 가진 rest api key와 redirect uri를 넣어 카카오에서 인가 코드를 받아 온다.
     (```https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}```)
  7. 받아온 인가 코드를 이용해 Access Token 발급 받는다. 
  8. 발급 받은 엑세스 토큰을 서버에 넘기고 토큰을 받는다.
  9. 소셜 로그인을 시도하는 동안에는 로딩 페이지를 보여준다.
  
```javascript

const KakaoLogin = () => {
  const location = useLocation();

  const code = qs.parse(location.search, { ignoreQueryPrefix: true }).code;

  const navigate = useNavigate();

  const [token, setToken] = useRecoilState(tokenState);

  const postKaKaoToken = async () => {
  //카카오로부터 Access Token 받아오기
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
      
   // 받은 Access Token 서버에 넘기기
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

```

### **로그인 상태에 따른 로그인 ↔ 로그아웃 버튼 변화**
- 서버로 부터 받은 토큰을 localStorage에 저장하여 저장 유,무에 따라 로그인, 로그아웃 버튼이 바뀌게 구현하였다. 
- 해당 기능을 구현하던 중 새로 고침을 해야만 Navigation bar가 재 렌더링되면서 로그인 ↔ 로그아웃 버튼이 변한다는 것을 인지했다.<br/>
  이를 개선하기 위해 recoil이라는 상태 관리 라이브러리를 이용해 서버로 부터 받은 토큰을 전역에서 관리하는 방식으로 바꿔 해당 기능을 구현할 수 있었다. 
  
```javascript

//Navigation.js

  const [token, setToken] = useRecoilState(tokenState);

  const handleLogout = () => {
    localStorage.removeItem('morganToken');
    setToken('');
  };
  
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
```
<br/>

**위에서 설명한 로그인을 위한 모달창 열기부터 소셜 로그인을 진행하는 과정을 보여주는 짧은 영상을 준비 했습니다.**<br/>
**(로그인 시도 중 보이는 로딩 페이지까지만 녹화하였습니다.)**

![kakao_social_login](https://user-images.githubusercontent.com/100888031/184578797-24ec94dd-3718-443f-8b23-d2e8a49cde73.gif)

</br>

### 🔆Detail (이후경)

- serch 페이지에서 자신이 선택한 식장정보의 디테일 정보(메뉴 사진(캐러셀), 매장명, 매장 위치, 대표메뉴, 가격정보등을) 보여주고, 선택한 음시점의 날짜와 시간 예약자명 인원수와 특이사항을 기재해 예약할 수 있는 페이지이다. 
![bobmorgan-01](https://user-images.githubusercontent.com/93850460/185525595-54bcbc30-a197-428a-9827-3240236e2ca0.gif)

#### 매장 음식 사진 캐러셀  slick-slider : https://react-slick.neostack.com 사용해서 기술 구현

DetailCarousel.js 
```javascript
import React from 'react';
import * as S from './DetailCarousel.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DetailCarousel = ({ carouselImage }) => {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    pauseOnHover: false,
  };

  return (
    <S.Container>
      <S.StyledSlider {...settings}>
        {carouselImage.map(item => {
          return (
            <div key={item.id}>
              <S.ImageContainer>
                <S.Image src={item.url} />
              </S.ImageContainer>
            </div>
          );
        })}
      </S.StyledSlider>
    </S.Container>
  );
};

```
구현하고자 하는 캐러셀 옵션을 settings 변수로 선언하여 사용하였다. 

#### 예약기능

```javascript
import React, { useEffect, useState, Space } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { TimePicker, InputNumber, Input, DatePicker } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { tokenState } from '../../components/SocialLogin/GlobalState';
import { useRecoilState } from 'recoil';

import moment from 'moment';
import * as S from './ReservationInfo.styles';
import 'antd/dist/antd.css';

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
 
  const onChangeTime = (time, timeString) => {
    console.log(time, timeString);
    setReservationTime(timeString);
  };


  const reservationUSer = value => {
    setUserCount(value);
  };

  
  const onChangeRequest = e => {
    setUserRequest(e.target.value);
  };
  
  const onChangeUserName = e => {
    setUserName(e.target.value);
  };
  
  const submit = () => {
    fetch(`http://10.58.3.127:8000/reservations/${params.id}`, {
      method: 'POST',
      headers: {
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

```
antDesign을 사용하였기 때문에, antdesign의 공식 사이트에서 제공하는 옵션에 대해 보고 내가 원하는 형태를 선택하였고, nesting을 사용하여 상세한 디자인을 변경하였다. 
각각 input에 기입되는 정보들은 useState를 사용하여 관리하였다. 

submit 버튼 클릭시, ``` fetch(`http://10.58.3.127:8000/reservations/${params.id}```를 사용하여 해당 매장에 맞는 예약 정보가 POST방식으로 저장된다. 
예약이 성공하면 예약 성공 alert창을 띄워 사용자에게 알려주었다.

####  매장 상세 정보 (카카오 지도 API)

![bobmorgan-2](https://user-images.githubusercontent.com/93850460/185530249-4cc1a7ff-705b-4cb9-bed1-d055dd6be5f0.gif)
- 매장 정보중 매장의 위치는 카카오 지도 API를 사용하였다. 구글지도나 네이버등 다른 지도 API가 있지만 소셜 로그인 시 카카오를 사용하기로 했으므로, 동일하게 카카오 지도 API를 사용하였다.

```javascript
/*global kakao*/
import React, { useEffect, useRef } from 'react';
import * as S from './Map.styles';
const Location = ({ detailInfo }) => {
  const { place_latitude, place_longitude } = detailInfo;
  const mapId = useRef();

  useEffect(() => {
    let options = {
      center: new kakao.maps.LatLng(
        Number(place_latitude),
        Number(place_longitude)
      ),
      level: 3,
    };

    let map = new kakao.maps.Map(mapId.current, options);
    let markerPosition = new kakao.maps.LatLng(
      Number(place_latitude),
      Number(place_longitude)
    );
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, [place_latitude, place_longitude]);

  return (
    <div>
      <S.Map ref={mapId} />
    </div>
  );
};

export default Location;
```
미리 입력시켜둔 매장위치의 위도 경도값을 받아와 화면에 표시되게 하였다 

❗️주의 </br>
마냥 쉽게 생각했는데, 카카오 지도를 사용하기 위해서는 ```<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 사용하세요&libraries=services"></script> ``` 이와 같이 발급받은 APP KEY를 사용해야 한다. 하지만 이 부분은 소중한 개인정보 함부로 유출되면 안되는 영역임으로 .env를 따로 만들어 개인정보를 보호하였다. 

```javascript
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { API } from '../../config';
import Carousel from './DetailCarousel';
import Review from './Review';
import Map from './Map';
import ReservatonInfo from './ReservationInfo';

import * as S from './Detail.styles';
const Detail = () => {
  const [isScroll, isSetScroll] = useState(false);
  const [detailInfo, setDetailInfo] = useState({});

  const detailRef = useRef(null);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`http://10.58.3.127:8000/places/${params.id}`)
      // fetch(`/data/detail.json`)
      .then(res => res.json())
      .then(detailInfo => {
        setDetailInfo(detailInfo.results);
      });
  }, [params]);

  useEffect(() => {
    window.addEventListener('scroll', scrollButtonView);
    return () => {
      window.removeEventListener('scroll', scrollButtonView);
    };
  }, []);
  const goTopScroll = () => {
    detailRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const goToMain = () => {
    navigate('/');
  };
  const scrollButtonView = () => {
    if (window.scrollY >= 120) {
      isSetScroll(true);
    } else {
      isSetScroll(false);
    }
  };

  const isDataEmpty = Object.keys(detailInfo).length === 0;
  if (isDataEmpty) return <>Loading,...</>;

  const STORE_INFO = [
    {
      id: 1,
      title: '주소',
      result: detailInfo.place_address,
    },
    {
      id: 2,
      title: '영업 시간',
      result: detailInfo.place_opening_hours,
    },
    {
      id: 3,
      title: '대표 메뉴',
      result: detailInfo.menus[0].name,
    },
  ];

  return (
    <S.Detail ref={detailRef}>
      <S.CarouselSection />
      <Carousel carouselImage={detailInfo.place_images} />
      <S.CarouselSection />
      <S.ReservationSection>
        <ReservatonInfo
          placeName={detailInfo.place_name}
          placeRegion={detailInfo.place_region}
        />
      </S.ReservationSection>
      <S.Wrapper>
        <S.Container>
          {isScroll && (
            <S.MoveTopButton
              src="/images/buttonImage/imgTopBtn.png"
              alt="화면상단이동버튼"
              onClick={() => {
                goTopScroll();
              }}
            />
          )}

          <S.Header>
            <S.HeaderTop>
              <S.Region>{detailInfo.place_region} </S.Region>
            </S.HeaderTop>
            <S.HeaderTitle>{detailInfo.place_name}</S.HeaderTitle>
            <S.HeaderDescription>
              {detailInfo.place_description}
            </S.HeaderDescription>
          </S.Header>
          <S.MenuInfo>
            <S.ContentsTitle>메뉴 정보</S.ContentsTitle>
            <S.MenuContents>
              <S.MenuImage
                src={detailInfo.place_images[0].url}
                alt={detailInfo.place_name}
              />
              <S.Menulist>
                <S.MenuTitle>메뉴 이름 및 가격 </S.MenuTitle>
                {detailInfo.menus.map(menuInfo => {
                  return (
                    <S.Menu key={menuInfo.id}>
                      <S.MenuName> {menuInfo.name}</S.MenuName>
                      <S.MenuPrice>{menuInfo.price}원</S.MenuPrice>
                    </S.Menu>
                  );
                })}
              </S.Menulist>
            </S.MenuContents>
          </S.MenuInfo>

          <S.Contents>
            <S.ContentsTitle>가게 정보</S.ContentsTitle>
            <S.MapSection>
              <S.Map>
                <Map detailInfo={detailInfo} />
              </S.Map>
              <S.goToMapButton>
                <S.ButtonImage
                  src="/images/icon/location.png"
                  alt="지도 아이콘"
                />
                지도보기
              </S.goToMapButton>
            </S.MapSection>
            {STORE_INFO.map(storeInfo => {
              return (
                <S.StoreInfo key={storeInfo.id}>
                  <S.StoreInfoTitle>{storeInfo.title}</S.StoreInfoTitle>
                  <S.StoreInfoContents>{storeInfo.result}</S.StoreInfoContents>
                </S.StoreInfo>
              );
            })}

            <S.StoreInfo>
              <S.StoreInfoTitle>주소</S.StoreInfoTitle>
              <S.StoreInfoContents>
                {detailInfo.place_address}
              </S.StoreInfoContents>
            </S.StoreInfo>
          </S.Contents>
          <S.ReviewSection>
            <Review />
          </S.ReviewSection>
        </S.Container>
      </S.Wrapper>
      <S.DetailFooter>
        <S.FooterContents>
          <S.FooterLogo
            src="/images/logo/bobMorgan-logo.png"
            alt="BobMorgan Logo"
            onClick={goToMain}
          />
          <S.ListMoveButton>
            {detailInfo.place_region} 맛집 더 보기
          </S.ListMoveButton>
        </S.FooterContents>
      </S.DetailFooter>
    </S.Detail>
  );
};
export default Detail;
```
상세 정보 표기시, 같은 형식으로 반복되는 부분은 map함수를 사용하여 중복되는 코드를 줄이고자 하였다.
</br>
