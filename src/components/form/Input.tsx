type InputProps = {
  label: string;
  type: string;
};

export const Input = ({ label, type }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2 text-left">
        {label}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type={type}
        />
      </label>
    </div>
  );
};
