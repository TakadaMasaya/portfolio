'use client'

import { OTHER_SKILLS, PROGRAM_SKILLS, WORK_SKILLS } from './consts/skills'
import SkillsWrapper from './skillsWrapper'

export default function Skills() {
  return (
    <>
      <SkillsWrapper title="フロントエンド" skills={PROGRAM_SKILLS} />
      <SkillsWrapper title="周辺ツール" skills={WORK_SKILLS} />
      <SkillsWrapper title="その他" skills={OTHER_SKILLS} />
    </>
  )
}
