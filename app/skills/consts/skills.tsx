import { ReactNode } from 'react'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaAlgolia, FaFigma, FaGithub, FaReact, FaSlack } from 'react-icons/fa'
import { IoLogoFirebase } from 'react-icons/io5'
import { SiMui, SiRedux, SiVite } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

export type SkillItem = {
  title: string
  icon: ReactNode
  body: ReactNode
}

export const PROGRAM_SKILLS: SkillItem[] = [
  {
    title: 'TypeScript',
    icon: <BiLogoTypescript className="size-[length:inherit]" />,
    body: '私はTypeScript, JavaScriptを使用することができます。',
  },
  {
    title: 'React',
    icon: <FaReact className="size-[length:inherit]" />,
    body: '私はReact(v18)を使用することができます。',
  },
  {
    title: 'Redux',
    icon: <SiRedux className="size-[length:inherit]" />,
    body: '私はReduxを使用することができます。',
  },
  {
    title: 'MUI',
    icon: <SiMui className="size-[length:inherit]" />,
    body: '私はMUIを使用することができます。',
  },
  {
    title: 'Vite',
    icon: <SiVite className="size-[length:inherit]" />,
    body: '私はViteを使用することができます。',
  },
  {
    title: 'Next.js',
    icon: <TbBrandNextjs className="size-[length:inherit]" />,
    body: '私はNextを使用することができます。',
  },
] as const

export const OTHER_SKILLS: SkillItem[] = [
  {
    title: 'Firebase',
    icon: <IoLogoFirebase className="size-[length:inherit]" />,
    body: '私はFirebaseを使用することができます。',
  },
  {
    title: 'GitHub',
    icon: <FaGithub className="size-[length:inherit]" />,
    body: '私はGitHubを使用することができます。',
  },
  {
    title: 'Slack',
    icon: <FaSlack className="size-[length:inherit]" />,
    body: '私はSlackを使用することができます。',
  },
  {
    title: 'Figma',
    icon: <FaFigma className="size-[length:inherit]" />,
    body: '私はFigmaを使用することができます。',
  },
  {
    title: 'Algolia',
    icon: <FaAlgolia className="size-[length:inherit]" />,
    body: '私はAlgoliaを使用することができます。',
  },
] as const
