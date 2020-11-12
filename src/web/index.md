# Web

[[toc]]

## 言語・環境・ツール

#### 基本

`HTML` `CSS` `Javascript`

#### 動きの部分とか

[Vue.js](#vue-js)

#### サービス

[Git,Github]() -バージョン管理

[microCMS]() -部分的に CMS 化できる。ブログやニュースなど継続的に情報更新したいときに使う。

#### ソフト

**VSCode** -テキストエディタ。他のツールとの相性が良い。

**SourceTree** -バージョン管理

**xampp** -`PHP` での開発では必要。

---

## Vue.js

`Vue.js` は `jQuery` のように使える `js` ベースのライブラリです。
大規模な web ページ・アプリにおいては `jQuery` よりも有効です。

#### 外部リンク

[Vue.js でできること 8 選](https://goworkship.com/magazine/vuejs-framework-snippets/)
<br>実用的ではないが、なんとなく Vue の雰囲気をつかむ。

[Vue.js 公式リファレンス](https://jp.vuejs.org/v2/guide/index.html)
<br>学習用。とりあえずコピペしていくだけでなんとなく使い方が分かる。

[基礎から学ぶ Vue.js 書籍用サポートページ](https://cr-vue.mio3io.com/guide/chapter1.html)
<br>学習用。公式とほぼ同じ内容。

[Vue.js でカルーセルスライダーを使うなら「hooper」が良さげ](https://www.kabanoki.net/3989/)
<br>API(後述)を使用している場合、普通のスライダー系ライブラリは上手く動作しない。この`hooper`は上手くいった。
<br>【おまけ】普通のスライダーは[Swiper.js 超解説（基礎編）](https://garigaricode.com/swiper/)

[Vue.js(Nuxt.js)ですごい安易で簡単なもっと見るボタンの作成](https://qiita.com/sauzar18/items/eea9855703d5a3a8e17f)
<br>API(後述)でリストをずらっと並べているときのもっと見るボタン。

[Vue.js で filter を使って連想配列の重複削除](https://qiita.com/qualidea/items/27bd28b40af6e7f0306f)
<br>アイテムのカテゴリー等を抽出してリストアップしたいときに使う。
<br>例：(犬、犬、犬、猫、猫、鳥) => (犬、猫、鳥)

[Vue.js で jQuery と共存させる方法](https://qiita.com/g-taguchi/items/15b2f5392f5556ac5a70)

#### サンプル

[複数ページで共通のヘッダーを作って再利用する(コンポーネント)](../sample01.html)
<br>コンポーネント化のメリットはソースがすっきりする、メンテナンス性が向上する等。

[API を取得してコンテンツを表示する](../sample02.html)
<br>記事本文・詳細ページ

[API を取得してリスト表示する](../sample02.html)
<br>記事一覧やお知らせ

---

## CMS・API

ニュース・ブログのように定期・長期的に更新する要素がある場合は CMS 化すると便利です。ヘッドレス CMS と呼ばれるサービスで、日本語で利用できる microCMS がオススメです。以下のようなメリットがあります。

- ソースコードをいじらず GUI で更新ができる
- HTML を上げなおさなくてよい

[microCMS のはじめ方](https://microcms.io/blog/getting-started)

[microCMS を使ってマークダウンで入力するブログを作る](https://microcms.io/blog/create_markdown_blog)

[microCMS 公式ドキュメント](https://microcms.io/docs/)

ヘッドレス CMS が出来るのは API コンテンツを作成するところまでです。それらを web に表示させるには「API を取得・表示」といった作業が必要になります。

[microcms と nuxt-js で axios を使用した api 取得まで](https://mykii.blog/microcms%E3%81%A8nuxt-js%E3%81%A7axios%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%9Fapi%E5%8F%96%E5%BE%97%E3%81%BE%E3%81%A7/)
<br>`Nuxt.js`というフレームワークも併用している為、その部分のコードは適宜読み替えていく必要があります。
