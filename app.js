const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// おみくじの結果配列
const omikujiResults = [
  '大吉',  // daikichi - great fortune
  '中吉',  // chukichi - medium fortune
  '小吉',  // kokichi - small fortune
  '吉',    // kichi - fortune
  '凶',    // kyo - bad luck
  '大凶'   // daikyo - great misfortune
];

// 静的ファイルの配信
app.use(express.static(path.join(__dirname, 'public')));

// メインページ
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// おみくじAPI
app.get('/api/omikuji', (req, res) => {
  const randomIndex = Math.floor(Math.random() * omikujiResults.length);
  const result = omikujiResults[randomIndex];
  
  res.json({
    result: result,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`おみくじアプリがポート ${PORT} で起動しました！`);
  console.log(`http://localhost:${PORT} にアクセスしてください`);
});