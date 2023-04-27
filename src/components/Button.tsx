import { useEffect } from "react";

export interface ButtonProps {
  text: React.ReactNode;
  href?: string;
}

export const Button = ({ text, href }: ButtonProps) => {
  useEffect(() => console.log("asdfasdf"), []);
  return (
    <a
      className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded h-10 flex items-center text-center no-underline ml-3"
      href={href}
    >
      {text}
    </a>
  );
};
