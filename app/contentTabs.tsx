'use client'

import { Tab, Tabs } from '@nextui-org/react'
import { usePathname } from 'next/navigation'

const PATHS: { href: string; title: string }[] = [
  { href: '/skills', title: 'できること' },
  { href: '/career', title: '経歴' },
]

export default function ContentTabs() {
  const pathname = usePathname()

  return (
    <Tabs
      variant="underlined"
      aria-label="page routing tab"
      selectedKey={pathname}
    >
      {PATHS.map(({ href, title }) => (
        <Tab key={href} title={title} href={href} />
      ))}
    </Tabs>
  )
}
