import { React, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import userState from '../userState';
// import NavBar from '../components/NavBar';
// import SideBar from '../components/SideBar';
import Layout from '../components/Layout';

export default function Home() {
  const navigate = useNavigate();
  const userStateValue = useRecoilValue(userState);

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user || !userStateValue.isLoggedIn) {
      navigate('/login');
    }
  }, []);

  return (
    <Layout>
      <h1>this is home</h1>
    </Layout>
    // <div>
    //   <NavBar />
    //   <div className="sidebar-homecontent-wrapper">
    //     <SideBar />
    //     <p>this is home</p>
    //   </div>
    // </div>
  );
}
