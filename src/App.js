import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import PageNotFound from './pages/PageNotFound';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import ManagerPage from './pages/ManagerPage';
import NoAuthPage from './pages/NoAuthPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute normal />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/my-page" element={<MyPage />} />
        </Route>
        <Route element={<ProtectedRoute manager />}>
          <Route path="/manage" element={<ManagerPage />} />
        </Route>
        <Route element={<ProtectedRoute admin />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
        <Route path="/no-auth" element={<NoAuthPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
