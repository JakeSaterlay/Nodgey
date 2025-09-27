type ButtonSize = "sm" | "md" | "lg";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm px-2 py-1",
  md: "text-base px-4 py-2",
  lg: "text-lg px-6 py-3",
};

interface ButtonProps {
  size?: ButtonSize;
}

export const Button = ({ size = "md" }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`bg-yellow-300 text-green-400 py-2 px-4 rounded hover:bg-yellow-400 hover:text-green-500 cursor-pointer ${sizeClasses[size]}`}
    >
      Button
    </button>
  );
};
