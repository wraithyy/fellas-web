import { useEffect } from "react";

export interface ButtonProps {
  text: React.ReactNode;
}

export const Button = ({ text }: ButtonProps) => {
  useEffect(() => console.log("asdfasdf"), []);
  return (
    <button
      className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded h-10 flex items-center"
      onClick={() => console.log("Text")}
    >
      {text}
    </button>
  );
};
