import { useState } from 'react';
import { Modifiers } from 'react-day-picker';
import { parse, format } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@redux/hooks';
import { appointmentApi } from 'services/BookAppointmetService';
import { zoomLink } from '@constants/other';

interface DateObject {
  appointmentTimeRange: string;
  date: Date;
  doctor: string;
  specialization: number;
}

const useAppointmentBookFormHook = () => {
  const [selectedDate, setSelectedDate] = useState<Date | string>();
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [createAppointment] = appointmentApi.useCreateAppointmentMutation();
  const doctorData = useAppSelector((state) => state.doctorReducer);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { id: patientId } = useParams();

  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    };

    const formattedDate = date.toLocaleDateString('en-US', options);

    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    return formattedDate.replace(',' + weekday, '').trim() + ', ' + weekday;
  }

  const handleCalendarDayClick = (day: Date, modifiers: Modifiers) => {
    if (modifiers.disabled) {
      return;
    }
    const appointmentDate = formatDate(day);
    setSelectedDate(day);
    setFormattedDate(appointmentDate);
  };

  const onSubmit = async (data: DateObject) => {
    const [startTime, endTime] = data.appointmentTimeRange.split('-');


    console.log(`data`,data)
    const start = parse(
      `${format(data.date, 'yyyy-MM-dd')} ${startTime.trim()}`,
      'yyyy-MM-dd hh:mm aa',
      new Date()
    );
    const end = parse(
      `${format(data.date, 'yyyy-MM-dd')} ${endTime.trim()}`,
      'yyyy-MM-dd hh:mm aa',
      new Date()
    );

    const appointmentInfo = {
      localDoctorId: Number(doctorData.id),
      remoteDoctorId: Number(data?.doctor),
      patientId: Number(patientId),
      zoomLink: zoomLink,
      endTime: end.toISOString(),
      startTime: start.toISOString(),
    };

    await createAppointment(appointmentInfo);

    toast.success(t('BookAppointment.appointmentCreated'), {
      position: toast.POSITION.TOP_CENTER,
    });
    setTimeout(() => {
      navigate(`/patient/${patientId}`);
    }, 2000);
  };

  return {
    selectedDate,
    setSelectedDate,
    formattedDate,
    setFormattedDate,
    handleCalendarDayClick,
    onSubmit,
  };
};

export default useAppointmentBookFormHook;