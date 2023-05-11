import { useState } from 'react';
import { DayClickEventHandler } from 'react-day-picker';
import { addMonths } from 'date-fns';
import { appointmentApi } from '../../services/BookAppointService';

// import { FreeSlots } from '@constants/mockData';
type Props = {
  onDayClick: (day: Date) => void | {};
};

const useAppointmentCalendarHook = ({ onDayClick }: Props) => {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date>(today);
  const nextMonth = addMonths(new Date(), 0);
  const [month, setMonth] = useState(nextMonth);
  const currentStyle = { backgroundColor: '#4579EE' };

  const [showCalendar, setShowCalendar] = useState(false);

  //   receive all slots by specializationID
  const id = 0;
  const { data: freeSlots } = appointmentApi.useGetSpecializationByIdQuery(
    Number(id)
  );

  console.log(`1 freeslots`,freeSlots);

  const TwoMothPeriod = [];
  // створити обєкт на два мясяці починаючи з поточного
  for (let i = 0; i < 2; i++) {
    const year = today.getFullYear();
    const month = today.getMonth() + i;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      date.setHours(0, 0, 0, 0);
      TwoMothPeriod.push(date);
    }
  }

  // Set all time to 0 and receive the number equivalent by getTime() function
  const formattedFreeSlots = freeSlots.map((item) => {
    const date = new Date(item.start);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  });

  const formattedTwoMothPeriod = TwoMothPeriod.map((date) => {
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  });

  //   створити масив всіх днів, які заброньовані
  const allBookedDates = formattedTwoMothPeriod.filter(
    (date) => !formattedFreeSlots.includes(date)
  );

  const formattedBookedDates = allBookedDates.map((date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    return new Date(year, month, day);
  });

  const isDisabled = (day: Date) => {
    return day > new Date();
  };

  const bookedDays = [
    ...formattedBookedDates,
    { before: new Date(), modifiers: { disabled: isDisabled } },
  ];

  console.log(`2 selectedDay`,selectedDay);
  //   const bookedDays = [
  //     new Date(2023, 4, 10),
  //     new Date(2023, 4, 12),
  //     new Date(2023, 5, 20),
  //     { before: new Date(), modifiers: { disabled: isDisabled } },
  //   ];

  //   фільтрую слоти по даті
  const selectedDate = new Date(selectedDay);
  const filteredSlots = freeSlots.filter((slot) => {
    const slotDate = new Date(slot.start);
    return (
      slotDate.getDate() === selectedDate.getDate() &&
      slotDate.getMonth() === selectedDate.getMonth() &&
      slotDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  console.log(`5selectedDate`,selectedDate)

  // трансофрмую в обєкт
  const transformedSlots = Object.entries(filteredSlots).map(
    ([key, value]) => ({
      doctor: value.doctor.id,
      start: value.start,
      end: value.end,
    })
  );

  console.log(`3transformedSlots`, transformedSlots);

  // перетворити слоти на формат для селект інпуту
  function formatTimeRange(startTime, endTime) {
    const start = new Date(startTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const end = new Date(endTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${start}-${end}`;
  }

  
  const formattedAppointments = transformedSlots.map((appointment, index) => ({
    value: Number(index + 1),
    label: formatTimeRange(appointment.start, appointment.end),
  }));

  console.log(`4 formattedAppointments`, formattedAppointments);

  // Todo: styles for days without empty slots. not sure if we need them at this moment, maybe in next sprint will be deleted or moved to styles
  const bookedStyle = { color: '#808080' };

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    onDayClick(day, modifiers);
  };

  const toggleState = (): void => {
    setShowCalendar(!showCalendar);
  };

  return {
    handleDayClick,
    toggleState,
    bookedDays,
    bookedStyle,
    selectedDay,
    setSelectedDay,
    month,
    setMonth,
    currentStyle,
    showCalendar,
    formattedAppointments,
  };
};

export default useAppointmentCalendarHook;
