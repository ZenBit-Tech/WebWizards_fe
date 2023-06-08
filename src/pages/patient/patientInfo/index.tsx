import PatientCardInfo from '@components/Patient/PatientInfo';
import WeeklyCalendar from '@components/WeeklyCalendar';
import BackToDashboard from '@components/BackToDashboardLink';
import { LinkContainer } from '@components/Patient/styles';
import ZoomComponent from '@components/Zoom';
import Notes from '@components/Notes';
import GoBackLink from '@components/GoBackLink';

const PatientInfo = () => {
  return (
    <>
      <LinkContainer>
        <BackToDashboard />
        <ZoomComponent />
      </LinkContainer>
      <GoBackLink />
      <PatientCardInfo />
      <WeeklyCalendar />
      <Notes />
    </>
  );
};

export default PatientInfo;
