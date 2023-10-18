import { React, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import userState from './userState';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import PageNotFound from './pages/PageNotFound';

export default function App() {
  const [loggedInUser, setLoggedInUser] = useRecoilState(userState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      {loggedInUser.isLoggedIn && (
        <Route path="/my-page" element={<MyPage />} />
      )}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
