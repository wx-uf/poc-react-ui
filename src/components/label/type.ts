import { LabelProps } from '@radix-ui/react-label';

export interface CustomLabelProps extends LabelProps {
  label: string;
  subLabel?: string | React.ReactNode;
  style?: React.CSSProperties | undefined;
  id?: string | undefined;
  'data-testid'?: string | undefined;
}
