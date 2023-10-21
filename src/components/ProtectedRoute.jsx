import { React } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { PropTypes } from 'prop-types';
import userState from '../userState';
import PageNotFound from '../pages/PageNotFound';

export default function ProtectedRoute({ normalPage, managerPage, adminPage }) {
  const userStateValue = useRecoilValue(userState);

  if (!userStateValue.isLoggedIn && normalPage) {
    return <Navigate to="/login" replace={true} />;
  }
  if (
    !userStateValue.isLoggedIn ||
    (userStateValue.auth === 'normal' && (adminPage || managerPage)) ||
    (userStateValue.auth === 'manager' && adminPage)
  ) {
    return <PageNotFound />;
  }
  return <Outlet />;
}

ProtectedRoute.propTypes = {
  normalPage: PropTypes.bool,
  managerPage: PropTypes.bool,
  adminPage: PropTypes.bool,
};
