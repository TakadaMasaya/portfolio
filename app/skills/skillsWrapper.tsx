'use client'

import { Card, CardBody, CardHeader } from '@nextui-org/react'
import { useState } from 'react'
import { SkillItem } from './consts/skills'
import SkillCard from './skillCard'

type PropTypes = {
  title: string
  skills: SkillItem[]
}

export default function SkillsWrapper({ title, skills }: PropTypes) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  return (
    <div className="mb-2 w-full px-4 py-2">
      <h2 className="pb-4 text-xl font-bold">{title}</h2>
      <div className="flex flex-wrap items-center justify-between gap-1 pb-2 sm:justify-start">
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
            <div className="size-6">{skills[selectedIndex].icon}</div>
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
