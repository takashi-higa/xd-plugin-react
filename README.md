# XD のプラグイン開発環境

Adobe 公式の[ui-hello-react](https://github.com/AdobeXD/plugin-samples/tree/master/ui-hello-react)サンプルのものになります。<br>
React の Functinal Component に書き換えたりインデントを半スペ 2 に変えたりと細かい変更を加えました。

TypeScript は Adobe から公式の[型定義](https://github.com/AdobeXD/typings/tree/xd-29-updates)が 2021/11 時点であまり更新されておらずでしたので導入しておりません。<br>
（スタックの機能が使いたかったのですが型定義がなかったので TypeScript は導入しませんでした。）

## 開発環境のインストール

```
npm ci
```

## 開発

```
npm run watch
```

## プラグインの構文チェック

```
npm run validate
```

## プラグインのパッケージ化

```
npm run package
```
