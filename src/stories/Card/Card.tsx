export const Card = () => {
  return (
    <div className="bg-yellow-300 h-96 w-80 hover:scale-110 transition-transform">
      <h2 className="text-lg p-2 font-semibold mb-2 bg-green-600 text-white w-full">
        Card Title
      </h2>
      <div className="p-2">
        <p className="text-green-600">This is a simple card component.</p>
      </div>
    </div>
  );
};
