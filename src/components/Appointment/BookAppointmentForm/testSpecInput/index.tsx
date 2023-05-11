import { useForm, Controller } from "react-hook-form";
import Select from "react-select";


const specializations = [
  { value: 1, label: 'Anesthesiology' },
  { value: 2, label: 'Cardiology' },
];

const TestInput = ({ control }) => {

    const handleInputChange = (selectedOption) => {
        console.log(selectedOption);
      };
  return (


<Controller
name="select"
control={control}
render={({ field }) => <Select 
  {...field} 
  options={specializations}
  onChange={handleInputChange}
/>}
/>
  );
};

export default TestInput;
