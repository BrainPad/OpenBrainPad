https://brainpad.github.io/OpenBrainPad/ の管理レポジトリです。  

[Hugo](https://gohugo.io/)によって作成され、GitHub.ioによってホスティングされています。
データを編集してmasterにmergeすると公開ページが書き換わります。

## Hugo Serverを用いた編集の仕方

### コードのclone

Hugoのthemeが含まれるためrecursiveをつけてcloneします

```
git clone --recursive https://github.com/BrainPad/OpenBrainPad.git
```

### Hugoのインストール

- https://gohugo.io/installation/

### Hugoサーバーの立ち上げ

localでサーバーを立ち上げるとlocalhostで画面反映が確認できるようになります。
PostCSSなどの依存関係の解消が必要になるときがありますので、エラーが出た際には確認してください。

```
hugo server
```

### ブラウザ表示

ブラウザで`http://localhost:1313/OpenBrainPad/`を表示する
