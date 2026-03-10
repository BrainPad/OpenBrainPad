---
layout: page
title: OpenBrainPad
---

<!-- ===== HERO ===== -->
<div class="obp-hero">
  <div class="obp-hero-inner">
    <a href="https://twitter.com/hashtag/OpenBP" target="_blank" rel="noopener" class="obp-hero-badge">#OpenBP プロジェクト</a>
    <img src="/logo-hero.png" alt="OpenBrainPad" class="obp-hero-logo" />
    <p class="obp-hero-desc">
      ブレインパッドの「中身」をもっと詳しく知ってもらうため、研修資料、勉強会、文化について発信する。<br>
      ブレインパッドをもっとオープンにしていくプロジェクトです。
    </p>
    <div class="obp-hero-actions">
      <a href="#materials" class="obp-btn-primary">📃 資料を見る</a>
      <a href="#podcast" class="obp-btn-secondary">🎙 Podcast を聴く</a>
    </div>
  </div>
</div>

<!-- ===== FEATURED ARTICLE ===== -->
<FeaturedCard
  url="https://note.com/ysdyt/n/n46160f3348fe"
  title='社内の神資料を公開するプロジェクト "OpenBrainPad"（#OpenBP）を始めます'
  description="OpenBrainPad プロジェクトの発足背景と目的を説明した記事。&#10;なぜ社内資料を外部公開するのか、その想いと経緯をまとめています。"
  author="吉田勇太 (@yutatatatata)"
  linkText="note で読む"
/>

<!-- ===== MAIN CONTENT ===== -->
<div class="obp-main">

  <!-- ===== MATERIALS ===== -->
  <section class="obp-section" id="materials">
    <div class="obp-section-header">
      <span class="obp-section-icon">📃</span>
      <div class="obp-section-meta">
        <h2 class="obp-section-title">資料公開</h2>
        <p class="obp-section-desc">データサイエンティストが社内向けに作成した講座資料を公開しています。</p>
      </div>
    </div>
    <div class="obp-grid obp-grid-wide">
      <ContentCard
        title="分析の基礎（モデリング）"
        url="https://speakerdeck.com/brainpadpr/basics-of-analysis-modeling"
        description="データ分析における基礎的なモデリングの考え方を体系的に解説。実務で必要な思考プロセスを習得できます。"
        source="speakerdeck"
      />
      <ContentCard
        title="データハンドリングのための SQL"
        url="https://speakerdeck.com/brainpadpr/sql-for-data-handling"
        description="データ分析業務で必要なSQL知識を体系的にまとめた講座資料。SELECT文から複雑な集計・結合まで。"
        source="speakerdeck"
      />
      <ContentCard
        title="「因果関係」をとらえるために"
        url="https://speakerdeck.com/brainpadpr/to-grasp-causal-relationship"
        description="相関と因果の違いから、因果推論の基礎的な考え方までをわかりやすく解説した入門資料。"
        source="speakerdeck"
      />
      <ContentCard
        title="Git ハンズオン研修"
        url="https://speakerdeck.com/brainpadpr/git-hands-on"
        description="バージョン管理ツール Git の基本操作を実際に手を動かしながら学べるハンズオン形式の研修資料。"
        source="speakerdeck"
      />
      <ContentCard
        title="基礎統計学 / Basic of Statistics"
        url="https://speakerdeck.com/brainpadpr/basic-of-statistics"
        description="データサイエンスに必要な統計学の基礎を体系的に学べる講座資料。確率・分布・検定まで網羅。"
        source="speakerdeck"
      />
      <ContentCard
        title="効果検証・因果推論 / Impact Evaluation · Causal Inference"
        url="https://speakerdeck.com/brainpadpr/effect-verification-causal-inference"
        description="A/Bテスト・傾向スコア・差分の差分法など、実務での効果検証手法を体系的に解説。"
        source="speakerdeck"
      />
      <ContentCard
        title="数理最適化 / Mathematical Optimization"
        url="https://speakerdeck.com/brainpadpr/mathematical-optimization"
        description="線形計画・組み合わせ最適化など、業務で活かせる数理最適化の基礎から応用まで解説。"
        source="speakerdeck"
      />
      <ContentCard
        title="LLM・生成AI研修 / Large Language Model · Generative AI"
        url="https://speakerdeck.com/brainpadpr/large-language-modelgenerative-ai"
        description="大規模言語モデルと生成AIの仕組み・業務活用のポイントを解説した最新の研修資料。"
        source="speakerdeck"
      />
    </div>
    <!-- メディア掲載 -->
    <div class="obp-media-mention">
      <div class="obp-media-mention-label">📰 メディア掲載 — 基礎統計学資料が各メディアに取り上げられました</div>
      <div class="obp-grid obp-media-grid">
        <ContentCard
          title="データリテラシーUP！初歩から学ぶ統計学　「数字」を意思決定に役立てる"
          url="https://reskill.nikkei.com/article/DGXZQOLM186AC0Y4A111C2000000/"
          description="日経リスキリング「ガチです！無料学習委員会」にて、ブレインパッドの基礎統計学資料が統計を学べる無料コンテンツのひとつとして紹介されました。100ページ超の充実した内容が評価されています。"
          source="media"
          author="日経リスキリング"
        />
        <ContentCard
          title="新卒向け「統計学の基礎」100ページ超　SaaS企業が無料で資料公開"
          url="https://www.itmedia.co.jp/news/articles/2309/20/news057.html"
          description="ITmedia NEWS にて、OpenBrainPad プロジェクトで公開している統計学・機械学習の社内研修資料が紹介されました。"
          source="media"
          author="ITmedia NEWS"
        />
      </div>
    </div>
  </section>

  <!-- ===== BOOK ===== -->
  <section class="obp-section" id="book">
    <div class="obp-section-header">
      <span class="obp-section-icon">📖</span>
      <div class="obp-section-meta">
        <h2 class="obp-section-title">書籍出版</h2>
        <p class="obp-section-desc">ブレインパッドのデータサイエンティストが執筆した書籍を紹介します。</p>
      </div>
    </div>
    <div class="obp-book-blog-featured">
      <ContentCard
        title="【書籍出版記念】執筆陣が語る「指南書」の裏側"
        url="https://blog.brainpad.co.jp/entry/2025/09/10/150042"
        image="https://cdn-ak.f.st-hatena.com/images/fotolife/b/bpblog-tanaka/20250905/20250905155531.jpg"
        description="5名の著者がなぜこの本を書いたか、どんな実践知を詰め込んだかを語る出版記念インタビュー記事。"
        source="brainpad"
        author="BrainPad Blog"
      />
    </div>
    <div class="obp-books-row">
      <ContentCard
        title="先輩データサイエンティストからの指南書 ―実務で生き抜くためのエンジニアリングスキル"
        url="https://gihyo.jp/book/2025/978-4-297-15100-3"
        image="https://gihyo.jp/assets/images/cover/2025/thumb/TH800_9784297151003.jpg"
        description="理論や統計手法だけでなく、実務で生き抜くためのエンジニアリングスキルを体系化した1冊。環境構築・コード品質管理・データ検証・実験管理・プロトタイプ開発まで凝縮。2025年8月・技術評論社。"
        source="book"
        author="浅野純季・木村真也・田中冬馬・武藤克大・栁泉穂"
      />
      <ContentCard
        title="現場で使える！Python深層強化学習入門 強化学習と深層学習による探索と制御"
        url="https://www.shoeisha.co.jp/book/detail/9784798159928"
        image="https://www.seshop.com/static/images/product/22970/L.png"
        description="Q学習・方策勾配法・Actor-Critic などの基礎アルゴリズムから、連続制御・組み合わせ最適化・系列生成まで実装付きで解説。2019年8月・翔泳社。"
        source="book"
        author="伊藤多一・今津義充・須藤広大・仁ノ平将人・川﨑悠介・酒井裕企・魏崇哲"
      />
      <ContentCard
        title="現場で使える！TensorFlow開発入門 Kerasによる深層学習モデル構築手法"
        url="https://www.shoeisha.co.jp/book/detail/9784798154121"
        image="https://www.seshop.com/static/images/product/21540/L.png"
        description="TensorFlow と Keras を用いた深層学習モデルの構築手法を実践的に解説。画像ノイズ除去・自動着色・スタイル転送など応用まで網羅。2018年4月・翔泳社。"
        source="book"
        author="太田満久・須藤広大・黒澤匠雅・小田大輔"
      />
      <ContentCard
        title="失敗しない データ分析・AIのビジネス導入"
        url="https://www.morikita.co.jp/books/mid/085411"
        image="https://www.morikita.co.jp/storage/images/cvr/085411cvr.jpg"
        description="国内でいち早くAI・データ分析コンサルを手がけてきたブレインパッドが、豊富な実務経験をもとにビジネスでのAI導入の手順と要所を指南。2018年7月・森北出版。"
        source="book"
        author="太田満久・井上佳・今津義充・中山英樹・上総虎智・山﨑裕市・薗頭隆太・草野隆史"
      />
      <ContentCard
        title="いちばんやさしい機械学習プロジェクトの教本"
        url="https://book.impress.co.jp/books/1117101044"
        image="https://img.ips.co.jp/ij/17/1117101044/1117101044-520x.jpg"
        description="数式やコードに頼らず、AIをビジネスに導入する方法を丁寧に解説。プロジェクトの目標設定からチーム編成・運用まで。2018年3月・インプレス。"
        source="book"
        author="韮原祐介"
      />
    </div>
  </section>

  <!-- ===== STUDY ===== -->
  <section class="obp-section" id="study">
    <div class="obp-section-header">
      <span class="obp-section-icon">📚</span>
      <div class="obp-section-meta">
        <h2 class="obp-section-title">社内勉強会 b2b</h2>
        <p class="obp-section-desc">brainpad to brainpad — 社員同士が知識・経験を共有する社内勉強会の公開資料です。</p>
      </div>
    </div>
    <div class="obp-grid obp-grid-b2b-featured">
      <ContentCard
        title="2023年 社内勉強会 b2b まとめ記事"
        url="https://note.com/nash_efp/n/n8b8a2661beab"
        description="FY2023 に開催した社内勉強会 b2b の全内容を振り返るまとめ記事。各回のテーマ・登壇者・資料リンクを一覧で確認できます。"
        source="note"
        author="@nash_efp"
      />
      <ContentCard
        title="2023年 勉強会一覧"
        url="https://docs.google.com/spreadsheets/d/1BD3GPM09yKDg2j1AxscOxIyFAqi9GPhc6P9EuRpghCE/edit#gid=1490930229"
        description="これまでに開催した b2b 勉強会の全記録。日付・テーマ・発表資料URLを一覧で管理しているスプレッドシートです。"
        source="spreadsheet"
      />
    </div>
    <div class="obp-grid obp-b2b-main-grid">
      <ContentCard
        title="拡散モデルの原理紹介"
        url="https://speakerdeck.com/brainpadpr/kuo-san-moderunoyuan-li-shao-jie"
        description="Stable Diffusion などで注目を集める拡散モデルの数理的な原理をわかりやすく解説。"
        source="speakerdeck"
      />
      <ContentCard
        title="位相的データ解析とその応用例"
        url="https://speakerdeck.com/brainpadpr/wei-xiang-de-detajie-xi-tosonoying-yong-li"
        description="TDA（トポロジカルデータ解析）の基礎理論と実際の応用事例を紹介。"
        source="speakerdeck"
      />
      <ContentCard
        title="ベイズ最適化をゼロから"
        url="https://speakerdeck.com/brainpadpr/beizuzui-shi-hua-wozerokara"
        description="ハイパーパラメータ探索に使われるベイズ最適化の理論と実装を基礎から丁寧に解説。"
        source="speakerdeck"
      />
      <ContentCard
        title="p値ってなんだっけ？"
        url="https://qiita.com/suikabar/items/fb26fb73f846cc8c7a7d"
        description="統計検定で頻出の p 値について、直感的な理解から正確な定義まで丁寧に解説した記事。"
        source="qiita"
      />
      <ContentCard
        title="データに携わるなら学んでおきたい＂データマネジメント＂について"
        url="https://qiita.com/nash_efp/items/27c317dd789187d4fe92"
        description="データガバナンス・データカタログ・データ品質管理の全体像をわかりやすくまとめた記事。"
        source="qiita"
      />
      <ContentCard
        title="介入タイミングが複数あるときの差分の差分法：Staggered DiDの紹介"
        url="https://www.brainpad.co.jp/doors/contents/01_tech_2023-08-22-153000/"
        description="施策の開始タイミングが個体ごとに異なる場合の因果推論手法 Staggered DiD を解説。"
        source="brainpad"
      />
      <ContentCard
        title="効果検証のための因果推論手法のチートシート"
        url="https://qiita.com/_jinta/items/98ac5bbe9ba5bfff1c8a"
        description="RCT・傾向スコア・DiDなど各種効果検証手法を比較整理したチートシート形式の記事。"
        source="qiita"
      />
      <ContentCard
        title="推しのラジオのダッシュボードを作ったら「そのサイト月2万かかるで」と脅されて怯えた話"
        url="https://qiita.com/ikumyn1or0/items/48049c8cb24da2ff6fb3"
        description="個人プロジェクトとしてのダッシュボード開発と、クラウドコスト管理で学んだこと。"
        source="qiita"
      />
      <ContentCard
        title="GNN（Graph Neural Network）のガイダンス"
        url="https://zenn.dev/merosu_radio/articles/192fa106a324f6"
        description="グラフ構造データへの深層学習、GNN の基礎理論から実装まで丁寧にまとめた記事。"
        source="zenn"
      />
      <ContentCard
        title="ざっくりわかるRLHF（人間からのフィードバックを用いた強化学習）"
        url="https://www.brainpad.co.jp/doors/contents/01_tech_2023-05-31-160719/"
        description="ChatGPT 等の学習に使われる RLHF の仕組みをわかりやすく解説した技術ブログ記事。"
        source="brainpad"
      />
      <ContentCard
        title="colabの無料枠でLLMを用いた議事録生成をできるようにした話"
        url="https://qiita.com/Jumtra/items/7ce403b91885b23186bb"
        description="Google Colab の無料枠を使って LLM で自動議事録生成を実装した実践的な記事。"
        source="qiita"
      />
      <ContentCard
        title="キラーナンプレRTAチャレンジ"
        url="https://zenn.dev/gnj/articles/1781f395a726fe"
        description="数独（ナンプレ）を数理最適化で高速に解くアルゴリズムを探求した遊び心溢れる記事。"
        source="zenn"
      />
      <ContentCard
        title="0年目から意識したい、スピーディーに誤解なくコミュニケーションを取る方法"
        url="https://speakerdeck.com/brainpadpr/0nian-mu-karayi-shi-sitai-supideiniwu-jie-wu-kukomiyunikesiyonwoqu-rufang-fa"
        description="新人からベテランまで使えるビジネスコミュニケーションの実践的なコツをまとめた発表資料。"
        source="speakerdeck"
      />
      <ContentCard
        title="データサイエンティストである前にビジネスマンとして必要なこと"
        url="https://speakerdeck.com/brainpadpr/detasaienteisutodearuqian-nibizinesumantositebi-yao-nakoto"
        description="技術力だけでなく、ビジネスパーソンとして大切にすべき視点と姿勢を解説した発表資料。"
        source="speakerdeck"
      />
    </div>
  </section>

  <!-- ===== PODCAST ===== -->
  <section class="obp-section" id="podcast">
    <div class="obp-section-header">
      <span class="obp-section-icon">🎙</span>
      <div class="obp-section-meta">
        <h2 class="obp-section-title">白金鉱業.FM</h2>
        <p class="obp-section-desc">BrainPad 社のデータサイエンティスト有志メンバーがアツいと感じていることを自由に話すポッドキャストです。</p>
        <div class="obp-podcast-stats">
          <div class="obp-podcast-stat"><span class="obp-podcast-stat-num"><PodcastCount /></span><span class="obp-podcast-stat-label">エピソード</span></div>
          <div class="obp-podcast-stat"><span class="obp-podcast-stat-num">2019</span><span class="obp-podcast-stat-label">年〜配信中</span></div>
        </div>
        <p class="obp-section-note">※ こちらはブレインパッド組織に関するエピソードを中心に抜粋して掲載しています。全エピソードは公式サイトからご確認ください。</p>
        <div class="obp-section-links">
          <a class="obp-section-link" href="https://shirokane-kougyou.github.io" target="_blank" rel="noopener">🌐 公式サイト</a>
          <a class="obp-section-link" href="https://podcasts.apple.com/jp/podcast/%E7%99%BD%E9%87%91%E9%89%B1%E6%A5%AD-fm/id1479033656" target="_blank" rel="noopener">🍎 Apple Podcasts</a>
          <a class="obp-section-link" href="https://open.spotify.com/show/4iVxMiLaAmz6e7Mv0yTRCk" target="_blank" rel="noopener">💚 Spotify</a>
        </div>
      </div>
    </div>
    <div class="obp-grid obp-grid-b2b-featured">
      <ContentCard
        title="白金鉱業.FM 2020年振り返り"
        url="https://note.com/ysdyt/n/n516d8e066618"
        description="2020年に配信した全エピソードを振り返りながら、ポッドキャスト運営の裏側や反響について語るまとめ記事。"
        source="note"
        author="@yutatatatata"
      />
      <ContentCard
        title="白金鉱業.FM 2023年振り返り"
        url="https://note.com/nash_efp/n/n903679641862"
        image="https://assets.st-note.com/production/uploads/images/258040167/rectangle_large_type_2_a7f40937dbeedbf05e46ba9696baf299.png?fit=bounds&quality=85&width=1280"
        description="2023年に配信したエピソードを総まとめ。組織の変化・注目テーマ・リスナーの反応を振り返る年次レポート。"
        source="note"
        author="@nash_efp"
      />
    </div>
    <div class="obp-grid obp-grid-podcast">
      <ContentCard title="受託分析の歯痒さと限界、やっていて良かったこと" url="https://shirokane-kougyou.github.io/episode/85" description="受託分析業で感じるジレンマと、それでもやり続けることで得られる価値について語る回。" source="podcast" episode="85" />
      <ContentCard title="勉強会が盛んな組織を作る「b2b」の紹介 その2 〜 FY2023の勉強会を振り返る 〜" url="https://shirokane-kougyou.github.io/episode/74" description="FY2023 の社内勉強会 b2b の全容を振り返りながら、組織文化の醸成について語る回。" source="podcast" episode="74" />
      <ContentCard title="非・卒業講演　〜なぜ我々はブレインパッドを卒業しないのか〜" url="https://shirokane-kougyou.github.io/episode/69" description="なぜ長く在籍し続けるのか、その理由と働き続ける動機について本音で語る回。" source="podcast" episode="69" />
      <ContentCard title="まだまだ祭りは終わらんよ！女性DS質問会 延長戦！" url="https://shirokane-kougyou.github.io/episode/56" description="Twitter で集まった質問に女性 DS メンバーが本音で答える人気シリーズの延長戦。" source="podcast" episode="56" />
      <ContentCard title="分析PM Three Essentials WITH Masahisa Taura" url="https://shirokane-kougyou.github.io/episode/54" description="分析プロジェクトマネージャーとして大切にしている3つの本質について深く語る回。" source="podcast" episode="54" />
      <ContentCard title="リモート時代でも勉強会が盛んな組織を作る「b2b」の紹介" url="https://shirokane-kougyou.github.io/episode/51" description="フルリモート環境でも活発な勉強会文化を維持する b2b の仕組みと工夫を紹介。" source="podcast" episode="51" />
      <ContentCard title="分析PM Seven Questions WITH Haruyuki Tsuji" url="https://shirokane-kougyou.github.io/episode/48" description="分析プロジェクトマネージャーへの7つの質問。PM のリアルな仕事観と哲学を聞く。" source="podcast" episode="48" />
      <ContentCard title="分析PM Seven Questions WITH Makoto Hyodo" url="https://shirokane-kougyou.github.io/episode/47" description="分析プロジェクトマネージャーへの7つの質問。PM として大切にしている考え方を語る。" source="podcast" episode="47" />
      <ContentCard title="阪大梅谷先生・CDTO太田さんと数理最適化トーク！" url="https://shirokane-kougyou.github.io/episode/43" description="大阪大学の梅谷先生とブレインパッド CDTO がゲスト。数理最適化の最前線を語る豪華回。" source="podcast" episode="43" />
      <ContentCard title="草野社長に経営やデータサイエンス業界についていろいろ質問する回" url="https://shirokane-kougyou.github.io/episode/40" description="ブレインパッド草野社長へのインタビュー。経営観・業界の未来・DS 人材についてを聞く。" source="podcast" episode="40" />
      <ContentCard title="データサイエンティスト新卒課題図書6冊を紹介します！" url="https://shirokane-kougyou.github.io/episode/33" description="DS 新卒に読んでほしい必読書6冊を丁寧に紹介。なぜこの本なのかの理由も語る。" source="podcast" episode="33" />
      <ContentCard title="フルリモート時代の新卒研修運営" url="https://shirokane-kougyou.github.io/episode/30" description="コロナ禍でフルリモートになった新卒研修をどう設計・運営したかを赤裸々に語る回。" source="podcast" episode="30" />
      <ContentCard title="新卒n年目が終わる" url="https://shirokane-kougyou.github.io/episode/22" description="新卒何年目かを終えて感じること、成長したこと、課題。DS キャリアの節目を語る回。" source="podcast" episode="22" />
      <ContentCard title="男性9割の職場における女性DSのロールモデルを考える委員会" url="https://shirokane-kougyou.github.io/episode/15" description="男性比率の高い職場で活躍する女性 DS のリアルな働き方とキャリア観を語る特別回。" source="podcast" episode="15" />
      <ContentCard title="受託分析業における常駐分析 Case.2" url="https://shirokane-kougyou.github.io/episode/11" description="クライアント先への常駐分析のリアルな事例 Case.2。前回とは異なる視点で語る。" source="podcast" episode="11" />
      <ContentCard title="受託分析業における常駐分析" url="https://shirokane-kougyou.github.io/episode/9" description="クライアント先に常駐してデータ分析を行う働き方のリアルを赤裸々に語る回。" source="podcast" episode="9" />
      <ContentCard title="特別企画『ブレインパッドDS質問会』（後編）" url="https://shirokane-kougyou.github.io/episode/8" description="Twitter で集まった DS に関する質問に本音で答える質問会シリーズの後編。" source="podcast" episode="8" />
      <ContentCard title="特別企画『ブレインパッドDS質問会』（前編）" url="https://shirokane-kougyou.github.io/episode/7" description="Twitter で集まった DS に関する質問に本音で答える質問会シリーズの前編。" source="podcast" episode="7" />
      <ContentCard title="Chief Data Technology Officer（CDTO）って何をする役職ですか？" url="https://shirokane-kougyou.github.io/episode/6" description="ブレインパッドの CDTO という役職の実態と、データを軸にした経営の在り方を語る回。" source="podcast" episode="6" />
    </div>
  </section>

  <!-- ===== MEETUP ===== -->
  <section class="obp-section" id="meetup">
    <div class="obp-section-header">
      <span class="obp-section-icon">🤝</span>
      <div class="obp-section-meta">
        <h2 class="obp-section-title">ミートアップ</h2>
        <p class="obp-section-desc">社内外のデータサイエンティストたち向けの勉強会＆交流会「白金鉱業 Meetup」を開催しています。</p>
        <div class="obp-podcast-stats">
          <div class="obp-podcast-stat"><span class="obp-podcast-stat-num"><ConnpassCount /></span><span class="obp-podcast-stat-label">回開催</span></div>
          <div class="obp-podcast-stat"><span class="obp-podcast-stat-num">2018</span><span class="obp-podcast-stat-label">年〜</span></div>
        </div>
      </div>
    </div>
    <div class="obp-meetup-card">
      <div class="obp-meetup-info">
        <h3>白金鉱業 Meetup</h3>
        <p>
          3〜4名×20分の登壇ゲストでお届けするデータサイエンス系のミートアップイベントです。<br>
          社内外のデータサイエンティストたちが集まり、最新の知見を共有・交流する場となっています。
        </p>
      </div>
      <div class="obp-meetup-format">
        <p>
          <strong>登壇形式</strong><br>
          3〜4名 × 20分<br><br>
          <strong>対象</strong><br>
          データサイエンティストたち
        </p>
      </div>
    </div>
    <div class="obp-grid obp-grid-b2b-featured" style="margin-top:20px">
      <ContentCard
        title="白金鉱業 Meetup — イベント一覧・参加申し込み"
        url="https://brainpad-meetup.connpass.com/"
        description="3〜4名×20分の登壇でお届けするデータサイエンス系ミートアップ。次回イベントの日程確認・参加申し込みはこちらから。"
        source="connpass"
      />
      <ContentCard
        title="白金鉱業 Meetup — 発表資料一覧"
        url="https://brainpad-meetup.connpass.com/presentation/"
        image="/meetup-slides.svg"
        description="これまでの白金鉱業 Meetup で発表された全資料を一覧で確認できます。各回のスライドをまとめて閲覧可能です。"
        source="connpass"
      />
    </div>
  </section>

  <!-- ===== BLOG ===== -->
  <section class="obp-section" id="blog">
    <div class="obp-section-header">
      <span class="obp-section-icon">✍</span>
      <div class="obp-section-meta">
        <h2 class="obp-section-title">メンバーブログ・登壇</h2>
        <p class="obp-section-desc">ブレインパッドメンバーが執筆したブログ記事・外部イベントへの登壇資料をまとめています。</p>
      </div>
    </div>
    <div class="obp-grid">
      <ContentCard title="社内の神資料を公開するプロジェクト ＂OpenBrainPad＂（#OpenBP）を始めます" url="https://note.com/ysdyt/n/n46160f3348fe" description="OpenBrainPad プロジェクトの発足背景と目的を説明したオリジナル記事。なぜ公開するのかの理由から。" source="note" author="@yutatatatata" />
      <ContentCard title="新卒研修、振り返ってみます" url="https://note.com/mss_kid/n/n8b221359ae14" description="データサイエンティストとしての新卒研修を終えて、学びと感想をリアルに振り返った記事。" source="note" author="@mss_kid" />
      <ContentCard title="自社の新卒研修でコンペみたいな演習があったのでエキサイティングにした" url="https://marupippi.hatenablog.jp/entry/make_training_exciting" description="新卒研修の分析演習を Kaggle コンペ風にアレンジして盛り上げた実践レポート。" source="blog" author="@marupippi22" />
      <ContentCard title="データサイエンティスト見習い 新卒1年目が終わる" url="https://pira-nino.hatenablog.com/entry/2019/04/28/%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%83%86%E3%82%A3%E3%82%B9%E3%83%88%E8%A6%8B%E7%BF%92%E3%81%84_%E6%96%B0%E5%8D%921%E5%B9%B4%E7%9B%AE%E3%81%8C%E7%B5%82%E3%82%8F" description="DS 新卒1年目を終えてのリアルな振り返りと成長の記録。" source="blog" author="@nino_pira" />
      <ContentCard title="株式会社ブレインパッドに転職しました" url="https://moepy-stats.hatenablog.com/entry/2019/04/25/jobchange" description="データサイエンスの道へ転職し、ブレインパッドに入社したときのリアルな記事。" source="blog" author="@moepy_stats" />
      <ContentCard title="下町データサイエンティスト 新卒2年目が終わる" url="https://pira-nino.hatenablog.com/entry/end_2nd_fresh_year_shitamachi_ds" description="DS 新卒2年目を終えての振り返り。1年目との変化と新たな気づきを記録。" source="blog" author="@nino_pira" />
<ContentCard title="データサイエンス企業の新卒って、どんな人？" url="https://note.com/abtm81/n/n3eb5d251d5f1" description="ブレインパッド新卒 DS のリアルな姿を紹介。どんな人が集まり、どんな環境か。" source="note" />
      <ContentCard title="機械学習を「社会実装」するということ" url="https://speakerdeck.com/moepy_stats/social-implementation-of-machine-learning" description="機械学習を実際のビジネスに実装する際のリアルな課題と向き合い方を発表した登壇資料。" source="speakerdeck" author="@moepy_stats" />
      <ContentCard title="新時代の新卒データサイエンティスト研修の全貌" url="https://www.medi-08-data-06.work/entry/newcomer_trainig" description="ブレインパッドの新卒 DS 研修の内容と設計思想を詳しく紹介した記事。" source="blog" author="@medi_data0826" />
      <ContentCard title="機械学習を「社会実装」するということ 2022年版" url="https://speakerdeck.com/moepy_stats/social-implementation-of-machine-learning-2022" description="2022年にアップデートした、機械学習の社会実装に関する登壇資料の最新版。" source="speakerdeck" author="@moepy_stats" />
      <ContentCard title="Twitterで集まった質問を社内の新卒女性データサイエンティスト陣に聞いてみた" url="https://note.com/hrk_bb/n/nbd1161268d05" description="Twitter 経由で集めた質問に女性 DS メンバーが本音で答えた Q&A 記事。" source="note" author="@hanaco117" />
      <ContentCard title="周南公立大学でデータ分析の講義をしてきました" url="https://note.com/nash_efp/n/ne78b7fbcb94a" description="大学での外部講義レポート。学生にデータ分析を伝えた経験と気づきをまとめた記事。" source="note" author="@nash_efp" />
      <ContentCard title="青山学院大学でデータ分析の講義をしてきました" url="https://note.com/nash_efp/n/n35c79874f954" description="青山学院大学での講義レポート。データ分析の魅力を学生に伝えた記録。" source="note" author="@nash_efp" />
    </div>
  </section>

  <!-- ===== SPONSOR ===== -->
  <section class="obp-section" id="sponsor">
    <div class="obp-section-header">
      <span class="obp-section-icon">🏆</span>
      <div class="obp-section-meta">
        <h2 class="obp-section-title">スポンサー開催</h2>
        <p class="obp-section-desc">ブレインパッドが外部イベントのスポンサーとして支援した活動です。</p>
      </div>
    </div>
    <div class="obp-grid">
      <ContentCard
        title="BrainPad Programming Contest 2025（AHC046）"
        url="https://atcoder.jp/contests/ahc046"
        description="ブレインパッドが AtCoder Heuristic Contest 046 のスポンサーを務めました。数理最適化を題材にしたヒューリスティックコンテスト。1位賞金 10万円。"
        source="competitive"
        author="AtCoder Heuristic Contest"
      />
    </div>
  </section>

</div>

<div class="obp-recruit-banner">
  <svg class="obp-recruit-bg-svg" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <circle cx="80"  cy="60"  r="5" fill="rgba(165,180,252,0.18)"/>
    <circle cx="140" cy="100" r="8" fill="rgba(129,140,248,0.14)"/>
    <circle cx="60"  cy="160" r="4" fill="rgba(165,180,252,0.2)"/>
    <circle cx="200" cy="80"  r="6" fill="rgba(99,102,241,0.2)"/>
    <circle cx="160" cy="200" r="5" fill="rgba(165,180,252,0.15)"/>
    <circle cx="40"  cy="280" r="7" fill="rgba(129,140,248,0.12)"/>
    <circle cx="240" cy="300" r="4" fill="rgba(165,180,252,0.18)"/>
    <circle cx="100" cy="340" r="6" fill="rgba(99,102,241,0.15)"/>
    <line x1="80"  y1="60"  x2="140" y2="100" stroke="rgba(165,180,252,0.12)" stroke-width="1.5"/>
    <line x1="140" y1="100" x2="60"  y2="160" stroke="rgba(165,180,252,0.1)"  stroke-width="1.5"/>
    <line x1="140" y1="100" x2="200" y2="80"  stroke="rgba(165,180,252,0.12)" stroke-width="1.5"/>
    <line x1="60"  y1="160" x2="160" y2="200" stroke="rgba(165,180,252,0.08)" stroke-width="1.5"/>
    <line x1="160" y1="200" x2="240" y2="300" stroke="rgba(165,180,252,0.1)"  stroke-width="1.5"/>
    <g transform="translate(860, 60)" opacity="0.18">
      <rect x="0"   y="200" width="40" height="100" rx="4" fill="#818cf8"/>
      <rect x="55"  y="140" width="40" height="160" rx="4" fill="#6366f1"/>
      <rect x="110" y="80"  width="40" height="220" rx="4" fill="#818cf8"/>
      <rect x="165" y="120" width="40" height="180" rx="4" fill="#a5b4fc"/>
      <rect x="220" y="50"  width="40" height="250" rx="4" fill="#6366f1"/>
      <rect x="275" y="100" width="40" height="200" rx="4" fill="#818cf8"/>
    </g>
    <polyline points="880,370 930,320 990,340 1050,270 1110,295 1170,240 1200,260" fill="none" stroke="rgba(165,180,252,0.15)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="880"  cy="370" r="4" fill="rgba(165,180,252,0.2)"/>
    <circle cx="930"  cy="320" r="4" fill="rgba(165,180,252,0.2)"/>
    <circle cx="990"  cy="340" r="4" fill="rgba(165,180,252,0.2)"/>
    <circle cx="1050" cy="270" r="4" fill="rgba(165,180,252,0.2)"/>
    <circle cx="1110" cy="295" r="4" fill="rgba(165,180,252,0.2)"/>
    <circle cx="1170" cy="240" r="4" fill="rgba(165,180,252,0.2)"/>
    <circle cx="1080" cy="70"  r="5" fill="rgba(165,180,252,0.18)"/>
    <circle cx="1140" cy="40"  r="4" fill="rgba(129,140,248,0.14)"/>
    <circle cx="1160" cy="130" r="6" fill="rgba(165,180,252,0.16)"/>
    <line x1="1080" y1="70"  x2="1140" y2="40"  stroke="rgba(165,180,252,0.1)"  stroke-width="1.5"/>
    <line x1="1140" y1="40"  x2="1160" y2="130" stroke="rgba(165,180,252,0.1)"  stroke-width="1.5"/>
    <line x1="1080" y1="70"  x2="1160" y2="130" stroke="rgba(165,180,252,0.08)" stroke-width="1.5"/>
  </svg>
  <div class="obp-recruit-inner">
    <h2 class="obp-recruit-title">We are hiring!!</h2>
    <a href="https://www.brainpad.co.jp/recruit/" target="_blank" rel="noopener" class="obp-recruit-btn">採用情報を見る →</a>
  </div>
</div>
