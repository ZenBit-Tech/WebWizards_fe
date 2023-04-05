import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  roles,
  specializations,
  gender,
  country,
  city,
  timZones
} from 'components/RegistrationForm2/constants/reg_form2';
import { DoctorSubmitValue } from 'components/RegistrationForm2/types';
import { Options } from 'components/RegistrationForm2/components/Options/Options';
import { TitleComponent } from 'components/RegistrationForm2/components/Title/TitleComponents';
import {
  RegForm2Container,
  StyledSelect,
  InputGroup,
  StyledLabel,
  StyledInput,
  StyledButton,
  InputInlineContainer,
  InlineContainerRow,
  ErrorMessage,
  ButtonContainer,
  LinkContainer,
  SignUpContainer
} from 'components/RegistrationForm2/style';
import { validationSchema } from 'components/RegistrationForm2/validation';

const RegistrationForm2: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<DoctorSubmitValue>({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data: DoctorSubmitValue) => setTimeout(() => alert('Success'), 1000);
  return (
    <RegForm2Container onSubmit={handleSubmit(onSubmit)}>
      <TitleComponent />
      <InputGroup>
        <StyledLabel>{t('RegForm2.role')}</StyledLabel>
        <StyledSelect {...register('role')}>
          <Options title={t('RegForm2.placeholder_role')} options={roles} />
        </StyledSelect>
        <ErrorMessage>{errors.role?.message}</ErrorMessage>
      </InputGroup>
      <InputGroup>
        <StyledLabel>{t('RegForm2.specialization')}</StyledLabel>
        <StyledSelect {...register('specialization')}>
          <Options title={t('RegForm2.placeholder_specialization')} options={specializations} />
        </StyledSelect>
        <ErrorMessage>{errors.specialization?.message}</ErrorMessage>
      </InputGroup>
      <InputGroup>
        <StyledLabel>{t('RegForm2.gender')}</StyledLabel>
        <StyledSelect {...register('gender')}>
          <Options title={t('RegForm2.placeholder_gender')} options={gender} />
        </StyledSelect>
        <ErrorMessage>{errors.gender?.message}</ErrorMessage>
      </InputGroup>
      <InputGroup>
        <StyledLabel>{t('RegForm2.date_of_birth')}</StyledLabel>
        <StyledInput {...register('date_of_birth')} type="date" />
      </InputGroup>
      <ErrorMessage>{errors.date_of_birth?.message}</ErrorMessage>
      <InputInlineContainer>
        <InlineContainerRow>
          <InputGroup>
            <StyledLabel>{t('RegForm2.country')}</StyledLabel>
            <StyledSelect {...register('country')}>
              <Options title={t('RegForm2.placeholder_country')} options={country} />
            </StyledSelect>
            <ErrorMessage>{errors.country?.message}</ErrorMessage>
          </InputGroup>
        </InlineContainerRow>
        <InlineContainerRow>
          <StyledLabel>{t('RegForm2.city')}</StyledLabel>
          <StyledSelect {...register('city')}>
            <Options title={t('RegForm2.placeholder_country')} options={city} />
          </StyledSelect>
          <ErrorMessage>{errors.city?.message}</ErrorMessage>
        </InlineContainerRow>
      </InputInlineContainer>
      <InputGroup>
        <StyledLabel>{t('RegForm2.address')}</StyledLabel>
        <StyledInput
          {...register('address')}
          type="text"
          placeholder={t('RegForm2.placeholder_address')!}
        />
        <ErrorMessage>{errors.address?.message}</ErrorMessage>
      </InputGroup>
      <InputGroup>
        <StyledLabel>{t('RegForm2.time_zone')}</StyledLabel>
        <StyledSelect {...register('timezone')}>
          <Options title={t('RegForm2.placeholder_time_zone')} options={timZones} />
        </StyledSelect>
        <ErrorMessage>{errors.timezone?.message}</ErrorMessage>
      </InputGroup>
      <ButtonContainer>
        <StyledButton onClick={handleSubmit(onSubmit)} disabled={!isValid}>{t('RegForm2.sign_up')}</StyledButton>
      </ButtonContainer>
      <SignUpContainer>
        {t('RegForm2.isAccount')}
        <LinkContainer to="/form">{t('RegForm2.click_here')}</LinkContainer>
      </SignUpContainer>
    </RegForm2Container>
  );
};
export default RegistrationForm2;
