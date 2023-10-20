import { React } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { PropTypes } from 'prop-types';
import userState from '../userState';
import PageNotFound from '../pages/PageNotFound';

export default function ProtectedRoute({ normal, manager, admin }) {
  const userStateValue = useRecoilValue(userState);

  if (!userStateValue.isLoggedIn && normal) {
    return <Navigate to="/login" replace={true} />;
  }
  if (
    !userStateValue.isLoggedIn ||
    (userStateValue.auth === 'normal' && (admin || manager)) ||
    (userStateValue.auth === 'manager' && admin)
  ) {
    return <PageNotFound />;
  }
  return <Outlet />;
}

ProtectedRoute.propTypes = {
  normal: PropTypes.bool,
  manager: PropTypes.bool,
  admin: PropTypes.bool,
};
