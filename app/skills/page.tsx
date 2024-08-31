import { MICRO_CMS_END_POINT } from '../microCmsClient'
import SkillsProvider from './skillsProvider'

export default function Skills() {
  return (
    <>
      <SkillsProvider title="フロントエンド" endpoint={MICRO_CMS_END_POINT.program_skills} />
      <SkillsProvider title="周辺ツール" endpoint={MICRO_CMS_END_POINT.work_skills} />
    </>
  )
}
