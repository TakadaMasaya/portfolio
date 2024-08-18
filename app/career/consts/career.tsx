import { ReactNode } from 'react'

export const CAREER_TYPE = {
  company: 'company',
  project: 'project',
  other: 'other',
} as const
export type CareerType = (typeof CAREER_TYPE)[keyof typeof CAREER_TYPE]

type Year = number
type Month = number
type YearMonth = [Year, Month]

type CareerItem = {
  /** キャリアのタイトル */
  title: string
  /** キャリアの詳細 */
  content: ReactNode[]
  /** キャリアの種類 */
  careerType: CareerType
  /** 開始年月 */
  startYearMonth: YearMonth
  /** 終了年月 */
  endYearMonth?: YearMonth
}

export const CAREER = [
  {
    title: 'A社に入社（受託開発を行う企業）',
    content: [
      '地元で見つけたベンチャー企業にアルバイトとして採用していただき、エンジニアとしてキャリアをスタート。主に受託開発の不具合修正とテスト業務に従事。そのかたわら、顧客向けの資料作成や調査業務なども担当。',
      '業務の中で、ドキュメントを残すことの重要性を教わる。',
    ],
    careerType: CAREER_TYPE.company,
    startYearMonth: [2021, 6],
    endYearMonth: [2021, 12],
  },
  {
    title: '水道工事会社の施工担当者管理システムの不具合修正、テスト',
    content: [
      '水道工事会社が社内で使用する、施工担当者管理システムの不具合修正とテスト業務に従事。巨大なシステムだったため機能を理解することに時間を要したが、テスト仕様書を作成しながら理解を進めた。',
      '先輩エンジニアの仕事を見て、Pull Request やコードレビューについての理解を深め、自分でも Pull Request を作成できるようになる。',
    ],
    careerType: CAREER_TYPE.project,
    startYearMonth: [2021, 7],
    endYearMonth: [2021, 12],
  },
  {
    title: 'M社に入社（地図情報ソリューションを提供する企業）',
    content: [
      '「もっと開発に携わりたい！」という思いを持っていたところ、企業側からスカウトメッセージをいただいて転職。主に、Webフロントエンドの開発全般に従事するかたわら、社内の労働環境づくりにも励んでいる。',
    ],
    careerType: CAREER_TYPE.company,
    startYearMonth: [2021, 12],
  },
  {
    title: 'GISアプリの開発',
    content: [
      '主に一次産業向けの、地図を使った地理情報システム(GIS)アプリケーションの設計、開発、運用に従事。測量後の帳票作成、出力機能の実装では、データ取得に使用するiOSアプリの開発チームと、データ形式やデータの受け渡しについて議論を重ねながら進めた。',
      <>
        また、非効率な開発環境に課題を感じ、それらを改善するために以下のような取り組みを進めた。
        <ul className="list-inside list-disc">
          <li>TypeScript の導入</li>
          <li>React の関数コンポーネントと Hook API の導入</li>
          <li>Git のブランチルールの策定、導入</li>
          <li>GitHub の Issue, Pull Rquest, Projects, Actions の導入</li>
          <li>コードレビュー文化の醸成</li>
          <li>ESLint, Prettier の導入</li>
          <li>コミット時のコンパイルチェックと自動フォーマット</li>
          <li>Slack × GitHub を導入し、Issue や Pull Request の通知を設定</li>
        </ul>
      </>,
    ],
    careerType: CAREER_TYPE.project,
    startYearMonth: [2022, 1],
  },
  {
    title: '労働環境の改善に向けた取り組み',
    content: [
      <>
        短期離職を防止することや、社内のコミュニケーションを円滑・活発にする目的で、以下のような取り組みを行なった。
        <ul className="list-inside list-disc">
          <li className="ml-[1.4rem] indent-[-1.4rem]">
            新入社員のウェルカムMTGを企画、運用。
            <br />
            MTG後のアンケートでは、9割が「MTGがあってよかった」と回答。
          </li>
          <li className="ml-[1.4rem] indent-[-1.4rem]">
            部活動費用補助制度を導入し、体育館でのレクリエーションを主催。
            <br />
            過去最多参加人数は12名。
          </li>
          <li className="ml-[1.4rem] indent-[-1.4rem]">支給PCをノートPCへ移行</li>
        </ul>
      </>,
      <>
        また、業務の効率化や社内の技術力向上に向けて、以下のような取り組みを行なった。
        <ul className="list-inside list-disc">
          <li>掃除当番割当プログラムをGASで実装</li>
          <li>React公式ドキュメントの輪読会を主催</li>
        </ul>
      </>,
    ],
    careerType: CAREER_TYPE.other,
    startYearMonth: [2022, 6],
  },
  {
    title: '針葉樹の流通管理アプリ開発',
    content: [
      '伐採した針葉樹の流通を管理するアプリケーションの設計、開発、運用に従事。500MBほどの3次元データを扱う必要があり、ファイルの取得や解析中にローディングを表示したり、効率的にデータを表示したりすることでユーザー体験を損なわないような実装を実現した。',
    ],
    careerType: CAREER_TYPE.project,
    startYearMonth: [2022, 4],
  },
  {
    title: '広葉樹マッチングアプリの開発',
    content: [
      '希少価値の高い木材の売り手と買い手をつなぐ、マッチングアプリケーションの設計、開発、運用に従事。一般消費者も取引に参加できることを目指して、モダンなデザインを意識。',
      '写真の2点をクリックして木材の寸法を計測する機能の実装では、写真の深度情報や撮影時のパラメータを使用して座標を変換するのに苦労したが、社内のエンジニアに相談しながら実現することができた。',
    ],
    careerType: CAREER_TYPE.project,
    startYearMonth: [2022, 6],
  },
]
  .sort((a, b) => b.startYearMonth[1] - a.startYearMonth[1])
  .sort((a, b) => b.startYearMonth[0] - a.startYearMonth[0]) as CareerItem[]
