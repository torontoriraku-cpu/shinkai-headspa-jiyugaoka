# shinkai-headspa-jiyugaoka

HODOKU リンパケアサロン「深海のヘッドスパ」LP。

構成は [JCS Finance](https://www.jcs-finance.co.jp/) のLP(FV → NEWS → RESULTS → REASON → SERVICE → INDUSTRY → VOICE → DETAIL → FLOW → FAQ → CONTACT → フッター)をベースにしています。

## ファイル構成

```
index.html      ページ本体
css/style.css   スタイル
js/main.js      ハンバーガーメニュー、固定予約バー、フェードイン、動画の自動再生、泡アニメーション
images/         写真(WebP)
videos/         店内動画(WebM + MP4。Safari は MP4 を再生)
```

ビルド不要の静的サイトです。`index.html` をブラウザで開けば確認できます。

## 公開

GitHub Pages(`main` ブランチ / root)で公開します。
https://torontoriraku-cpu.github.io/shinkai-headspa-jiyugaoka/

URL を変える場合は、`index.html` の `og:url`・`og:image`・`canonical` も合わせて変更してください。
