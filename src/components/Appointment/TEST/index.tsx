import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const specializations = [
  { value: 1, label: 'Anesthesiology' },
  { value: 2, label: 'Cardiology' },
];

const MyForm = () => {
  const { control } = useForm();

  const handleSelectChange = (selectedValue) => {
    console.log('Вибране значення:', selectedValue);
  };

  return (
    <form>
      <Controller
        control={control}
        name="specialization"
        defaultValue={null}
        rules={{ required: 'Це поле обов\'язкове' }}
        render={({ field }) => (
          <select
            {...field}
            onChange={(e) => handleSelectChange(e.target.value)}
          >
            <option value="" disabled>
              Виберіть спеціалізацію
            </option>
            {specializations.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
