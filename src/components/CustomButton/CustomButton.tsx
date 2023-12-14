import { MouseEvent } from 'react';

interface IButtonProps {
  type: 'submit' | 'reset' | 'button' | undefined;
  label: string | number;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export default function CustomButton({
  label,
  onClick,
  type,
  disabled,
}: IButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-orange-300 hover:underline disabled:cursor-none disabled:opacity-75"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
