import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk'
import { MICRO_CMS_END_POINT, microCmsClient } from '../microCmsClient'
import CareerWrapper from './careerWrapper'
import { CareerItem } from './types/careerTypes'

export type CareerContent = MicroCMSContentId & MicroCMSDate & CareerItem
export type CareerContents = CareerContent[]

export default async function Career() {
  const { contents }: { contents: CareerContents } = await microCmsClient.get({
    endpoint: MICRO_CMS_END_POINT.career,
  })

  return <CareerWrapper contents={contents} />
}
