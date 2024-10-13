export type InputType =
  | "text"
  | "password"
  | "email"
  | "url"
  | "number"
  | "tel"
  | "search"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "color"
  | "file";

export interface CustomInputProps {
  label?: string;
  htmlFor?: string;
  type?: InputType;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string | undefined;
  rightIcon?: React.ReactNode | undefined;
  error?: boolean; // Indicates if an error display is to be set
  styleType?: "no-border" | "bordered"; // Indicates the style type of the component
  onClear?: () => void; // Called when clear icon is clicked
  errorMessage?: string | undefined; // Error message to be displayed
  suffixLabel?: string | undefined; // Suffix label to be shown after the input
  style?: React.CSSProperties | undefined;
  placeholder?: string | undefined; // Placeholder text for the input
  id?: string | undefined;
  "data-testid"?: string | undefined;
}
