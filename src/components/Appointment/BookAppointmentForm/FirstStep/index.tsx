import { useTranslation } from 'react-i18next';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import SpecializationInput from '@components/Appointment/SpecializationSelect';
import Calendar from '@components/Appointment/Calendar';
import AppointmentTime from '@components/Appointment/TimeSelect';
import { date } from '@constants/other';
import { InputProps } from '@components/Patient/Inputs/type';
import { ReactComponent as ArrowRight } from '@assets/arrowRight.svg';
import CancelBtn from '@components/Appointment/CancelBtn';
import {
  StepWrapper,
  Text,
  FormFooter,
  BntWrapper,
  StepBtn,
} from '@components/Appointment/BookAppointmentForm/styles';
import {
  CalendarWrapper,
  FormInfo,
  YouSelected,
  SelectedDayTime,
} from '@components/Appointment/BookAppointmentForm/FirstStep/styles';

interface Props {
  formattedDate: string;
  handleCalendarDayClick: (day: Date) => void;
  setFormattedDate: React.Dispatch<React.SetStateAction<string>>;
  formattedTime: string;
  setFormattedTime: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean;
  control: Control;
  errors: FieldErrors;
  setStep: React.Dispatch<React.SetStateAction<boolean>>;
  isDirty: boolean;
  setSpecialization: React.Dispatch<React.SetStateAction<number>>;
}


import MyForm from "@components/Appointment/TEST";

const FirstStepAppointment = ({
  formattedDate,
  setFormattedDate,
  handleCalendarDayClick,
  formattedTime,
  setFormattedTime,
  isValid,
  control,
  errors,
  setStep,
  isDirty,
  setSpecialization
}: InputProps & Props) => {
  const { t } = useTranslation();

  console.log(`isDirty`, isDirty);

  return (
    <>
    <MyForm/>
      <StepWrapper>
        <Text>{t('BookAppointment.stepOne')}</Text>
        <CancelBtn />
      </StepWrapper>
      <SpecializationInput control={control} errors={errors}
        setSpecialization= {setSpecialization}

      />
      <CalendarWrapper>
        <Controller
          control={control}
          name={date}
          render={({ field }) => (
            <Calendar
              onChange={(date: Date) => field.onChange(date)}
              value={field.value}
              onDayClick={handleCalendarDayClick}
              formattedDate={formattedDate}
              setFormattedDate={setFormattedDate}
            />
          )}
        />
      </CalendarWrapper>
      <AppointmentTime
          control={control}
          errors={errors}
          formattedTime={formattedTime}
          onChange={(value) => {
            setFormattedTime(value);
          }}
        />

      <FormFooter>
        <FormInfo>
          <YouSelected>{t('BookAppointment.youSelected')}</YouSelected>
          {formattedDate && (
            <SelectedDayTime>
              {t('BookAppointment.date')}
              <span>{formattedDate} </span>
              {formattedTime && <span>{formattedTime}</span>}
            </SelectedDayTime>
          )}
        </FormInfo>
        <BntWrapper>
          <StepBtn onClick={() => setStep(true)} disabled={!isValid}>
            {' '}
            {t('BookAppointment.nextStep')}
            <ArrowRight />
          </StepBtn>
        </BntWrapper>
      </FormFooter>
    </>
  );
};

export default FirstStepAppointment;
