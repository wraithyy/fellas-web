import { useEffect } from 'react'

export interface ButtonProps {
  text: React.ReactNode
  href?: string
  white?: boolean
}

export const Button = ({ text, href, white }: ButtonProps) => {
  useEffect(() => console.log('asdfasdf'), [])
  const color = white
    ? 'bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded h-10 flex items-center text-center no-underline ml-3'
    : 'bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded h-10 flex items-center text-center no-underline ml-3'
  return (
    <a className={color} href={href}>
      {text}
    </a>
  )
}
