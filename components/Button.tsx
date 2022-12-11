import React from 'react'
import Link from 'next/link'


const Button = ({children, color, link}: {children:any, color:string, link:string}) => {
  return (
    <div className={`bg-${color}`}>
      <Link href={link} className={`uppercase font-bold text-2xl px-6 py-4 block text-black`}>{children}</Link>
    </div>
  )
}


export default Button