// DOM要素の取得
const drawButton = document.getElementById('draw-button');
const resultDisplay = document.getElementById('result-display');
const resultText = document.getElementById('result-text');

// おみくじを引く関数
async function drawOmikuji() {
    try {
        // ボタンを無効化
        drawButton.disabled = true;
        drawButton.textContent = '🎲 占い中... 🎲';
        
        // 結果表示エリアを隠す
        resultDisplay.classList.add('hidden');
        resultDisplay.classList.remove('show');
        
        // APIからおみくじ結果を取得
        const response = await fetch('/api/omikuji');
        const data = await response.json();
        
        // 少し待ってから結果を表示（演出効果）
        setTimeout(() => {
            // 結果を表示
            resultText.textContent = data.result;
            resultDisplay.classList.remove('hidden');
            resultDisplay.classList.add('show');
            
            // ボタンを再有効化
            drawButton.disabled = false;
            drawButton.textContent = '🎲 もう一度回す 🎲';
        }, 1000);
        
    } catch (error) {
        console.error('おみくじの取得に失敗しました:', error);
        alert('おみくじの取得に失敗しました。もう一度お試しください。');
        
        // エラー時もボタンを再有効化
        drawButton.disabled = false;
        drawButton.textContent = '🎲 おみくじを回す 🎲';
    }
}

// ボタンにイベントリスナーを追加
drawButton.addEventListener('click', drawOmikuji);

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', () => {
    console.log('おみくじアプリが読み込まれました！');
});