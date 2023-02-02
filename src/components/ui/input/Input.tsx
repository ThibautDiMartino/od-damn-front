import { FC } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import "./Input.scss";

interface IInput {
  name: string;
  defaultValue?: string;
  control: Control<FieldValues, any>;
  rules?: Object;
  placeholder?: string;
  options?: any;
  children?: JSX.Element[];
}

const Input: FC<IInput> = ({
  name,
  defaultValue,
  control,
  rules,
  placeholder,
  options,
  children,
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <>
          <>
            <input
              className="custom-field"
              type={name}
              placeholder={placeholder ?? name}
              {...field}
              {...options}
            />
            {children}
          </>
          {error && <span className="form-error">{error?.message}</span>}
        </>
      )}
    />
  );
};

export default Input;
