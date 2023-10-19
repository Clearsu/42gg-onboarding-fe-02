import { React } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { GrLogout, GrUserManager } from 'react-icons/gr';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { AiTwotoneSetting } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';
import userState from '../userState';
import '../styles/SideBar.scss';

export default function SideBar() {
  const navigate = useNavigate();
  const [recoilStateValue, setRecoilStateValue] = useRecoilState(userState);

  function logoutHandler() {
    setRecoilStateValue({
      username: '',
      isLoggedIn: false,
      auth: '',
    });
    navigate('/login');
  }

  const auth = recoilStateValue.auth;

  return (
    <div className="side-bar">
      <GrLogout
        className="side-bar-icon"
        size={35}
        onClick={logoutHandler}
        title="로그아웃"
      />
      {auth === 'manager' && (
        <Link to="/manage">
          <GrUserManager
            className="side-bar-icon"
            size={35}
            title="매니저 페이지"
          />
        </Link>
      )}
      {auth === 'admin' ? (
        <Link to="/admin">
          <RiAdminFill
            className="side-bar-icon"
            size={35}
            title="관리자 페이지"
          />
        </Link>
      ) : (
        <Link to="/my-page">
          <HiOutlineUserCircle
            className="side-bar-icon"
            size={35}
            title="마이 페이지"
          />
        </Link>
      )}
      <Link to="/setting">
        <AiTwotoneSetting className="side-bar-icon" size={35} title="세팅" />
      </Link>
    </div>
  );
}
