import { atom } from 'recoil';

//제네릭으로 타입 지정 : string 또는 null(토큰 값이 없는 경우)
export const tokenState = atom<string | null>({
  key: 'tokenState',
  default: '',
});
