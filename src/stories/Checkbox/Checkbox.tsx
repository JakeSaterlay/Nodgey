export const Checkbox = () => {
  return (
    <div className="rounded border bg-yellow-300 p-4 border-green-600 focus-within:bg-yellow-400">
      <input className="accent-green-600" type="checkbox" />
      <label className="text-green-600 ml-2">Checkbox</label>
    </div>
  );
};
