# ポートフォリオ

[TakadaMasaya](https://github.com/TakadaMasaya) のポートフォリオのリポジトリです。  
URL: https://takada-masaya.dev  

# 開発環境

## 使用技術
- 開発: Next.js, NextUI, TailwindCSS
- ホスティング: Vercel
- コンテンツ管理: microCMS

## 開発環境のセットアップ

### パッケージのインストール

```bash
npm i
```

### APIキーの設定

microCMSのAPIキーなどの設定をenvファイルで行なっている。

```bash
touch .env.local
```

1. プロジェクトルートの [.env.local.example](.env.local.example) の内容をコピー
2. プロジェクトルートの .env.local に1でコピーした内容をペースト
3. ファイル内の `MICRO_CMS_SERVICE_DOMAIN` と `MICRO_CMS_API_KEY` を正しく設定する

## 開発環境起動

```bash
npm run dev
```
