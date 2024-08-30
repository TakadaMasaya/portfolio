import { createClient, MicroCMSDate } from 'microcms-js-sdk'
import SkillsWrapper from './skillsWrapper'
import { SkillItem, SkillsEndPoint } from './types/skillTypes'

const serviceDomain = process.env.MICRO_CMS_SERVICE_DOMAIN || ''
const apiKey = process.env.MICRO_CMS_API_KEY || ''

const client = createClient({ serviceDomain, apiKey })

type Contents = (MicroCMSDate & SkillItem)[]

type PropTypes = {
  title: string
  endpoint: SkillsEndPoint
}

export default async function SkillsProvider({ title, endpoint }: PropTypes) {
  const { contents }: { contents: Contents } = await client.get({ endpoint })
  const sortedSkills = contents.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))

  return <SkillsWrapper title={title} skills={sortedSkills} />
}
