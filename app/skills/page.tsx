'use client'

import { OTHER_SKILLS, PROGRAM_SKILLS } from './consts/skills'
import SkillsWrapper from './skillsWrapper'

export default function Skills() {
  return (
    <>
      <SkillsWrapper title="フロントエンド" skills={PROGRAM_SKILLS} />
      <SkillsWrapper title="周辺ツール" skills={OTHER_SKILLS} />
    </>
  )
}
