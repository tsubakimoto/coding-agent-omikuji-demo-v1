# おみくじアプリ

日本の伝統的なおみくじを体験できるシンプルなWebアプリケーションです。

## 機能

- **ランダムなおみくじ結果**: 大吉、中吉、小吉、吉、凶、大凶の6種類から抽選
- **美しいUI**: 日本らしいデザインとアニメーション
- **レスポンシブデザイン**: スマートフォンでも快適に利用可能
- **GitHub Pages対応**: 静的サイトとして簡単にデプロイ可能

## ローカル環境での実行手順

### 方法1: ブラウザで直接開く

1. このリポジトリをクローンまたはダウンロードします：
   ```bash
   git clone https://github.com/tsubakimoto/coding-agent-omikuji-demo-v1.git
   cd coding-agent-omikuji-demo-v1
   ```

2. `index.html` ファイルをブラウザで開きます：
   - ファイルエクスプローラー（Windows）やFinder（Mac）で `index.html` をダブルクリック
   - または、ブラウザに `index.html` をドラッグ&ドロップ

### 方法2: ローカルサーバーを使用（推奨）

より本格的な環境でテストしたい場合は、ローカルサーバーを使用することをお勧めします：

#### Python 3を使用する場合：
```bash
cd coding-agent-omikuji-demo-v1
python -m http.server 8000
```
ブラウザで `http://localhost:8000` にアクセス

#### Node.jsを使用する場合：
```bash
# serve パッケージをグローバルにインストール（初回のみ）
npm install -g serve

cd coding-agent-omikuji-demo-v1
serve .
```
表示されるURLにアクセス（通常は `http://localhost:3000`）

#### VSCodeのLive Server拡張機能を使用する場合：
1. VSCodeで Live Server 拡張機能をインストール
2. `index.html` を右クリックして「Open with Live Server」を選択

## GitHub Pagesでの公開

このアプリケーションはGitHub Pagesで簡単に公開できます：

1. GitHubリポジトリの設定（Settings）に移動
2. 左サイドバーの「Pages」をクリック
3. 「Source」で「Deploy from a branch」を選択
4. ブランチを「main」（またはメインブランチ）、フォルダを「/ (root)」に設定
5. 「Save」をクリック

数分後、`https://[ユーザー名].github.io/[リポジトリ名]/` でアクセスできるようになります。

## ファイル構成

```
.
├── index.html          # メインのHTMLファイル（CSS・JavaScriptも含む）
├── README.md          # このファイル
└── LICENSE            # MITライセンス
```

## 技術仕様

- **言語**: HTML5, CSS3, JavaScript (ES6+)
- **フレームワーク**: なし（バニラJavaScript）
- **ブラウザ対応**: モダンブラウザ全般
- **デザイン**: レスポンシブデザイン
- **デプロイ**: 静的サイト（GitHub Pages対応）

## カスタマイズ

### おみくじ結果の追加・変更

`index.html` の JavaScript 部分にある `fortunes` 配列を編集することで、おみくじ結果をカスタマイズできます：

```javascript
const fortunes = [
    { text: '大吉', class: 'result-daikichi', description: '最高の運勢です！' },
    // 他の結果...
];
```

### スタイルの変更

`index.html` の `<style>` タグ内のCSSを編集することで、デザインをカスタマイズできます。

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。

## 貢献

バグ報告や機能提案は、GitHubのIssuesまでお気軽にお寄せください。プルリクエストも歓迎します！