import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const userState = atom({
  key: 'userState',
  default: { isLoggedIn: false, auth: '' },
  effects_UNSTABLE: [persistAtom],
});

export default userState;
