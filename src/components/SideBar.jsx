import { React } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import userState from '../userState';
import '../styles/SideBar.scss';

export default function SideBar() {
  const navigate = useNavigate();
  const [recoilStateValue, setRecoilStateValue] = useRecoilState(userState);

  function logoutHandler() {
    setRecoilStateValue({
      isLoggedIn: false,
      auth: '',
    });
    navigate('/login');
  }

  const auth = recoilStateValue.auth;

  return (
    <div className="side-bar">
      <button onClick={logoutHandler}>로그아웃</button>
      {auth === 'manager' && <Link to="/manage">Manage</Link>}
      {auth === 'admin' ? (
        <Link to="/admin">Admin</Link>
      ) : (
        <Link to="/my-page">My page</Link>
      )}
      <Link to="/setting">Setting</Link>
    </div>
  );
}
