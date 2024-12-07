import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" title="Adot Home" className="ml-2 md:ml-4 flex">
          <Image
            className="w-10 sm:w-16 h-auto m-auto"
            src="/logo-icon.png"
            alt="Adot logo icon"
            width={50}
            height={50}
            priority
          />
          <Image
            className="hidden md:flex"
            src="/logo-text.png"
            alt="Adot logo text"
            width={170}
            height={50}
            priority
          />
        </Link>
  )
}

export default Logo