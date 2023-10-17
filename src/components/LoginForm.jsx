import { React } from 'react';
import '../styles/LoginForm.scss';

export default function LoginForm() {
  return (
    <form className="login-form">
      <div className="input-group">
        <label>ID</label>
        <input type="text" placeholder="아이디를 입력하세요." />
      </div>
      <div className="input-group">
        <label>PW</label>
        <input type="password" placeholder="비밀번호를 입력하세요." />
      </div>
    </form>
  );
}
