
import Image from 'next/image'
import Link from 'next/link'


const Nav = ({home}: {home?:boolean}) => {
  return (
    <nav className={` ${home ? 'bg-transparent' : 'bg-white text-black'} z-10 relative`}>
      <div className="container flex items-center justify-between py-8 mx-auto">
        <Link href='/'>
        <a id="title" className="font-mono text-2x">
          { home ? <Image alt='Horizontal Logo' src='/horizontal-white.svg' width='650' height='120' /> : <Image alt='Horizontal Logo' src='/horizontal-black.svg' width='650' height='120'  />}
        </a>
        </Link>
        <div className="flex justify-end gap-16 text-3xl uppercase">
          <Link href='/#about'><a>About</a></Link>
          <Link href='#'><a>Support</a></Link>
          <Link href='/contact'><a>Contact</a></Link>
        </div>
      </div>
    </nav>  )
}

export default Nav