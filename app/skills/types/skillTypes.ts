export const SKILLS_END_POINT = {
  ['program_skills']: 'program_skills',
  ['work_skills']: 'work_skills',
} as const
export type SkillsEndPoint = (typeof SKILLS_END_POINT)[keyof typeof SKILLS_END_POINT]

export type SkillItem = {
  title: string
  icon: string
  body: string
  subBody?: string
}
