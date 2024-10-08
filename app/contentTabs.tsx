'use client'

import { Tab, Tabs } from '@nextui-org/react'
import { usePathname, useRouter } from 'next/navigation'
import { Key } from 'react'

const PATHS: { href: string; title: string }[] = [
  { href: '/skills', title: 'できること' },
  { href: '/career', title: '経歴' },
]

export default function ContentTabs() {
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (href: Key) => {
    if (typeof href !== 'string') throw Error('keyがhref属性ではありません')
    router.push(href)
  }

  return (
    <div className="flex w-full flex-col">
      <Tabs
        variant="underlined"
        aria-label="page routing tab"
        classNames={{
          tabList: 'w-full p-0 border-b border-divider justify-center mb-4 border-gray-700',
          tab: 'max-w-fit px-4',
        }}
        selectedKey={pathname}
        onSelectionChange={(key) => handleChange(key)}
      >
        {PATHS.map(({ href, title }) => (
          <Tab key={href} title={title} />
        ))}
      </Tabs>
    </div>
  )
}
