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

## サンプル

[複数ページで共通のヘッダーを作って再利用する(コンポーネント)](https://y-t-zj4rb.github.io/documentation/sample01.html)
<br>コンポーネント化のメリットはソースがすっきりする、メンテナンス性が向上する等。

[API を取得してリスト表示する](https://y-t-zj4rb.github.io/documentation/sample02.html)
<br>お知らせや記事一覧

[API を取得してコンテンツを表示する](https://y-t-zj4rb.github.io/documentation/sample03.html)
<br>記事本文・詳細ページ

[日時の表記](https://y-t-zj4rb.github.io/documentation/sample04.html)

---

## 外部リンク

#### Vue.js

`Vue.js` は `jQuery` のように使える `js` ベースのライブラリです。
大規模な web ページ・アプリにおいては `jQuery` よりも有効です。

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

#### CMS・API

ニュース・ブログのように定期・長期的に更新する要素がある場合は CMS 化すると便利です。ヘッドレス CMS と呼ばれるサービスで、日本語で利用できる microCMS がオススメです。以下のようなメリットがあります。

- ソースコードをいじらず GUI で更新ができる
- HTML を上げなおさなくてよい

[microCMS のはじめ方](https://microcms.io/blog/getting-started)

[microCMS を使ってマークダウンで入力するブログを作る](https://microcms.io/blog/create_markdown_blog)

[microCMS 公式ドキュメント](https://microcms.io/docs/)

ヘッドレス CMS が出来るのは API コンテンツを作成するところまでです。それらを web に表示させるには「API を取得・表示」といった作業が必要になります。

[microcms と nuxt-js で axios を使用した api 取得まで](https://mykii.blog/microcms%E3%81%A8nuxt-js%E3%81%A7axios%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%9Fapi%E5%8F%96%E5%BE%97%E3%81%BE%E3%81%A7/)
<br>`Nuxt.js`というフレームワークも併用している為、その部分のコードは適宜読み替えていく必要があります。

#### Git

Git はバージョン管理ツールです。できることは主に、

- 修正の度に、もしくはバージョンごとにバックアップが取れる
- 前のバージョンにさかのぼることができる
- 複数人での開発の際に競合を回避できる

ランディングページや小規模サイトであれば基本必要ないです。

[Git 以外にも実はある！バージョン管理システムについて基礎から解説！](https://www.atoone.co.jp/column/10278/)

[会社で GitHub を使うとなぜ危ないのか](https://www.orangeitems.com/entry/2019/07/24/154031)
<br>単に Twitter の鍵アカのような公開/非公開設定の問題。機密情報の扱いに気を付けましょう。

[【書籍】わかばちゃんと学ぶ Git 使い方入門](https://www.amazon.co.jp/%E3%82%8F%E3%81%8B%E3%81%B0%E3%81%A1%E3%82%83%E3%82%93%E3%81%A8%E5%AD%A6%E3%81%B6-Git%E4%BD%BF%E3%81%84%E6%96%B9%E5%85%A5%E9%96%80%E3%80%88GitHub%E3%80%81Bitbucket%E3%80%81SourceTree%E3%80%89-%E6%B9%8A%E5%B7%9D-%E3%81%82%E3%81%84/dp/4863542178/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=%E3%82%8F%E3%81%8B%E3%81%B0%E3%81%A1%E3%82%83%E3%82%93%E3%81%A8%E5%AD%A6%E3%81%B6+Git&qid=1605232656&s=books&sr=1-1)
<br>Git は分かりづらいため、色々ググるよりも本 1 冊読むほうがかえって早いと思います。SourceTree というソフトを使用。

[第 1 話 リポジトリを作ってコミットしてみよう【連載】マンガでわかる Git ～コマンド編～](https://www.r-staffing.co.jp/engineer/entry/20190621_1)
<br>↑ の筆者が公開している。書籍では GUI での操作を説明しているのに対し、こちらはコマンド操作の説明。そのため少しとっつきにくいと思います。

#### PHP

`PHP` はサーバーサイドの言語のためサーバー上でしか正常に動作しません。サーバーにアップするまで確認できないのは非効率なため、ローカルでサーバーを立ち上げるための環境を構築する必要があります。

[Visual Studio Code で XAMPP の PHP コーディング環境を作る](https://qiita.com/hitotch/items/ab791fbc11a4e2a6cefd)
<br>`PHP` の環境構築

[XAMPP7.0.9 ポータブル(zip)版で Web 開発環境の構築メモ](https://qiita.com/RikaKawasaki/items/ab54feaa5123de3612d8)
<br>ポータブル版はインストール不要なため管理者権限が不要です。

<details>
<summary><b>xampp初期設定でやったこと</b></summary>
<div>

---

[※参考 1](https://qiita.com/t_hori_20030/items/7d021d7720303c7a3d51)

[※参考 2](https://tecb.jp/blog/762)

■apache\conf\httpd.conf

```
Listen 80
=>
Listen 81
```

```
ServerName localhost:80
=>
ServerName localhost:81
```

理由:port 番号が skype と被るため

■apache\conf\extra\httpd-ssl.conf

```
Listen 443
=>
Listen 4433
```

```
<VirtualHost _default_:443>
=>
<VirtualHost _default_:4433>
```

```
ServerName www.example.com:443
=>
ServerName www.example.com:4433
```

■php.ini,my.ini

[文字化けしてるとき](https://qiita.com/guzuri/items/643c1311224e8d482278)

---

</div>
</details>

[ひと言掲示板を作る](https://gray-code.com/php/make-the-board-vol1/)
<br>ワークショップ形式で掲示板を作る。

#### その他

実用には至らなかったけど今後活用できそうなもの

[Node.js をインストールする](https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b)
<br>`Node.js`自体を理解する必要はないが、以下のフレームワークを使用するためにはインストールしておきたいです。

[デザイナーでもわかる Vuepress(Vue.js)](https://qiita.com/taiqi/items/c4632a37d8de36f2f6d0)
<br>この web ドキュメントは`Vuepress`を用いて作成しました。目次やサイドバーなどを簡単に実装できます。名前に Vue とついていますが Vue の知識が無くても使えます。

[【Nuxt.js】Vue.js をより効果的に使えるフレームワークのメリットや利用シーンを紹介！](https://udemy.benesse.co.jp/development/system/nuxt-js.html)
<br>大・中規模以上のサイト向け

[【Ch.1】 Nuxt とは？動かして理解する【Nuxt de Portfolio】](https://liginc.co.jp/449551)
<br>Nuxt.js のチュートリアル
