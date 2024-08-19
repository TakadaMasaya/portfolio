'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { GoProject } from 'react-icons/go'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { MdAutoAwesome } from 'react-icons/md'
import { CAREER, CAREER_TYPE } from './consts/career'

const START_CONTENT = new Map()
START_CONTENT.set(CAREER_TYPE.company, <HiOutlineOfficeBuilding fontSize={24} />)
START_CONTENT.set(CAREER_TYPE.project, <GoProject fontSize={24} />)
START_CONTENT.set(CAREER_TYPE.other, <MdAutoAwesome fontSize={24} />)

export default function Career() {
  return (
    <Accordion variant="splitted">
      {CAREER.map(({ title, content, careerType, startYearMonth }, i) => {
        const [year, month] = startYearMonth
        return (
          <AccordionItem
            key={i}
            title={<div className="text-base">{title}</div>}
            subtitle={`${year}年 ${month}月`}
            startContent={<div className="text-primary">{START_CONTENT.get(careerType)}</div>}
          >
            <div>
              {content.map((paragraph, j) => (
                <p key={j} className="pb-2 indent-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
