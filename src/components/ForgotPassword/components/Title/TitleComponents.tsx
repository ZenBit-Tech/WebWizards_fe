import { InputGroup, Title, TitleText } from 'components/ForgotPassword/style';
import { useTranslation } from 'react-i18next';

export const TitleComponent: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <InputGroup>
      <Title>{t('ForgotPassword.title')}</Title>
      <TitleText>{t('ForgotPassword.remark')}</TitleText>
      <TitleText>{t('ForgotPassword.remark2')}</TitleText>
    </InputGroup>
  );
};
