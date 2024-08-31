import { createClient } from 'microcms-js-sdk'

export const MICRO_CMS_END_POINT = {
  ['program_skills']: 'program_skills',
  ['work_skills']: 'work_skills',
  ['career']: 'career',
} as const
export type SkillsEndPoint = (typeof MICRO_CMS_END_POINT)[keyof typeof MICRO_CMS_END_POINT]

const serviceDomain = process.env.MICRO_CMS_SERVICE_DOMAIN || ''
const apiKey = process.env.MICRO_CMS_API_KEY || ''

export const microCmsClient = createClient({ serviceDomain, apiKey })
