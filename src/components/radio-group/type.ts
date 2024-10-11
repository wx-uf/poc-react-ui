import { RadioGroupProps } from '@radix-ui/react-radio-group';

export interface CustomRadioGroupProps extends RadioGroupProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  style?: React.CSSProperties | undefined;
  id?: string | undefined;
  'data-testid'?: string | undefined;
}
