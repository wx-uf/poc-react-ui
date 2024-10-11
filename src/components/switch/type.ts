import { SwitchProps } from '@radix-ui/react-switch';

export type SwitchLabelPositon = 'left' | 'right';

export interface CustomSwitchProps extends SwitchProps {
  label?: string;
  labelPosition: SwitchLabelPositon;
  style?: React.CSSProperties | undefined;
  id?: string | undefined;
  'data-testid'?: string | undefined;
}
