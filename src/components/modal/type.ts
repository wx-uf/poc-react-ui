import { DialogProps } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

export interface CustomModalProps extends DialogProps {
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
  style?: React.CSSProperties | undefined;
  id?: string | undefined;
  'data-testid'?: string | undefined;
}
