import React from 'react';
import PatientCardInfo from '@components/Patient/PatientInfo';
import WeeklyCalendar from '@components/WeeklyCalendar';
import ZoomComponent from '@components/Zoom';
import Notes from '@components/Notes';
import GoBackLink from '@components/GoBackLink';
import { Notification } from '@components/MeetNotification';

const PatientInfo = () => {
  return (
    <>
      <GoBackLink />
      <ZoomComponent />
      <Notification />
      <PatientCardInfo />
      <WeeklyCalendar />
      <Notes />
    </>
  );
};

export default PatientInfo;
