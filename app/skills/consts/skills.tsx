import { ReactNode } from 'react'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaAlgolia, FaFigma, FaGithub, FaReact, FaSlack } from 'react-icons/fa'
import { GiMuscleUp } from 'react-icons/gi'
import { IoLogoFirebase } from 'react-icons/io5'
import { LuChefHat } from 'react-icons/lu'
import { SiLeaflet, SiMui, SiRedux, SiVercel, SiVite } from 'react-icons/si'
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
    body: '業務での使用経験があります。ユーティリティ型などの基本的な型を使いこなし、アプリケーション開発を型安全に進めることができます。',
    subBody: '.js ファイルでは手が震えてしまいます',
  },
  {
    title: 'TypeScript',
    icon: <BiLogoTypescript className={iconClass} />,
    body: '業務での使用経験があります。ユーティリティ型などの基本的な型を使いこなし、アプリケーション開発を型安全に進めることができます。',
    subBody: '.js ファイルでは手が震えてしまいます',
  },
  {
    title: 'TypeScript',
    icon: <BiLogoTypescript className={iconClass} />,
    body: '業務での使用経験があります。ユーティリティ型などの基本的な型を使いこなし、アプリケーション開発を型安全に進めることができます。',
    subBody: '.js ファイルでは手が震えてしまいます',
  },
  {
    title: 'React',
    icon: <FaReact className={iconClass} />,
    body: '業務での使用経験があります。適切な粒度でのコンポーネント設計や、フックを用いたパフォーマンス改善など、基本的なアプリケーション開発が可能です。社内のReact力を上げるべく、公式ドキュメントの輪読会を主催しています。残念ながら業務でテストを書いた経験が無いため、現在学習中です。',
    subBody: 'SRPに基づいた設計を...！',
  },
  {
    title: 'Redux',
    icon: <SiRedux className={iconClass} />,
    body: '業務での使用経験があります。Redux-Toolkit とともに使用することが多いです。よくキャッシュ的な使い方をしています。',
  },
  {
    title: 'Leaflet',
    icon: <SiLeaflet className={iconClass} />,
    body: '業務での使用経験があります。実装は主に React-Leaflet を使用して行なっていました。大規模なデータを GeoJSON 化することで、地図表示を実現した経験があります。',
  },
  {
    title: 'MUI',
    icon: <SiMui className={iconClass} />,
    body: '業務での使用経験があります。v4, v5 の使用経験があり、ほとんどのコンポーネントの使用経験がありそうです。高度なカスタマイズや、テーマなどサイト全体に関わるような設定は行なったことがありません。',
  },
  {
    title: 'Vite',
    icon: <SiVite className={iconClass} />,
    body: '業務での使用経験があります。アプリケーションの構築時に、諸々の設定などを行なった経験があります。',
    subBody: '速さは正義',
  },
  {
    title: 'Next.js',
    icon: <TbBrandNextjs className={iconClass} />,
    body: '業務で使用した経験はありませんが、このポートフォリオサイトの開発に使用しました。基本的な機能が使用可能です。大規模なアプリケーション開発での使用経験はありません。',
  },
] as const

export const WORK_SKILLS: SkillItem[] = [
  {
    title: 'Firebase',
    icon: <IoLogoFirebase className={iconClass} />,
    body: '業務での使用経験があります。Realtime Database, Cloud Firestore, Cloud Storage などの使用経験があります。メッセージのやり取りを行うトークルームの設計などを行なった経験があります。',
  },
  {
    title: 'GitHub',
    icon: <FaGithub className={iconClass} />,
    body: '業務での使用経験があります。Issue, Pull Request など基本的な機能はもちろん、Actions や Projects をチームに導入した経験があります。Actions では、デプロイの自動化やブランチマージの自動化などを行いました。',
  },
  {
    title: 'Slack',
    icon: <FaSlack className={iconClass} />,
    body: '業務での使用経験があります。Canvas やワークフローなどを使って、仕事を便利にしていくのが好きです。誰が読んでも誤解の生じないような文章を心がけるとともに、遊び心を忘れないようにしています。',
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
  {
    title: 'Vercel',
    icon: <SiVercel className={iconClass} />,
    body: '業務で使用した経験はありませんが、このポートフォリオの配信で使用しました。まだまだ超基本的な機能しか使用していませんが、Next.js アプリケーションのデプロイがとても簡単で驚きました。',
  },
] as const

export const OTHER_SKILLS: SkillItem[] = [
  {
    title: 'Cooking',
    icon: <LuChefHat className={iconClass} />,
    body: '料理が趣味です。週末はたいてい1週間分の作り置きに励んでいます。ナイフでぱかーんとするタイプのオムライスが作れます。自分で作って食べるよりも、誰かのために作って「美味しい！」と言ってもらえるのが何よりの喜びです。',
  },
  {
    title: 'Training',
    icon: <GiMuscleUp className={iconClass} />,
    body: '体を動かすことが好きです。家にある懸垂ラックで懸垂やディップスを行なったり、社内の人を誘って体育館でスポーツを行なったりしています。部活としては野球とバレーボールをやっていました。',
  },
]
