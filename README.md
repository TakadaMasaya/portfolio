# ポートフォリオ

[TakadaMasaya](https://github.com/TakadaMasaya) のポートフォリオのリポジトリです。  
URL: https://takada-masaya.dev
Next.js, NextUIで主に開発を行なっており、Vercelでホスティング、microCMSでコンテンツ管理を行なっています。

# 開発環境の構築

## リポジトリのセットアップ

```bash
git clone {this repository}
npm i
touch .env.local
```

## APIキーの設定

CMSとしてmicroCMSを使用しており、そのAPIキーなどの設定をenvファイルで行なっている。

1. プロジェクトルートの [.env.local.example](.env.local.example) の内容をコピー
2. プロジェクトルートの .env.local に1でコピーした内容をペースト
3. ファイル内の `MICRO_CMS_SERVICE_DOMAIN` と `MICRO_CMS_API_KEY` を正しく設定する

## 開発環境起動

```bash
npm run dev
```
