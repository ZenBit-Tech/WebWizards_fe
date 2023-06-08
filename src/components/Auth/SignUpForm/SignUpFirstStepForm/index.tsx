import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, InputAdornment } from '@mui/material';
import Input from '@components/Input';
import {
  Container,
  FormContainer,
  InputContainer,
  InputTitle,
  LinkContainer,
  Link,
  SendButton,
  Text,
  Title,
  Form,
  PasswordImg,
} from '@components/general/styles';
import visible from '@assets/auth/eye.svg';
import visibleOff from '@assets/auth/eyeSlash.svg';
import {
  confirmPassword,
  email,
  end,
  firstName,
  lastName,
  password,
} from '@constants/auth';
import { PATH } from '@router/index';
import AuthGoogleButton from '@components/Auth/AuthGoogleButton';
import SignUpSecondForm from '@components/Auth/SignUpForm/SignUpSecondStepForm';
import { ToastContainer } from 'react-toastify';
import useSignUpFirstStepHook from 'hooks/useSignUpFirstStep.hook';

import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { PADDING } from '@constants/other';


function SignUpFirstForm() {

    
    const onSuccess = async response => {
        try {
          const googleUser = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`
          );
    

          console.log(`googleUser`, googleUser)
          const { email, name } = googleUser.data;
          const accessToken = response.access_token;
          console.log(`accessToken`, accessToken)
    
        } catch (error) {
        }
      };
    
      const googleLogin = useGoogleLogin({
        onSuccess,
        // onError: error => toast.error(i18n.t('t_login_2')` - ${error}`),
      });

  const { t } = useTranslation();
  const tWithDefault = (key: string) => {
    const translation = t(key);
    return translation || '';
  };

  const {
    isFirstStep,
    isValid,
    onSubmit,
    control,
    handleSubmit,
    errors,
    handleClickShowConfirmPassword,
    handleClickShowPassword,
    showConfirmPassword,
    showPassword,
  } = useSignUpFirstStepHook();

  return (
    <>
  <button type="button" onClick={googleLogin} style={{backgroundColor:"blue", color:"white", height:"40px", padding:"10px"}}>
                  
                  <span>GOOGLE 🚀{' '}</span>
                </button>
      {isFirstStep ? (
        <Container>
          <FormContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Title>{t('Auth.registrationTitle')}</Title>
              <Text>{t('Auth.registrationText')}</Text>
              <InputContainer>
                <InputTitle>{t('Auth.firstName')}</InputTitle>
                <Input
                  control={control}
                  fullWidth
                  name={firstName}
                  placeholder={tWithDefault('Auth.enterFirstName')}
                  helperText={errors.firstName?.message}
                  error={Boolean(errors?.firstName)}
                  required={true}
                />
              </InputContainer>
              <InputContainer>
                <InputTitle>{t('Auth.lastName')}</InputTitle>
                <Input
                  control={control}
                  fullWidth
                  name={lastName}
                  placeholder={tWithDefault('Auth.enterLastName')}
                  helperText={errors.lastName?.message}
                  error={Boolean(errors?.lastName)}
                  required={true}
                />
              </InputContainer>
              <InputContainer>
                <InputTitle>{t('Auth.email')}</InputTitle>
                <Input
                  control={control}
                  fullWidth
                  name={email}
                  placeholder={tWithDefault('Auth.enterEmail')}
                  helperText={errors.email?.message}
                  error={Boolean(errors?.email)}
                  required={true}
                />
              </InputContainer>
              <InputContainer>
                <InputTitle>{t('Auth.createPassword')}</InputTitle>
                <Input
                  control={control}
                  fullWidth
                  name={password}
                  type={showPassword ? 'text' : 'password'}
                  placeholder={tWithDefault('Auth.enterPassword')}
                  helperText={errors.password?.message}
                  error={Boolean(errors?.password)}
                  required={true}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={handleClickShowPassword}>
                        <InputAdornment position={end}>
                          {
                            <PasswordImg
                              src={showPassword ? visible : visibleOff}
                            />
                          }
                        </InputAdornment>
                      </IconButton>
                    ),
                  }}
                />
              </InputContainer>
              <InputContainer>
                <InputTitle>{t('Auth.confirmPassword')}</InputTitle>
                <Input
                  control={control}
                  fullWidth
                  name={confirmPassword}
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder={tWithDefault('Auth.enterConfirmPassword')}
                  helperText={errors.confirmPassword?.message}
                  error={Boolean(errors?.confirmPassword)}
                  required={true}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={handleClickShowConfirmPassword}>
                        <InputAdornment position={end}>
                          {
                            <PasswordImg
                              src={showConfirmPassword ? visible : visibleOff}
                            />
                          }
                        </InputAdornment>
                      </IconButton>
                    ),
                  }}
                />
              </InputContainer>
              <AuthGoogleButton />
              <SendButton
                disabled={!isValid}
                type="submit"
                value={tWithDefault('Auth.continue')}
              />
              <LinkContainer>
                {t('Auth.alreadyExistText')}
                <Link to={PATH.LOGIN}>{t('Auth.click')}</Link>
              </LinkContainer>
            </Form>
          </FormContainer>
          <ToastContainer />
        </Container>
      ) : (
        <SignUpSecondForm />
      )}
    </>
  );
}

export default SignUpFirstForm;
