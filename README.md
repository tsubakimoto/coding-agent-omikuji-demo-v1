# おみくじアプリ 🎋

Node.js と Express を使用したシンプルなおみくじ（日本の占い）ウェブアプリケーションです。

## 機能

- 🎲 ランダムなおみくじ結果の表示
- 📱 レスポンシブデザイン
- 🎨 美しいUI/UX
- ⚡ 高速な動作

## おみくじ結果

以下の6種類の運勢からランダムに選択されます：

- **大吉** (だいきち) - 最高の運勢
- **中吉** (ちゅうきち) - 良い運勢
- **小吉** (しょうきち) - 少し良い運勢
- **吉** (きち) - 普通の運勢
- **凶** (きょう) - 悪い運勢
- **大凶** (だいきょう) - 最悪の運勢

## ローカル環境での実行手順

### 必要な環境

- Node.js (バージョン14以上)
- npm

### 1. リポジトリのクローン

```bash
git clone https://github.com/tsubakimoto/coding-agent-omikuji-demo-v1.git
cd coding-agent-omikuji-demo-v1
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. アプリケーションの起動

```bash
npm start
```

または

```bash
node app.js
```

### 4. ブラウザでアクセス

アプリケーションが起動したら、ブラウザで以下のURLにアクセスしてください：

```
http://localhost:3000
```

## API エンドポイント

### GET /
- メインページを表示

### GET /api/omikuji
- おみくじ結果をJSON形式で返却
- レスポンス例：
```json
{
  "result": "大吉",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

## プロジェクト構成

```
.
├── app.js              # メインサーバーファイル
├── package.json        # プロジェクト設定
├── README.md          # このファイル
└── public/            # 静的ファイル
    ├── index.html     # メインHTML
    ├── style.css      # スタイルシート
    └── script.js      # クライアントサイドJS
```

## 開発について

このアプリケーションは以下の技術を使用して開発されています：

- **バックエンド**: Node.js, Express
- **フロントエンド**: HTML5, CSS3, JavaScript (ES6+)
- **スタイリング**: CSS Grid, Flexbox, アニメーション

## ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルをご覧ください。

## 作者

Yuta Matsumura

---

楽しいおみくじ体験をお楽しみください！ 🎌