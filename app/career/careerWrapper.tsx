'use client'

import { CAREER_START_ICON } from './careerAccordionItemStartIcon'
import { CareerContent, CareerContents } from './page'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { CareerType } from './types/careerTypes'

type PropTypes = {
  contents: CareerContents
}

export default function CareerWrapper({ contents }: PropTypes) {
  return (
    <Accordion variant="splitted">
      {contents
        .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))
        .map(({ id, title, content, careerType, startDate, endDate, isActive }) => (
          <AccordionItem
            key={id}
            title={<div className="text-base">{title}</div>}
            subtitle={getSubTitle(startDate, endDate, isActive)}
            startContent={getStartContent(careerType[0])}
          >
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="[&_p]:indent-4 [&_ul]:list-disc [&_ul]:pl-8"
            />
          </AccordionItem>
        ))}
    </Accordion>
  )
}

const getStartContent = (careerType: CareerType) => (
  <div className="text-primary">{CAREER_START_ICON.get(careerType)}</div>
)

const getYearMonth = (dateStr: string) => {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = date.getMonth() + 1

  return `${year}年${month}月`
}

const getSubTitle = (
  start: CareerContent['startDate'],
  end: CareerContent['endDate'],
  isActive: CareerContent['isActive'],
) => {
  let subTitle: string = ''

  subTitle = getYearMonth(start)
  if (isActive) subTitle += ' - 現在'
  else if (end) subTitle += ` - ${getYearMonth(end)}`

  return subTitle
}
