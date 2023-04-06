import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { ForgotPasswordContainer, StyledButton } from 'components/ForgotPassword/style';
import { TitleComponent } from './components/Title/TitleComponents';

const ForgotPassword: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<any>({
    // resolver: yupResolver('')
  });
  const onSubmit = (data: any) => {};
  return (
    <ForgotPasswordContainer>
      <TitleComponent />
      <StyledButton onClick={handleSubmit(onSubmit)} disabled={!isValid}>
        {t('RegForm2.sign_up')}
      </StyledButton>
    </ForgotPasswordContainer>
  );
};
export default ForgotPassword;
