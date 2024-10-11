export type ButtonStyleType = "primary" | "secondary" | "link";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: ButtonStyleType | undefined;
  className?: string | undefined;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  id?: string | undefined;
  "data-testid"?: string | undefined;
  style?: React.CSSProperties | undefined;
}
