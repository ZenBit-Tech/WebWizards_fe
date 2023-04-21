import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IconButton, InputAdornment } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '@components/Input';
import {
  AuthContainer,
  AuthForm,
  AuthInput,
  AuthInputTitle,
  AuthLinkContainer,
  AuthLink,
  AuthSendButton,
  AuthText,
  AuthTitle,
  Form,
  PasswordImg,
} from '@components/Auth/styles';
import { ISignUp } from '@components/Auth/type';
import visible from '@assets/auth/eye.svg';
import visibleOff from '@assets/auth/eyeSlash.svg';
import {
  confirmPassword,
  email,
  end,
  error,
  firstName,
  lastName,
  password,
} from '@constants/auth';
import signUpSchema from '@validation/auth.validate';
import {
  checkEmailQuery,
  signUpActions,
  signUpQuery,
} from '@redux/slices/auth/signUp';
import { PATH } from '@router/index';
import AuthGoogleButton from '@components/Auth/AuthGoogleButton';
import SignUpSecondForm from '@components/Auth/SignUpForm/SignUpSecondStepForm';
import { toast, ToastContainer } from 'react-toastify';
import { AppDispatch } from '@redux/store';

function SignUpFirstForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const [isFirstStep, setFirstStep] = useState<boolean>(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const { signUpFirstStepSchema } = signUpSchema();

  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<ISignUp>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    resolver: yupResolver(signUpFirstStepSchema),
  });
  useEffect(() => {
    register('password');
    register('confirmPassword');
  }, []);

  const onSubmit = (data: ISignUp) => {
    dispatch(checkEmailQuery(data)).then((res) => {
      if (error in res && res.error) {
        toast.error(
          `Sorry, user with email ${data.email} already exists! Please change the email for continue`,
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      } else {
        dispatch(signUpActions.setSignUpFirstStepData(data));
        setFirstStep(!isFirstStep);
      }
    });
  };

  return (
    <>
      {isFirstStep ? (
        <AuthContainer>
          <AuthForm>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <AuthTitle>{t('Auth.registrationTitle')}</AuthTitle>
              <AuthText>{t('Auth.registrationText')}</AuthText>
              <AuthInput>
                <AuthInputTitle>{t('Auth.firstName')}</AuthInputTitle>
                <Input
                  control={control}
                  fullWidth
                  name={firstName}
                  placeholder={t('Auth.enterFirstName') ?? ''}
                  helperText={errors.firstName?.message}
                  error={Boolean(errors?.firstName)}
                  required={true}
                />
              </AuthInput>
              <AuthInput>
                <AuthInputTitle>{t('Auth.lastName')}</AuthInputTitle>
                <Input
                  control={control}
                  fullWidth
                  name={lastName}
                  placeholder={t('Auth.enterLastName') ?? ''}
                  helperText={errors.lastName?.message}
                  error={Boolean(errors?.lastName)}
                  required={true}
                />
              </AuthInput>
              <AuthInput>
                <AuthInputTitle>{t('Auth.email')}</AuthInputTitle>
                <Input
                  control={control}
                  fullWidth
                  name={email}
                  placeholder={t('Auth.enterEmail') ?? ''}
                  helperText={errors.email?.message}
                  error={Boolean(errors?.email)}
                  required={true}
                />
              </AuthInput>
              <AuthInput>
                <AuthInputTitle>{t('Auth.createPassword')}</AuthInputTitle>
                <Input
                  control={control}
                  fullWidth
                  name={password}
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('Auth.enterPassword') ?? ''}
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
              </AuthInput>
              <AuthInput>
                <AuthInputTitle>{t('Auth.confirmPassword')}</AuthInputTitle>
                <Input
                  control={control}
                  fullWidth
                  name={confirmPassword}
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder={t('Auth.enterConfirmPassword') ?? ''}
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
              </AuthInput>
              <AuthGoogleButton />
              <AuthSendButton
                disabled={!isValid}
                type="submit"
                value={t('Auth.continue') ?? ''}
              />
              <AuthLinkContainer>
                {t('Auth.alreadyExistText')}
                <AuthLink to={PATH.LOGIN}>{t('Auth.click')}</AuthLink>
              </AuthLinkContainer>
            </Form>
          </AuthForm>
          <ToastContainer />
        </AuthContainer>
      ) : (
        <SignUpSecondForm />
      )}
    </>
  );
}

export default SignUpFirstForm;
