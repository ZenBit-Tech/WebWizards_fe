import { InputGroup, Title, TitleText } from 'components/RegistrationForm2/style';
import { useTranslation } from 'react-i18next';

export const TitleComponent:React.FC = ():JSX.Element => {
  const { t } = useTranslation();
  return (
    <InputGroup>
      <Title>{t('RegForm2.title')}</Title>
      <TitleText>{t('RegForm2.remark')}</TitleText>
      <TitleText>{t('RegForm2.remark2')}</TitleText>
    </InputGroup>
  );
};
