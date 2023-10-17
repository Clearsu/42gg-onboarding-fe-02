import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.scss';

export default function LoginForm() {
  const navigate = useNavigate();

  function loginHandler(e) {
    e.preventDefault();
    navigate('/home');
  }

  return (
    <form className="login-form">
      <div className="inputs-wrapper">
        <div className="input-group">
          <label>ID</label>
          <input type="text" placeholder="아이디를 입력하세요." />
        </div>
        <div className="input-group">
          <label>PW</label>
          <input type="password" placeholder="비밀번호를 입력하세요." />
        </div>
      </div>
      <button type="submit" className="login-button" onClick={loginHandler}>
        로그인
      </button>
    </form>
  );
}
