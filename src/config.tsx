const BASE_URL = 'http://192.168.0.12:8080';

export const API = {
  sendKakaoToken: `${BASE_URL}/users/signin/kakao`,
  detail: `${BASE_URL}/detail`,
  searchList: `${BASE_URL}/places/search`,
  places: `${BASE_URL}/places`,
};
