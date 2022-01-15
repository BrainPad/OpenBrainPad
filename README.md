https://brainpad.github.io/OpenBrainPad/ の本体ページです。  
本ページは[Hugo](https://gohugo.io/)によって作成され、GitHub.ioによってホスティングされています。データを編集してmasterにpushするとそのまま本体ページが書き換わります。
## local環境でのHugo serverの立ち上げ方
### コードのclone
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
localでサーバーを立ち上げるとlocalhostで画面反映が確認できるようになります。
```
hugo server
```
### ブラウザ表示
ブラウザで`http://localhost:1313/OpenBrainPad/`を表示する
