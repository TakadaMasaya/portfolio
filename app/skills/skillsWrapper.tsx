'use client'

import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'

import SkillCard from './skillCard'
import { SkillItem } from './types/skillTypes'

type PropTypes = {
  title: string
  skills?: SkillItem[]
}

export default function SkillsWrapper({ title, skills }: PropTypes) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  if (!skills) return null
  return (
    <div className="mb-2 w-full overflow-hidden px-4 py-2">
      <h2 className="pb-4 text-xl font-bold">{title}</h2>
      <div className="scrollbar mb-1 box-border flex w-full justify-start gap-1 overflow-x-scroll">
        {skills.map((obj, i) => (
          <SkillCard
            key={i}
            {...obj}
            selected={selectedIndex === i}
            onPress={() => setSelectedIndex(i)}
          />
        ))}
      </div>
      <Card>
        <CardHeader>
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <Image
              src={skills[selectedIndex].icon}
              alt={`${title}のアイコン画像`}
              height={24}
              width={24}
            />
            {skills[selectedIndex].title}
          </h3>
        </CardHeader>
        <CardBody>
          <p className="text-justify indent-4 leading-relaxed tracking-wide">
            {skills[selectedIndex].body}
          </p>
          {skills[selectedIndex].subBody && (
            <p className="pt-2 text-xs text-gray-500">{skills[selectedIndex].subBody}</p>
          )}
        </CardBody>
      </Card>
    </div>
  )
}
