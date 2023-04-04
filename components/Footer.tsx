import Image from "next/image";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="text-black bg-white">
      <div className="container flex flex-wrap-reverse justify-around gap-20 py-20 mx-auto sm:gap-4">
        <div className="self-center">
          <p className='mb-2 font-bold'>Live Fickle &copy;2023</p>
          <p>600 Broadway Ave NW</p>
          <p>Grand Rapids, MI 49504</p>
          <p>616.666.1212</p>
        </div>
        <Image
          alt='Be Fickle | Be Flawed Round Logo'
          src='/fickle-flawed-round-logo.png'
          height='200'
          width='200'
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
        <div className='self-center'>
          <button type="button" className="block text-black hover:text-white border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold px-5 py-2.5 text-center mr-2 mb-4"><Link href='/mail'>Join Our Mailing List &rarr;</Link></button>
          <div>
            <Link href='/about' className="font-bold uppercase">About Us</Link>
            <ul>
              <li className='ml-2'><Link href='#mission-statement'>Mission Statement</Link></li>
              <li className='ml-2'><Link href='#the-problem'>The Problem</Link></li>
              <li className='ml-2'><Link href='#mental-health'>Good Mental Health</Link></li>
              <li className='ml-2'><Link href='#the-norm'>Re-defining the Norm</Link></li>
            </ul>
            <Link href='/support' className="block mt-4 font-bold uppercase">Support</Link>
            <Link href='/contact' className="block mt-4 font-bold uppercase">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer