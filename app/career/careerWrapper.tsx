'use client'

import { CAREER_START_ICON } from './careerAccordionItemStartIcon'
import { CareerContents } from './page'

import { Accordion, AccordionItem } from '@nextui-org/react'

type PropTypes = {
  contents: CareerContents
}

export default function CareerWrapper({ contents }: PropTypes) {
  return (
    <Accordion variant="splitted">
      {contents.map((careerObj) => {
        const { id, title, content, careerType } = careerObj
        return (
          <AccordionItem
            key={id}
            title={<div className="text-base">{title}</div>}
            startContent={
              <div className="text-primary">{CAREER_START_ICON.get(careerType[0])}</div>
            }
          >
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className='[&_p]:indent-4 [&_ul]:pl-8 [&_ul]:list-disc' 
            />
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
