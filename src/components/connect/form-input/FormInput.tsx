import { FC } from "react";
import { Control, FieldValues } from "react-hook-form";
import Input from "../../ui/input/Input";
import "./FormInput.scss";

type FormInputType = {
  type: string;
  label?: string;
  defaultValue?: string;
  control: Control<FieldValues, any>;
  placeholder?: string;
  rules?: Object;
};

const FormInput: FC<FormInputType> = ({
  type,
  label,
  defaultValue,
  control,
  placeholder,
  rules,
}) => {
  return (
    <label htmlFor={type}>
      {label}
      <Input
        name={type}
        defaultValue={defaultValue}
        control={control}
        placeholder={placeholder}
        rules={rules}
      />
    </label>
  );
};

export default FormInput;
