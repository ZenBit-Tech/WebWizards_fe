import React from 'react';

import Logo from '@components/Logo';
import SignUpForm from '@components/Auth/SignUpForm';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  return (
    <>
      <Logo />
      <SignUpForm/>
    </>
  );
};

export default SignUp;
