'use client'

import { Card, CardBody } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { memo, useState } from 'react'
import { SkillItem } from './types/skillTypes'

type PropTypes = SkillItem & {
  selected: boolean
  onPress: () => void
}

const INITIAL_ANIMATE = { opacity: 0, width: 0, marginLeft: 0 }
const ANIMATE = { opacity: 1, width: 'auto', marginLeft: 8 }

function SkillCard({ title, icon, selected, onPress }: PropTypes) {
  const [hoverd, setHoverd] = useState<boolean>(false)

  return (
    <div>
      <Card
        onMouseEnter={() => setHoverd(true)}
        onMouseLeave={() => setHoverd(false)}
        isPressable
        onPress={onPress}
      >
        <CardBody
          data-selected={selected}
          className="overflow-hidden bg-primary-800 text-slate-950 opacity-90 data-[selected=true]:bg-primary-300 data-[selected=true]:text-slate-50 data-[selected=true]:opacity-100"
        >
          <div className="flex items-center">
            <Image
              src={icon}
              alt={`${title}のアイコン画像`}
              height={28}
              width={28}
              data-selected={selected}
              className=""
            />
            <span className="hidden sm:block">
              <motion.div
                initial={INITIAL_ANIMATE}
                animate={hoverd ? ANIMATE : INITIAL_ANIMATE}
                className="whitespace-nowrap"
              >
                {title}
              </motion.div>
            </span>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default memo(SkillCard)
