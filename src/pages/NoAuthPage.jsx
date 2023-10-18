import { React } from 'react';
import Layout from '../components/Layout';

export default function NoAuthPage() {
  return (
    <Layout>
      <h1>페이지에 접근할 권한이 없습니다.</h1>
    </Layout>
  );
}
