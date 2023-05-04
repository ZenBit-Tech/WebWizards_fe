import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowLeft } from '@assets/arrowLeft.svg';
import { PATH } from '@router/index';
import { BackToDashLink } from '@components/BackToDashBoardLink/styles';

function BackToDashboard() {
  const { t } = useTranslation();
  return (
    <BackToDashLink to={PATH.DASHBOARD}>
      <ArrowLeft />
      {t('Dashboard.backToDashboard')}
    </BackToDashLink>
  );
}
export default BackToDashboard;
