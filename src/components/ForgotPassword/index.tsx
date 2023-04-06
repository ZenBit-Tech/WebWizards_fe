import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ForgotPasswordContainer,
  StyledButton,
  LinkContainer,
  StyledInput,
  StyledLabel,
  InputGroup,
  ErrorMessage
} from 'components/ForgotPassword/style';
import { TitleComponent } from './components/Title/TitleComponents';
import { IForgotPassword } from './types';

const ForgotPassword: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
  } = useForm<IForgotPassword>({
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <ForgotPasswordContainer onSubmit={handleSubmit(onSubmit)}>
      <TitleComponent />
      <InputGroup>
        <StyledLabel> {t('ForgotPassword.email_label')}</StyledLabel>
        <StyledInput
          type="email"
          {...register('email')}
          required
          placeholder={t('ForgotPassword.email_placeholder')!}
        />
      </InputGroup>
      <ErrorMessage>{"We cannot find your email*"}</ErrorMessage>
      <StyledButton type="submit">{t('ForgotPassword.submit')}</StyledButton>
      <LinkContainer to=" ">{t('ForgotPassword.back')}</LinkContainer>
    </ForgotPasswordContainer>
  );
};
export default ForgotPassword;
