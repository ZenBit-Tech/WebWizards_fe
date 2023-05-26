import React from 'react';
import { Route, Navigate, useLocation } from 'react-router';
import Spinner from '@components/Loaders/Spinner';
import { Stack } from '@mui/system';
import { authApi } from 'services/AuthService';
import cookie from 'utils/functions/cookies';
import LocalDoctorScheduler from '@components/Scheduler/LocalDoctorSceduler';
import { local } from '@constants/patient';
import { PATH } from '.';

interface ProtectedRoutesProps {
  children: any;
  allowedRoles: string[];
}
if (cookie.get('accessToken')) {
  sessionStorage.setItem('userStatus', 'loggedIn');
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRoutesProps) => {
  const isLoggedIn = sessionStorage.getItem('userStatus');
  const { data: doctor, isLoading } = authApi.useGetMeQuery({});
  const location = useLocation();
  const doctorRole = doctor?.role ? doctor?.role : '';

  if (isLoading) {
    return <Spinner />;
  }

  if (doctorRole === local && location.pathname === PATH.AVAILABILITY) {
    return <LocalDoctorScheduler />;
  }

  if (!isLoggedIn || !allowedRoles.includes(doctorRole)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
