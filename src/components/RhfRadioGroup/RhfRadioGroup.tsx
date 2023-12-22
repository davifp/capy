import React from "react";
import {
  RadioGroupProps,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";
import { FieldPath, FieldValues, useController } from "react-hook-form";
import { RhfRadioGroupProps } from "./RhfRadioGroup.types";

const RhfRadioGroup = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  name,
  label,
  options,
  control,
  defaultValue,
  error,
  disabled,
  ...rest
}: RadioGroupProps & RhfRadioGroupProps<TFieldValues, TName>) => {
  const {
    field: { onChange, value, ref, ...props },
  } = useController({ control, name, defaultValue });

  return (
    <FormControl error={!!error}>
      <FormLabel sx={{ mb: 1 }}>{label}</FormLabel>
      <RadioGroup
        sx={{ pl: 1 }}
        value={value}
        onChange={onChange}
        {...props}
        {...rest}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.label}
            value={option.value}
            control={<Radio inputRef={ref} />}
            label={option.label}
            disabled={option?.disabled || disabled}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

export default RhfRadioGroup;
