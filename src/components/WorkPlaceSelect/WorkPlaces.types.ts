export interface WorkPlaceSelectProps {
  value: string;
  onChange: (value: string) => void;
  showError: boolean;
}

export interface Category {
  name: string;
  slug: string;
}
