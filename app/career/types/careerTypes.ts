export const CAREER_TYPE = {
  company: 'company',
  project: 'project',
  other: 'other',
} as const
export type CareerType = (typeof CAREER_TYPE)[keyof typeof CAREER_TYPE]

export type CareerItem = {
  title: string
  content: string
  careerType: [CareerType]
  startDate: string
  endDate?: string
  isActive?: boolean
}
