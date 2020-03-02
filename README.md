本ページは[Hugo](https://gohugo.io/)によって作成され、GitHub.ioによってホスティングされています。

## ローカルでのHugo serverの立ち上げ方

### コードのクローン
Hugoのthemeが含まれるためrecurseiveをつけてcloneします

```
git clone --recursive https://github.com/BrainPad/OpenBrainPad.git
```
### Hugoのインストール

- https://github.com/gohugoio/hugo/releases

Macであれば以下でも可
```
brew insatll hugo
```

### Hugoサーバーの立ち上げ
```
hugo server
```

### ブラウザ表示
ブラウザで`http://localhost:1313/OpenBrainPad/`を表示する
