import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" title="Adot Home" className="ml-2 md:ml-4 flex items-center">
          <Image
            className="w-14 h-14 md:w-16 md:h-16 aspect-square"
            src="/images/logos/logo-icon.png"
            alt="Adot logo icon"
            width={50}
            height={50}
            priority
          />
          <Image
            className="hidden lg:flex h-auto w-auto ml-1"
            src="/images/logos/logo-text.png"
            alt="Adot logo text"
            width={170}
            height={50}
            priority
          />
        </Link>
  )
}

export default Logo