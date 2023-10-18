import { atom } from 'recoil';

const userState = atom({
  key: 'userState',
  default: JSON.parse(localStorage.getItem('user')) || { isLoggedIn: false },
});

export default userState;
