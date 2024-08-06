export interface SelectInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  showError: boolean;
}
