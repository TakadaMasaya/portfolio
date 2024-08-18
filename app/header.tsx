import { Image, Link } from '@nextui-org/react'
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiZenn } from 'react-icons/si'

const LINKS = [
  {
    icon: <FaGithub className="h-full w-full" />,
    href: 'https://github.com/TakadaMasaya',
  },
  {
    icon: <FaXTwitter className="h-full w-full" />,
    href: 'https://twitter.com/takada_masaya_',
  },
  {
    icon: <SiZenn className="h-full w-full" />,
    href: 'https://zenn.dev/takada',
  },
]

export default function Header() {
  return (
    <header className="w-full max-w-2xl bg-background px-4 pb-8 text-foreground dark">
      <div className="flex justify-between pb-3 pt-10 align-bottom">
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-2xl font-bold">たかだ まさや</h1>
          <div className="flex gap-2">
            {LINKS.map(({ icon, href }) => (
              <Link key={href} href={href} target="_blank" className="size-5">
                {icon}
              </Link>
            ))}
          </div>
        </div>
        <Image src="/portrait.jpg" alt="portrait" className="w-24" />
      </div>
      <div>
        <p>Webフロントエンドエンジニアです。業務の自動化や効率化に興味があります。</p>
        <p>普段はReactやTypeScriptを用いた開発をしています。</p>
      </div>
    </header>
  )
}
