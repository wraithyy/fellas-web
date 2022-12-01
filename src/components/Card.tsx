export interface CardProps {
  title: string;
  body: string;
  href: string;
}

export const Card = ({ title, body, href }: CardProps) => {
  return (
    <li className="list-none rounded flex p-1 from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r">
      <a
        className="block text-black px-4 py-2 font-semibold rounded bg-white hover:bg-transparent hover:text-white transition"
        href={href}
      >
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p>{body}</p>
      </a>
    </li>
  );
};
