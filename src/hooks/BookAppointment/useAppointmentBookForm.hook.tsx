import { useState } from 'react';
import { Modifiers } from 'react-day-picker';
import { parse, format } from 'date-fns';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@redux/hooks';
import { bookAppointmentApi } from 'services/BookAppointmetService';
import { zoomLink, twoDigit, long, numeric, enUS } from '@constants/other';
import { fullYearFormat, fullDateTimeFormat } from '@constants/format';

interface DateObject {
  appointmentTimeRange: string;
  date: Date;
  doctor: string;
  specialization: number;
}

const useAppointmentBookFormHook = () => {
  const [selectedDate, setSelectedDate] = useState<Date | string>();
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [createAppointment] = bookAppointmentApi.useCreateAppointmentMutation();
  const doctorData = useAppSelector((state) => state.doctorReducer);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { id: patientId } = useParams();

  const options: Intl.DateTimeFormatOptions = {
    weekday: `${long}`,
    month: `${long}`,
    day: `${twoDigit}`,
    year: `${numeric}`,
  };

  function formatDate(date: Date): string {
    const formattedDate = date.toLocaleDateString(enUS, options);
    const weekday = date.toLocaleDateString(enUS, { weekday: long });
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

    const parseDateTime = (dateTimeString) => {
        const [time, period] = dateTimeString.split(' ');
        let [hours, minutes] = time.split(':');
  
        if (period === 'PM') {
          hours = (parseInt(hours, 10) + 12).toString();
        }
  
        const [year, month, day] = data.date
          .toISOString()
          .split('T')[0]
          .split('-');
        return new Date(
          Date.UTC(year, parseInt(month, 10) - 1, day, hours, minutes)
        );
      };
  
      const startTimeString = `${startTime.trim()} ${
        startTime.includes('PM') ? 'PM' : 'AM'
      }`;
      const endTimeString = `${endTime.trim()} ${
        endTime.includes('PM') ? 'PM' : 'AM'
      }`;
  
      const start = parseDateTime(startTimeString);
      const end = parseDateTime(endTimeString);
  


    
    const appointmentInfo = {
      localDoctorId: Number(doctorData.id),
      remoteDoctorId: Number(data?.doctor),
      patientId: Number(patientId),
      zoomLink: zoomLink,
      endTime: end.toISOString(),
      startTime: start.toISOString(),
    };

    console.log('data', data)
    console.log('start', start)
    console.log('end', end)
    console.log(`appointmentInfo`, appointmentInfo);
    
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
