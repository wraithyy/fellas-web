export interface ButtonProps {
  text: React.ReactNode;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => console.log("Text")}
    >
      {text}
    </button>
  );
};
