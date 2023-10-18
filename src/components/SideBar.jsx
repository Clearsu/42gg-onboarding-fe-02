import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import userState from '../userState';
import '../styles/SideBar.scss';

export default function SideBar() {
  const navigate = useNavigate();
  const setRecoilStateValue = useSetRecoilState(userState);

  function logoutHandler() {
    localStorage.removeItem('user');
    setRecoilStateValue({
      isLoggedIn: false,
      auth: '',
    });
    navigate('/login');
  }

  return (
    <div className="side-bar">
      <button onClick={logoutHandler}>로그아웃</button>
      <a href="/my-page">My page</a>
      <a href="/setting">Setting</a>
    </div>
  );
}
