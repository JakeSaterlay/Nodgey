type CardSize = "sm" | "md" | "lg";

const sizeClasses: Record<CardSize, string> = {
  sm: "h-48 w-40",
  md: "h-96 w-80",
  lg: "h-[32rem] w-[28rem]", // custom since Tailwind has no h-128/w-112 by default
};

interface CardProps {
  size?: CardSize;
}

export const Card = ({ size = "md" }: CardProps) => {
  return (
    <div
      className={`bg-yellow-300 hover:scale-110 transition-transform flex flex-col ${sizeClasses[size]}`}
    >
      <h2 className="text-lg p-2 font-semibold bg-green-600 text-white w-full">
        Card Title
      </h2>

      <div className="p-2 flex-1 overflow-y-auto">
        <p className="text-green-600">
          This is a simple card component. But what happens when there is too
          much text? does it just overflow out of the card? Let's find out by
          adding a lot more text to this paragraph. This is a simple card
          component. But what happens when there is too much text? does it just
          overflow out of the card? Let's find out by adding a lot more text to
          this paragraph.
        </p>
      </div>
    </div>
  );
};
