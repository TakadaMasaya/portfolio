'use client'

import { Card, CardBody } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { SkillItem } from './consts/skills'

type PropTypes = SkillItem & {
  selected: boolean
  onPress: () => void
}

const INITIAL_ANIMATE = { opacity: 0, width: 0, marginLeft: 0 }
const ANIMATE = { opacity: 1, width: 'auto', marginLeft: 8 }

function SkillCard({ title, icon, selected, onPress }: PropTypes) {
  const [hoverd, setHoverd] = useState<boolean>(false)

  return (
    <Card
      key={title}
      onMouseEnter={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
      isPressable
      onPress={onPress}
    >
      <CardBody
        data-selected={selected}
        className="overflow-hidden data-[selected=true]:text-primary"
      >
        <div className="flex items-center">
          <div className="size-8">{icon}</div>
          <motion.div
            initial={INITIAL_ANIMATE}
            animate={hoverd ? ANIMATE : INITIAL_ANIMATE}
            className="whitespace-nowrap"
          >
            {title}
          </motion.div>
        </div>
      </CardBody>
    </Card>
  )
}

export default SkillCard
