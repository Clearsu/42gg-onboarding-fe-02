import { React } from 'react';
import { useRecoilValue } from 'recoil';
import userState from '../userState';
import Layout from '../components/Layout';

export default function Home() {
  const userStateValue = useRecoilValue(userState);

  return (
    <Layout>
      <h1>
        Welcome {userStateValue.username}
        {userStateValue.auth !== 'normal' && ', ' + userStateValue.auth}!
      </h1>
    </Layout>
  );
}
