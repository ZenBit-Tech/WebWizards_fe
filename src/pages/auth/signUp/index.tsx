import React from 'react';

import Logo from '@components/Logo';
import SignUpForm from '@components/Auth/SignUpForm';
import LogoutModal from '@components/Modal';
import { useTranslation } from 'react-i18next';

const SignUp = () => {

  const { t } = useTranslation();
  return (
    <>
      <Logo />
      {/* test modal - delete later */}
      <LogoutModal title={t("Auth.logoutText").toString()} confirmText={t("Auth.confirm").toString()}  cancelTest={t("Auth.cancel").toString()} />
      <SignUpForm/>
    </>
  );
};

export default SignUp;
