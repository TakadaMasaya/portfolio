import SkillsProvider from './skillsProvider'
import { SKILLS_END_POINT } from './types/skillTypes'

export default function Skills() {
  return (
    <>
      <SkillsProvider title="フロントエンド" endpoint={SKILLS_END_POINT.program_skills} />
      <SkillsProvider title="周辺ツール" endpoint={SKILLS_END_POINT.work_skills} />
    </>
  )
}
