import { ChangeEvent, FC } from 'react';
import {
  useController,
  Control,
  FieldError,
  RegisterOptions,
} from 'react-hook-form';

interface HookFormTextareaInputProps {
  name: string;
  control: Control<any>;
  defaultValue?: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
  className?: string;
  rules?: RegisterOptions;
  error?: FieldError;
  rows?: number;
  onChange?: (value: string) => void;
}

export const HookFormTextareaInput: FC<HookFormTextareaInputProps> = ({
  name,
  control,
  defaultValue = '',
  label,
  placeholder,
  disabled = false,
  className = '',
  rules = {},
  error,
  rows = 4,
  onChange,
}) => {
  const {
    field: { onChange: fieldOnChange, onBlur, value },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    fieldOnChange(inputValue);
    if (onChange) {
      onChange(inputValue);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <div>
          {error ? (
            <p className="text-xs mb-1 text-red-500">{error?.message}</p>
          ) : (
            <p className="text-xs mb-1 text-black">
              {label}
              {rules && Object.keys(rules).length > 0 && (
                <span className="text-red-500">*</span>
              )}
            </p>
          )}
        </div>
      )}
      <textarea
        rows={rows}
        onChange={handleChange}
        onBlur={onBlur}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full text-sm rounded-none outline-none p-3.5 border border-gray-300 text-black bg-white disabled:opacity-50 ${
          error ? '!border-red-500' : ''
        } ${className}`}
      />
    </div>
  );
};
