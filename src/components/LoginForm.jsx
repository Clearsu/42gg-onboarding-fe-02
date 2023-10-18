import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import userState from '../userState';
import userInfo from '../userInfo';
import '../styles/LoginForm.scss';

export default function LoginForm() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isValidId, setIsValidId] = useState(true);
  const [isValidPw, setIsValidPw] = useState(true);
  const [userStateValue, setUserStateValue] = useRecoilState(userState);

  function idChangeHandler(event) {
    setId(event.target.value);
  }

  function pwChangeHandler(event) {
    setPw(event.target.value);
  }

  function loginHandler(event) {
    event.preventDefault();
    const user = userInfo.find((user) => {
      return id === user.id;
    });
    if (!user) {
      setIsValidId(false);
      return;
    }
    setIsValidId(true);
    if (pw != user.pw) {
      setIsValidPw(false);
      return;
    }
    setIsValidPw(true);
    const newUser = {
      auth: user.auth,
      isLoggedIn: true,
    };
    setUserStateValue(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  useEffect(() => {
    if (userStateValue.isLoggedIn) {
      navigate('/');
    }
  }, [userStateValue]);

  return (
    <div>
      <form className="login-form" onSubmit={loginHandler}>
        <div className="inputs-wrapper">
          <div className="input-group">
            ID
            <input
              id="userIdInput"
              type="text"
              placeholder="아이디를 입력하세요."
              onChange={idChangeHandler}
            />
          </div>
          <div className="input-group">
            PW
            <input
              id="userPwInput"
              type="password"
              placeholder="비밀번호를 입력하세요."
              onChange={pwChangeHandler}
            />
          </div>
        </div>
        <button type="submit" className="login-button">
          로그인
        </button>
      </form>
      <div className="error-message">
        {!isValidId && '존재하지 않는 ID입니다.'}
        {isValidId && !isValidPw && '비밀번호가 일치하지 않습니다.'}
      </div>
    </div>
  );
}
