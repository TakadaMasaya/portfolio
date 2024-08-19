import { ReactNode } from 'react'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaAlgolia, FaFigma, FaGithub, FaReact, FaSlack } from 'react-icons/fa'
import { IoLogoFirebase } from 'react-icons/io5'
import { SiMui, SiRedux, SiVite } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

export type SkillItem = {
  title: string
  icon: ReactNode
  body: string
  subBody?: string
}

const iconClass = 'size-[inherit]'

export const PROGRAM_SKILLS: SkillItem[] = [
  {
    title: 'TypeScript',
    icon: <BiLogoTypescript className={iconClass} />,
    body: '業務で使用しています。基本的な型を使いこなし、アプリケーション開発を型安全に進めることができます。',
    subBody: '.js ファイルでは手が震えてしまいます',
  },
  {
    title: 'React',
    icon: <FaReact className={iconClass} />,
    body: '業務で使用しています。適切な粒度でのコンポーネント設計や、メモ化によるパフォーマンス改善など、基本的なアプリケーション開発が可能です。社内のReact力を上げるべく、公式ドキュメントの輪読会を主催しています。残念ながら業務でテストを書いた経験が無いため、現在学習中です。',
    subBody: 'SRPに基づいた設計を...！',
  },
  {
    title: 'Redux',
    icon: <SiRedux className={iconClass} />,
    body: '業務で使用しています。Redux-Toolkit とともに使用することが多いです。',
  },
  {
    title: 'MUI',
    icon: <SiMui className={iconClass} />,
    body: '業務で使用しています。v4, v5 の使用経験があり、ほとんどのコンポーネントの使用経験がありそうです。高度な使用方法や、テーマなどサイト全体に関わるような設定は行なったことがありません。',
  },
  {
    title: 'Vite',
    icon: <SiVite className={iconClass} />,
    body: '業務で使用しています。アプリケーションの構築時に、諸々の設定などを行なった経験があります。',
    subBody: '速さは正義',
  },
  {
    title: 'Next.js',
    icon: <TbBrandNextjs className={iconClass} />,
    body: '業務で使用した経験はありませんが、このポートフォリオサイトを Next.js で開発しました。基本的な機能が使用可能です。大規模なアプリケーション開発での使用経験はありません。',
  },
] as const

export const OTHER_SKILLS: SkillItem[] = [
  {
    title: 'Firebase',
    icon: <IoLogoFirebase className={iconClass} />,
    body: '業務で使用しています。Realtime Database, Cloud Firestore, Cloud Storage などの使用経験があります。メッセージのやり取りを行うトークルームの設計などを行なった経験があります。',
  },
  {
    title: 'GitHub',
    icon: <FaGithub className={iconClass} />,
    body: '業務で使用しています。Issue, Pull Request など基本的な機能はもちろん、Actions や Projects をチームに導入した経験があります。Actions では、デプロイの自動化やブランチマージの自動化などを行いました。',
  },
  {
    title: 'Slack',
    icon: <FaSlack className={iconClass} />,
    body: '業務で使用しています。Canvas やワークフローなどを使って、仕事を便利にしていくのが好きです。誰が読んでも同じ意味に取れるような文章を心がけるとともに、遊び心を忘れないようにしています。',
    subBody: 'I love Slack',
  },
  {
    title: 'Figma',
    icon: <FaFigma className={iconClass} />,
    body: '業務で使用した経験があります。簡単なコンポーネント設計などを行い、チームメンバーのエンジニアと認識のすり合わせを行なった経験があります。',
  },
  {
    title: 'Algolia',
    icon: <FaAlgolia className={iconClass} />,
    body: '業務で使用した経験があります。ユーザーが作成した投稿を検索するために、インデックス追加などを行なった経験があります。あまりガッツリ触ったわけではないので、ざっくり理解した程度です。',
  },
] as const
