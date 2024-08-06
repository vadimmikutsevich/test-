export interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  showError: boolean;
}
