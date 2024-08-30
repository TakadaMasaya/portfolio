import { MicroCMSDate } from 'microcms-js-sdk'
import { microCmsClient } from '../microCmsClient'
import SkillsWrapper from './skillsWrapper'
import { SkillItem, SkillsEndPoint } from './types/skillTypes'

type Contents = (MicroCMSDate & SkillItem)[]

type PropTypes = {
  title: string
  endpoint: SkillsEndPoint
}

export default async function SkillsProvider({ title, endpoint }: PropTypes) {
  const { contents }: { contents: Contents } = await microCmsClient.get({ endpoint })
  const sortedSkills = contents.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))

  return <SkillsWrapper title={title} skills={sortedSkills} />
}
