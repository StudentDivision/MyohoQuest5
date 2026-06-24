const CHARACTERS = {
  defaultHeroName: "ユウキ",
  hero: {
    id: "hero",
    name: "主人公",
    role: "迷いを晴らす冒険者",
    spriteClass: "sprite-hero",
    // 外部画像を使う場合は例： "assets/images/hero.png"
    spritePath: "assets/images/hero.png",
    imagePixelated: false,
    fallbackMark: "🧑",
    imagePixelated: false
  },
  buddy: {
    id: "sora",
    name: "若鷲・ソラ",
    role: "勇者を励ます若鷲の相棒",
    personality: "若鷲をモチーフにした、爽やかで親しみやすい相棒。少し臆病なところもあるが、勇者を一生懸命励まし、学ぶことを希望に変えてくれる存在。",
    spriteClass: "sprite-sora",
    // 外部画像を使う場合は例： "assets/images/sora.png"
    spritePath: "assets/images/sora.png",
    fallbackMark: "🦅",
    imagePixelated: false
  }
};

const AREAS = [
  {
    id: "nichiren",
    name: "ニチレンの森",
    theme: "日蓮大聖人の仏法",
    boss: "シラナイママ",
    voiceLabel: "シラナイママ",
    stageCatch: "知らないままでいいという迷い",
    mark: "❔",
    hp: 200,
    doubt: "知らないことへの不安",
    intro: "森の奥で、「知らなくても困らない」という声が、学ぶ一歩を止めている。",
    bossLine: "知らないままでいい。学んだって、明日の自分は変わらない。",
    clearText: "「知ること」への不安が晴れ、森に小さな光の道が生まれた。",
    learn: [
      "日蓮大聖人の御生涯",
      "一生成仏という希望"
    ],
    rewardName: "妙法の小剣",
    spriteClass: "enemy-bat",
    // 外部画像を使う場合は例： "assets/images/enemies/bat.png"
    battleImagePath: "assets/images/battle/nichiren_enemy.png",
    spritePath: "",
    battleImagePosition: "center 42%",
    final: false,
    clearScenePath: "assets/images/clear/nichiren_clear.png",
    clearHeadline: "迷いが、ひとつ晴れた。",
    clearLead: "知らないままでいいという霧がほどけ、森に学びの光が差し込んだ。",
    clearEnemyLine: "シラナイママ「知らないままでいるのは、少し怖かっただけなんだね……。」",
    clearSoraLine: "迷いの霧が、光へ変わっていく！",
    clearCompanionText: "シラナイママはやわらかな光となり、旅路を見守る存在へ変わっていく。"
  },
  {
    id: "shingyo",
    name: "シンギョウの道場",
    theme: "信仰と実践",
    boss: "アトデヤル",
    voiceLabel: "アトデヤル",
    stageCatch: "一歩を先延ばしにする迷い",
    mark: "⏳",
    hp: 200,
    doubt: "行動できない弱さ",
    intro: "道場の前で、「あとでやればいい」という声が、小さな挑戦を先延ばしにさせている。",
    bossLine: "今日は疲れたでしょ。明日からでいいよ。最初の一歩なんて、重いだけだよ。",
    clearText: "先延ばしの声が静まり、道場の扉がゆっくりと開いた。",
    learn: [
      "三証で確かめる姿勢",
      "困難を成長へ変える実践"
    ],
    rewardName: "信行学の盾",
    spriteClass: "enemy-runaway",
    // 外部画像を使う場合は例： "assets/images/enemies/runaway.png"
    battleImagePath: "assets/images/battle/shingyo_enemy.png",
    spritePath: "",
    battleImagePosition: "center 34%",
    final: false,
    clearScenePath: "assets/images/clear/shingyo_clear.png",
    clearHeadline: "一歩の光が、道をひらいた。",
    clearLead: "先延ばしの迷いがほどけ、道場には前進の風が満ちていった。",
    clearEnemyLine: "アトデヤル「明日じゃなくて、今から一歩だけ進んでみるよ。」",
    clearSoraLine: "小さな一歩が、大きな勇気になりましたね！",
    clearCompanionText: "アトデヤルは重い影を脱ぎ捨て、挑戦を静かに後押しする存在へ変わっていく。"
  },
  {
    id: "seimei",
    name: "セイメイの湖",
    theme: "生命論",
    boss: "ヒカクノメ",
    voiceLabel: "ヒカクノメ",
    stageCatch: "生命の揺らぎに翻弄される迷い",
    mark: "👁️",
    hp: 220,
    doubt: "自分には価値がないという思い",
    intro: "湖面には、誰かと比べて揺れる心が大きく映し出されている。",
    bossLine: "ほら、あの人はすごい...。比べたら、私なんてたいしたことない。",
    clearText: "比べるまなざしがほどけ、湖面は一人一人の生命の可能性を映し始めた。",
    learn: [
      "十界と生命の状態",
      "十界互具が示す生命の可能性"
    ],
    rewardName: "生命尊厳の宝珠",
    spriteClass: "enemy-ghost",
    // 外部画像を使う場合は例： "assets/images/enemies/ghost.png"
    battleImagePath: "assets/images/battle/seimei_enemy.png",
    spritePath: "",
    battleImagePosition: "center 38%",
    final: false,
    clearScenePath: "assets/images/clear/seimei_clear.png",
    clearHeadline: "湖面に、希望が映った。",
    clearLead: "比べるまなざしがほどけ、一人ひとりの生命の輝きが湖に映りはじめた。",
    clearEnemyLine: "ヒカクノメ「私は、私の可能性を信じてみたい……。」",
    clearSoraLine: "この湖は、もう比べるための鏡ではありません！",
    clearCompanionText: "ヒカクノメは澄んだ光へ変わり、それぞれの生命の尊さを映す見守り手となった。"
  },
  {
    id: "jiyu",
    name: "ジユの大地",
    theme: "地涌の使命と実践",
    boss: "ジブンダケ",
    voiceLabel: "ジブンダケ",
    stageCatch: "「自分さえよければいい」という迷い",
    mark: "🪞",
    hp: 220,
    doubt: "使命を忘れる心",
    intro: "広い大地に、「自分だけで精いっぱい」という声が広がっている。",
    bossLine: "人のことまで考えなくていい...。自分だけ守れれば、それで十分だ。",
    clearText: "自分だけを守ろうとする霧が晴れ、大地に使命の風が吹き始めた。",
    learn: [
      "地涌の菩薩の使命",
      "善知識を大切にすること"
    ],
    rewardName: "地涌の旗",
    spriteClass: "enemy-oni",
    // 外部画像を使う場合は例： "assets/images/enemies/oni.png"
    battleImagePath: "assets/images/battle/jiyu_enemy.png",
    spritePath: "",
    battleImagePosition: "center 40%",
    final: false,
    clearScenePath: "assets/images/clear/jiyu_clear.png",
    clearHeadline: "使命の風が、大地を渡る。",
    clearLead: "自分だけを守ろうとする殻がほどけ、大地には人のために生きる風が吹き始めた。",
    clearEnemyLine: "ジブンダケ「守るだけじゃなく、誰かと進む道もあるんだね。」",
    clearSoraLine: "優しさは、自分を越えて広がっていくんですね……！",
    clearCompanionText: "ジブンダケは閉じた殻を破り、人と人をつなぐ希望の種へと姿を変えていく。"
  },
  {
    id: "sekai",
    name: "セカイコウフの港",
    theme: "世界広布と創価学会",
    boss: "キメツケロード",
    voiceLabel: "キメツケロード",
    stageCatch: "対話の前に、相手を決めつける迷い",
    mark: "🛣️",
    hp: 240,
    doubt: "人とつながれない慢心",
    intro: "港には、相手を決めつけてしまう霧が立ちこめ、対話の航路を隠している。",
    bossLine: "どうせ分かり合えないよ。相手の話を聞く前に、もう決めてしまえばいい。",
    clearText: "決めつけの霧が晴れ、対話と励ましを運ぶ航路が光り始めた。",
    learn: [
      "広宣流布の意味",
      "仏教の人間主義",
      "世界へ広がる励ましの連帯"
    ],
    rewardName: "広布の羅針盤",
    spriteClass: "enemy-ship",
    // 外部画像を使う場合は例： "assets/images/enemies/ship.png"
    battleImagePath: "assets/images/battle/sekai_enemy.png",
    spritePath: "",
    battleImagePosition: "center 36%",
    final: false,
    clearScenePath: "assets/images/clear/sekai_clear.png",
    clearHeadline: "対話の航路が、開かれた。",
    clearLead: "決めつけの霧が晴れ、港には励ましを運ぶ風と対話の航路が戻ってきた。",
    clearEnemyLine: "キメツケロード「決めつける前に、対話をすることが強さなんだね……。」",
    clearSoraLine: "話してみることで、見える景色ってあるんですね！",
    clearCompanionText: "キメツケロードは硬い輪郭を解き、対話を見守る穏やかな灯台の光へと変わっていく。"
  },
  {
    id: "soka",
    name: "ソウカの記念館",
    theme: "創価学会の歴史",
    boss: "ナガサレグモ",
    voiceLabel: "ナガサレグモ",
    stageCatch: "受け継いだ精神を、空気に流されて忘れる迷い",
    mark: "☁️",
    hp: 240,
    doubt: "受け継がれた精神を忘れる心",
    intro: "記念館の灯火が、「今さえよければいい」という風に揺らめいている。",
    bossLine: "歴史なんて古いだけ...。空気に合わせて流される方が楽だよ。",
    clearText: "流される心が静まり、受け継がれた灯火が再び強く輝いた。",
    learn: [
      "創価学会の創立",
      "三代会長の歩み",
      "平和と信念を受け継ぐ心"
    ],
    rewardName: "師弟の灯火",
    spriteClass: "enemy-book",
    // 外部画像を使う場合は例： "assets/images/enemies/book.png"
    battleImagePath: "assets/images/battle/soka_enemy.png",
    spritePath: "",
    battleImagePosition: "center 36%",
    final: false,
    clearScenePath: "assets/images/clear/soka_clear.png",
    clearHeadline: "受け継ぐ光が、未来を照らす。",
    clearLead: "流される心が静まり、受け継がれてきた灯火が、再び記念館に強くともった。",
    clearEnemyLine: "ナガサレグモ「流されるだけじゃなく、受け継いだ灯を抱いて進みたい。」",
    clearSoraLine: "歴史は、今を照らす希望の灯なんですね！",
    clearCompanionText: "ナガサレグモは漂う影をほどき、受け継ぐ心をそっと照らす光へと変わっていく。"
  },
  {
    id: "tower",
    name: "マヨイの塔",
    theme: "総合問題",
    boss: "アキラメノオウ",
    voiceLabel: "アキラメノオウ",
    stageCatch: "人間をあきらめさせる根本の迷い",
    mark: "👑",
    hp: 320,
    doubt: "人間をあきらめさせる根本の迷い",
    intro: "すべての迷いが集まる塔。希望のしるしを胸に、最後の一歩へ向かう。",
    bossLine: "人は変われない。希望なんて、すぐに消える幻にすぎない。",
    clearText: "塔を覆うあきらめの闇は晴れ、学びと励ましの光が世界へ広がっていった。",
    learn: [
      "教学は人を励ます知恵",
      "一人の変革が未来を開くこと",
      "迷いに負けない希望の心"
    ],
    rewardName: "希望の王冠",
    spriteClass: "enemy-final-boss",
    // 外部画像を使う場合は例： "assets/images/enemies/final-boss.png"
    battleImagePath: "assets/images/battle/final_enemy.png",
    spritePath: "",
    battleImagePosition: "center 32%",
    final: true,
    clearScenePath: "assets/images/clear/tower_clear.png",
    clearHeadline: "希望は、世界へひらかれた。",
    clearLead: "あきらめの闇は晴れ、学びと励ましの光が、新たな時代へと広がっていった。",
    clearEnemyLine: "アキラメノオウ「それでも、人は変われるんだね……。」",
    clearSoraLine: "ここから先は、希望を届ける本当の旅ですね！",
    clearCompanionText: "アキラメノオウの闇は光へと還り、人間の可能性を見守る大いなる希望へ変わっていく。"
  }
];

const QUESTIONS = [
  {
    id: 1,
    area: "nichiren",
    type: "year",
    question: "日蓮大聖人が誕生された年はいつですか？",
    choices: ["1222年", "1253年", "1271年", "1282年"],
    answer: 0,
    explanation: "日蓮大聖人は1222年、安房国に誕生されました。御生涯を学ぶ基本の年号です。",
    powerText: "誕生の光が、森の迷いを静かに照らした！"
  },
  {
    id: 2,
    area: "nichiren",
    type: "year",
    question: "日蓮大聖人が立宗宣言をされた年はいつですか？",
    choices: ["1222年", "1253年", "1260年", "1271年"],
    answer: 1,
    explanation: "1253年、日蓮大聖人は南無妙法蓮華経を唱え、立宗宣言をされました。",
    powerText: "立宗の一声が、黒い霧を切り開いた！"
  },
  {
    id: 3,
    area: "nichiren",
    type: "meaning",
    question: "『立正安国論』の中心的な願いとして近いものはどれですか？",
    choices: ["社会の安穏と人々の幸福", "自分だけの名声", "学問をやめること", "争いを広げること"],
    answer: 0,
    explanation: "『立正安国論』は、正しい法を根本に社会の安穏と人々の幸福を願う書です。",
    powerText: "安穏を願う言葉が、森に希望の風を起こした！"
  },
  {
    id: 4,
    area: "nichiren",
    type: "year",
    question: "竜の口の法難が起きた年はいつですか？",
    choices: ["1260年", "1271年", "1274年", "1282年"],
    answer: 1,
    explanation: "竜の口の法難は1271年に起きました。大聖人の御生涯の重要な転機です。",
    powerText: "大難を越える信念が、敵の翼を打ち払った！"
  },
  {
    id: 5,
    area: "nichiren",
    type: "term",
    question: "佐渡流罪に関する説明として近いものはどれですか？",
    choices: ["大聖人が佐渡へ流された大難", "創価学会の創立日", "SGIの発足", "原水爆禁止宣言"],
    answer: 0,
    explanation: "佐渡流罪は、日蓮大聖人が佐渡へ流された大難です。その中で重要な御書も著されました。",
    powerText: "厳しい地にも消えない信念が、迷いを押し返した！"
  },
  {
    id: 6,
    area: "nichiren",
    type: "term",
    question: "南無妙法蓮華経についての説明として近いものはどれですか？",
    choices: ["日蓮仏法の根本となる題目", "単なる挨拶", "寺院の名前", "歴史上の地名"],
    answer: 0,
    explanation: "南無妙法蓮華経は、日蓮仏法の根本となる題目です。唱題は生命を磨く実践です。",
    powerText: "妙法の響きが、森の奥まで明るく広がった！"
  },
  {
    id: 7,
    area: "nichiren",
    type: "meaning",
    question: "一生成仏の説明として近いものはどれですか？",
    choices: ["この一生で仏の境涯を開くこと", "来世だけを待つこと", "学びを避けること", "人と比べること"],
    answer: 0,
    explanation: "一生成仏は、この一生で仏の境涯を開くことを示します。今を大切にする希望の教えです。",
    powerText: "今を変える希望が、迷いの根を断ち切った！"
  },
  {
    id: 8,
    area: "nichiren",
    type: "term",
    question: "三大秘法に含まれるものはどれですか？",
    choices: ["本門の本尊・本門の題目・本門の戒壇", "文証・理証・現証", "信・行・学", "地獄・餓鬼・畜生"],
    answer: 0,
    explanation: "三大秘法は、本門の本尊・本門の題目・本門の戒壇を指します。",
    powerText: "根本の法門が、ムチシキバットの影を貫いた！"
  },
  {
    id: 9,
    area: "nichiren",
    type: "life",
    question: "教学を学ぶ姿勢として、もっとも近いものはどれですか？",
    choices: ["人を励ます知恵として学ぶ", "人を責める材料にする", "暗記だけで終わらせる", "自分だけ偉く見せる"],
    answer: 0,
    explanation: "教学は、人を責めるためではなく、自他の幸福を開くために学ぶ知恵です。",
    powerText: "励ましの知恵が、森の不安をやさしく照らした！"
  },

  {
    id: 10,
    area: "shingyo",
    type: "term",
    question: "三証とは何ですか？",
    choices: ["文証・理証・現証", "信・行・学", "身・口・意", "春・夏・秋"],
    answer: 0,
    explanation: "三証とは、文証・理証・現証のことです。教えの正しさを確かめる視点です。",
    powerText: "三つの証が、逃げ道を照らし出した！"
  },
  {
    id: 11,
    area: "shingyo",
    type: "term",
    question: "文証の説明として近いものはどれですか？",
    choices: ["経文や御書など文献上の根拠", "実際の結果だけを見ること", "気分で判断すること", "人の噂を信じること"],
    answer: 0,
    explanation: "文証は、経文や御書など文献上の根拠を指します。教学を確かめる大切な柱です。",
    powerText: "確かな言葉の力が、迷いの影を退けた！"
  },
  {
    id: 12,
    area: "shingyo",
    type: "meaning",
    question: "理証の説明として近いものはどれですか？",
    choices: ["道理にかなっていること", "声が大きいこと", "人数が多いこと", "古ければ正しいこと"],
    answer: 0,
    explanation: "理証は、道理にかなっているかを見ることです。納得できる筋道も大切にします。",
    powerText: "道理の光が、混乱の雲を晴らした！"
  },
  {
    id: 13,
    area: "shingyo",
    type: "practice",
    question: "現証を生活で大切にする姿勢として近いものはどれですか？",
    choices: ["実践して変化を確かめる", "何もせず結果だけ待つ", "噂だけで判断する", "学びを避ける"],
    answer: 0,
    explanation: "現証は、実際の結果や体験によって確かめることです。行動が学びを深めます。",
    powerText: "実践の一歩が、ナンデモニゲルを押し返した！"
  },
  {
    id: 14,
    area: "shingyo",
    type: "term",
    question: "信行学の説明として正しいものはどれですか？",
    choices: ["信じ、実践し、学ぶこと", "知識だけを集めること", "人と関わらないこと", "結果を気にしないこと"],
    answer: 0,
    explanation: "信行学は、信じる心、実践、学びを一体で進めることです。",
    powerText: "信行学の盾が、弱気な心を守った！"
  },
  {
    id: 15,
    area: "shingyo",
    type: "practice",
    question: "自行化他の説明として近いものはどれですか？",
    choices: ["自分も実践し、人にも仏法を語ること", "自分だけ満足すること", "他人にすべて任せること", "何も行動しないこと"],
    answer: 0,
    explanation: "自行化他とは、自分の実践と、他者を励ます実践の両方を大切にすることです。",
    powerText: "自他を照らす実践が、道場に光を満たした！"
  },
  {
    id: 16,
    area: "shingyo",
    type: "meaning",
    question: "三障四魔とは何を表しますか？",
    choices: ["成長や信心を妨げる働き", "昔の遊び", "地名の名前", "必ず避けるべき学問"],
    answer: 0,
    explanation: "三障四魔は、信心や成長を妨げる働きを表します。乗り越えることで強くなれます。",
    powerText: "障害を見抜く知恵が、逃げる心を弱めた！"
  },
  {
    id: 17,
    area: "shingyo",
    type: "life",
    question: "宿命転換の理解として近いものはどれですか？",
    choices: ["苦難を成長と使命に変えること", "過去を嘆き続けること", "何もしないこと", "人のせいにすること"],
    answer: 0,
    explanation: "宿命転換とは、苦しみや課題を乗り越え、成長と使命へ変えていく考え方です。",
    powerText: "苦難を越える勇気が、道場の床を強く踏みしめた！"
  },
  {
    id: 18,
    area: "shingyo",
    type: "meaning",
    question: "変毒為薬の説明として近いものはどれですか？",
    choices: ["苦しみを価値ある成長へ変える", "毒をそのまま飲む", "失敗を隠す", "努力を否定する"],
    answer: 0,
    explanation: "変毒為薬とは、苦難や悩みを価値ある成長や使命へ変えていく考え方です。",
    powerText: "悩みを力に変える光が、敵の足を止めた！"
  },
  {
    id: 19,
    area: "shingyo",
    type: "practice",
    question: "異体同心の意味として近いものはどれですか？",
    choices: ["違いを持つ人々が心を合わせること", "全員が同じ姿になること", "一人で全部行うこと", "意見を言わないこと"],
    answer: 0,
    explanation: "異体同心とは、個性や立場は違っても、同じ目的へ心を合わせて進むことです。",
    powerText: "心を合わせる力が、道場の扉を大きく開いた！"
  },

  {
    id: 20,
    area: "seimei",
    type: "term",
    question: "十界とは何を表す教えですか？",
    choices: ["生命の十種の境涯", "十個の建物", "十人の弟子", "十種類の文字"],
    answer: 0,
    explanation: "十界は、生命にそなわる十種の境涯を示す教えです。",
    powerText: "生命を見つめる光が、湖面の揺れを静めた！"
  },
  {
    id: 21,
    area: "seimei",
    type: "term",
    question: "六道に含まれないものはどれですか？",
    choices: ["地獄界", "餓鬼界", "畜生界", "仏界"],
    answer: 3,
    explanation: "六道は地獄・餓鬼・畜生・修羅・人・天です。仏界は四聖に含まれます。",
    powerText: "境涯を見分ける知恵が、湖の霧を払った！"
  },
  {
    id: 22,
    area: "seimei",
    type: "term",
    question: "四聖に含まれるものはどれですか？",
    choices: ["声聞・縁覚・菩薩・仏", "地獄・餓鬼・畜生・修羅", "東・西・南・北", "春・夏・秋・冬"],
    answer: 0,
    explanation: "四聖は、声聞・縁覚・菩薩・仏の四つです。悟りや利他へ向かう境涯です。",
    powerText: "利他の光が、ココロユラシの影を薄くした！"
  },
  {
    id: 23,
    area: "seimei",
    type: "meaning",
    question: "十界互具の説明として正しいものはどれですか？",
    choices: ["一つの境涯にも他の境涯がそなわる", "境涯は固定される", "仏界は誰にもない", "十界は数字だけの教え"],
    answer: 0,
    explanation: "十界互具は、一つの境涯の中にも他の境涯がそなわるという教えです。",
    powerText: "変われる希望が、湖の闇を照らした！"
  },
  {
    id: 24,
    area: "seimei",
    type: "meaning",
    question: "一念三千の説明として近いものはどれですか？",
    choices: ["一瞬の生命に豊かな可能性がそなわる", "三千年だけ修行する", "数字を覚えるだけ", "世界は変わらない"],
    answer: 0,
    explanation: "一念三千は、一瞬の生命に大きな可能性がそなわることを示す法理です。",
    powerText: "一念の力が、湖に広がる波紋となった！"
  },
  {
    id: 25,
    area: "seimei",
    type: "term",
    question: "十如是とは何に関わる教えですか？",
    choices: ["生命のあり方を十の面から見る教え", "十種類の建物", "十人の王", "十個の道具"],
    answer: 0,
    explanation: "十如是は、生命のあり方を十の面から見る教えです。一念三千にも関わります。",
    powerText: "生命を多面的に見る知恵が、迷いをほどいた！"
  },
  {
    id: 26,
    area: "seimei",
    type: "term",
    question: "三世間に含まれるものとして正しいものはどれですか？",
    choices: ["五陰世間・衆生世間・国土世間", "過去・現在・未来だけ", "天地人だけ", "春夏秋冬"],
    answer: 0,
    explanation: "三世間は、五陰世間・衆生世間・国土世間を指し、生命と環境を考える視点です。",
    powerText: "生命と世界を結ぶ光が、湖面いっぱいに広がった！"
  },
  {
    id: 27,
    area: "seimei",
    type: "life",
    question: "依正不二を生活に生かす考え方として近いものはどれですか？",
    choices: ["自分の変革が環境にもよい影響を与える", "環境は絶対に変わらない", "周囲だけを責める", "自分の行動は無意味"],
    answer: 0,
    explanation: "依正不二は、自分と環境が深く結びつくことを示します。自分の変化が周囲にも響きます。",
    powerText: "自分を変える一念が、湖の景色を明るく変えた！"
  },
  {
    id: 28,
    area: "seimei",
    type: "life",
    question: "『自分には価値がない』と感じた時、生命論が示す希望はどれですか？",
    choices: ["どんな生命にも尊い可能性がある", "価値は一部の人だけにある", "比べて勝つことだけが大切", "何も変わらない"],
    answer: 0,
    explanation: "仏法の生命観は、誰の生命にも尊い可能性があると示します。自分を信じる力になります。",
    powerText: "生命尊厳の宝珠が、自己否定の闇を押し返した！"
  },

  {
    id: 29,
    area: "jiyu",
    type: "term",
    question: "地涌の菩薩の説明として近いものはどれですか？",
    choices: ["人々を救う使命を持つ菩薩", "地面だけを守る存在", "過去にしかいない人", "修行を嫌う人"],
    answer: 0,
    explanation: "地涌の菩薩は、末法の時代に妙法を弘め、人々を励ます使命を持つ存在です。",
    powerText: "大地から使命の光が湧き上がった！"
  },
  {
    id: 30,
    area: "jiyu",
    type: "term",
    question: "地涌の菩薩が説かれる法華経の品として正しいものはどれですか？",
    choices: ["従地涌出品", "方便品", "薬草喩品", "安楽行品"],
    answer: 0,
    explanation: "地涌の菩薩は、法華経の従地涌出品で説かれます。使命の象徴です。",
    powerText: "地涌の旗が、大地の風を呼び覚ました！"
  },
  {
    id: 31,
    area: "jiyu",
    type: "meaning",
    question: "如来神力品に関係が深い内容として近いものはどれですか？",
    choices: ["妙法を未来へ弘める付嘱", "料理の作法", "暦の計算", "建物の設計"],
    answer: 0,
    explanation: "如来神力品は、妙法を未来へ弘める使命と深く関わる重要な品です。",
    powerText: "未来へ託された力が、ワスレノオニを揺さぶった！"
  },
  {
    id: 32,
    area: "jiyu",
    type: "practice",
    question: "御書根本の姿勢として近いものはどれですか？",
    choices: ["御書を根本に学び実践する", "気分だけで決める", "学びを避ける", "人を責める"],
    answer: 0,
    explanation: "御書根本とは、日蓮大聖人の御書を根本として学び、実践に生かす姿勢です。",
    powerText: "御書の一節が、忘却の霧を切り裂いた！"
  },
  {
    id: 33,
    area: "jiyu",
    type: "term",
    question: "善知識とはどのような存在ですか？",
    choices: ["成長を助けるよき縁や人", "必ず避ける人", "敵だけを指す言葉", "忘れ物の名前"],
    answer: 0,
    explanation: "善知識は、仏道修行や成長を助けてくれるよき縁や人を指します。",
    powerText: "よき縁の光が、大地に道を描いた！"
  },
  {
    id: 34,
    area: "jiyu",
    type: "meaning",
    question: "悪知識の説明として近いものはどれですか？",
    choices: ["成長や信心を妨げる縁", "必ずよい先生", "本だけの名前", "喜びを増やす縁"],
    answer: 0,
    explanation: "悪知識は、成長や信心を妨げる悪い縁を表します。流されない自分が大切です。",
    powerText: "悪い縁を見抜く知恵が、敵のささやきを断った！"
  },
  {
    id: 35,
    area: "jiyu",
    type: "term",
    question: "色心不二の説明として近いものはどれですか？",
    choices: ["身体と心は深く結びついている", "心と身体は無関係", "身体だけが大切", "心だけ見ればよい"],
    answer: 0,
    explanation: "色心不二は、身体と心が別々ではなく深く関係しているという考え方です。",
    powerText: "心身を結ぶ光が、迷いの鎖をほどいた！"
  },
  {
    id: 36,
    area: "jiyu",
    type: "life",
    question: "使命を忘れそうな時の実践として近いものはどれですか？",
    choices: ["御書を学び、身近な人を励ます", "何もせずあきらめる", "人を避け続ける", "学びを捨てる"],
    answer: 0,
    explanation: "使命は特別な場所だけでなく、身近な人を励ます一歩の中にも現れます。",
    powerText: "小さな励ましが、大地に眠る使命を呼び覚ました！"
  },
  {
    id: 37,
    area: "jiyu",
    type: "practice",
    question: "『自分だけよければいい』という思いを越える実践はどれですか？",
    choices: ["誰かの幸福を願って行動する", "人の悩みを笑う", "関わりを避ける", "自分の得だけ考える"],
    answer: 0,
    explanation: "地涌の使命は、他者の幸福を願う行動に表れます。身近な一人への励ましから始まります。",
    powerText: "利他の一歩が、ワスレノオニの角を砕いた！"
  },

  {
    id: 38,
    area: "sekai",
    type: "term",
    question: "広宣流布の説明として近いものはどれですか？",
    choices: ["平和と幸福のために妙法を広めること", "自分だけ得をすること", "争いを広げること", "歴史を忘れること"],
    answer: 0,
    explanation: "広宣流布とは、妙法を根本に人々の幸福と社会の平和を広げていく実践です。",
    powerText: "広布の羅針盤が、霧の港に航路を示した！"
  },
  {
    id: 39,
    area: "sekai",
    type: "term",
    question: "創価学会の初代会長は誰ですか？",
    choices: ["牧口常三郎先生", "戸田城聖先生", "池田大作先生", "日蓮大聖人"],
    answer: 0,
    explanation: "創価学会の初代会長は牧口常三郎先生です。価値創造の思想を掲げました。",
    powerText: "価値創造の光が、港の灯台をともした！"
  },
  {
    id: 40,
    area: "sekai",
    type: "term",
    question: "創価学会の第2代会長は誰ですか？",
    choices: ["戸田城聖先生", "牧口常三郎先生", "池田大作先生", "釈尊"],
    answer: 0,
    explanation: "第2代会長は戸田城聖先生です。戦後の広宣流布を大きく進められました。",
    powerText: "師弟の継承が、港に力強い風を起こした！"
  },
  {
    id: 41,
    area: "sekai",
    type: "term",
    question: "創価学会の第3代会長は誰ですか？",
    choices: ["池田大作先生", "牧口常三郎先生", "戸田城聖先生", "日蓮大聖人"],
    answer: 0,
    explanation: "第3代会長は池田大作先生です。世界広布を大きく進められました。",
    powerText: "世界へ向かう励ましの帆が、大きく広がった！"
  },
  {
    id: 42,
    area: "sekai",
    type: "meaning",
    question: "人間革命の説明として近いものはどれですか？",
    choices: ["一人の内面の変革が周囲や社会を変える", "他人だけを変えること", "努力をやめること", "昔の出来事だけを覚えること"],
    answer: 0,
    explanation: "人間革命とは、一人の内面の変革が周囲や社会の変革につながるという考え方です。",
    powerText: "一人の変革が、港の波を明るく変えた！"
  },
  {
    id: 43,
    area: "sekai",
    type: "meaning",
    question: "世界広布の理解として近いものはどれですか？",
    choices: ["国境を越えて平和と幸福の連帯を広げる", "海外へ行くだけのこと", "一つの国だけで完結する", "文化交流を否定する"],
    answer: 0,
    explanation: "世界広布は、国や文化の違いを超えて平和と幸福の連帯を広げる取り組みです。",
    powerText: "世界へ続く海路が、まばゆく輝き出した！"
  },
  {
    id: 44,
    area: "sekai",
    type: "life",
    question: "仏教の人間主義として近い考えはどれですか？",
    choices: ["一人一人の生命を尊重する", "人を見下す", "権威だけを重んじる", "対話を避ける"],
    answer: 0,
    explanation: "仏教の人間主義は、一人一人の生命を尊重し、幸福を願う考え方です。",
    powerText: "生命尊厳の言葉が、慢心の波を静めた！"
  },
  {
    id: 45,
    area: "sekai",
    type: "meaning",
    question: "仏法西還の説明として近いものはどれですか？",
    choices: ["東洋から西洋へ仏法が広がる意義", "仏法が消えること", "西だけが正しいという意味", "船旅の名前"],
    answer: 0,
    explanation: "仏法西還は、仏法が世界へ広がっていく意義を表す言葉として学ばれます。",
    powerText: "遠くへ届く希望の風が、港の霧を払った！"
  },
  {
    id: 46,
    area: "sekai",
    type: "practice",
    question: "人とつながれない慢心を越える行動として近いものはどれですか？",
    choices: ["相手を尊重して対話する", "自分の正しさだけ押しつける", "相手を見下す", "話を聞かない"],
    answer: 0,
    explanation: "対話は、相手の生命を尊重するところから始まります。聞く姿勢も広布の実践です。",
    powerText: "対話の帆が上がり、ゴーマンロードを押し返した！"
  },

  {
    id: 47,
    area: "soka",
    type: "year",
    question: "創価学会が創立された日はいつですか？",
    choices: ["1930年11月18日", "1945年7月3日", "1951年5月3日", "1975年1月26日"],
    answer: 0,
    explanation: "創価学会は1930年11月18日に創立されました。創価教育学会の創立の日です。",
    powerText: "創立の灯火が、記念館に再びともった！"
  },
  {
    id: 48,
    area: "soka",
    type: "term",
    question: "牧口常三郎先生は創価学会の何代会長ですか？",
    choices: ["初代", "第2代", "第3代", "第4代"],
    answer: 0,
    explanation: "牧口常三郎先生は初代会長です。教育者として価値創造の思想を広げました。",
    powerText: "価値創造の精神が、忘却の影を照らした！"
  },
  {
    id: 49,
    area: "soka",
    type: "year",
    question: "戸田城聖先生が第2代会長に就任された日はいつですか？",
    choices: ["1951年5月3日", "1957年9月8日", "1960年5月3日", "1975年1月26日"],
    answer: 0,
    explanation: "戸田城聖先生は1951年5月3日に第2代会長に就任されました。",
    powerText: "広布への誓いが、記念館の扉を開いた！"
  },
  {
    id: 50,
    area: "soka",
    type: "year",
    question: "牧口先生と戸田先生が逮捕された日はいつですか？",
    choices: ["1943年7月6日", "1944年11月18日", "1945年7月3日", "1930年11月18日"],
    answer: 0,
    explanation: "1943年7月6日、牧口先生と戸田先生は軍部政府の弾圧により逮捕されました。",
    powerText: "信念を貫く光が、闇の記憶を乗り越えた！"
  },
  {
    id: 51,
    area: "soka",
    type: "year",
    question: "牧口常三郎先生が殉教された日はいつですか？",
    choices: ["1944年11月18日", "1945年7月3日", "1951年5月3日", "1960年5月3日"],
    answer: 0,
    explanation: "牧口先生は1944年11月18日、獄中で逝去されました。信念を貫いた歴史です。",
    powerText: "不屈の精神が、忘却の風を止めた！"
  },
  {
    id: 52,
    area: "soka",
    type: "year",
    question: "戸田城聖先生が出獄された日はいつですか？",
    choices: ["1945年7月3日", "1944年11月18日", "1951年5月3日", "1975年1月26日"],
    answer: 0,
    explanation: "戸田先生は1945年7月3日に出獄されました。戦後の広布への出発点です。",
    powerText: "出獄の日の光が、新たな歩みを照らした！"
  },
  {
    id: 53,
    area: "soka",
    type: "year",
    question: "1957年9月8日に戸田先生が発表されたものは何ですか？",
    choices: ["原水爆禁止宣言", "立宗宣言", "SGI発足宣言", "創価学会創立宣言"],
    answer: 0,
    explanation: "戸田先生は1957年9月8日、原水爆禁止宣言を発表されました。生命尊厳の叫びです。",
    powerText: "平和への叫びが、記念館いっぱいに響いた！"
  },
  {
    id: 54,
    area: "soka",
    type: "year",
    question: "池田大作先生が第3代会長に就任された日はいつですか？",
    choices: ["1960年5月3日", "1951年5月3日", "1975年1月26日", "1945年7月3日"],
    answer: 0,
    explanation: "池田大作先生は1960年5月3日に第3代会長に就任されました。",
    powerText: "世界へ進む決意が、歴史の灯を強くした！"
  },
  {
    id: 55,
    area: "soka",
    type: "year",
    question: "SGIが発足した日はいつですか？",
    choices: ["1975年1月26日", "1960年5月3日", "1957年9月8日", "1930年11月18日"],
    answer: 0,
    explanation: "SGIは1975年1月26日に発足しました。世界広布の大きな節目です。",
    powerText: "世界へ広がる連帯が、記念館の窓を開いた！"
  },
  {
    id: 56,
    area: "soka",
    type: "life",
    question: "歴史を学ぶ意味として近いものはどれですか？",
    choices: ["受け継がれた精神を今に生かす", "年号だけで満足する", "過去を忘れる", "人と比べる材料にする"],
    answer: 0,
    explanation: "歴史は暗記だけでなく、受け継がれた精神を今の行動に生かすために学びます。",
    powerText: "受け継ぐ心が、レキシワスレの本を開いた！"
  },

  {
    id: 57,
    area: "tower",
    type: "meaning",
    question: "第六天の魔王のささやき『人は変われぬ』に対し、希望を示す法理はどれですか？",
    choices: ["十界互具", "単なるあきらめ", "無関心", "慢心"],
    answer: 0,
    explanation: "十界互具は、どんな生命にも仏界がそなわることを示します。人は変われるという希望の法理です。",
    powerText: "十界互具の光が、魔王の闇を切り裂いた！"
  },
  {
    id: 58,
    area: "tower",
    type: "term",
    question: "三証のうち、実際の結果や体験によって確かめるものはどれですか？",
    choices: ["文証", "理証", "現証", "空証"],
    answer: 2,
    explanation: "現証は、実際の結果や体験によって教えの正しさを確かめるものです。",
    powerText: "現証の一撃が、魔王の言葉を打ち返した！"
  },
  {
    id: 59,
    area: "tower",
    type: "meaning",
    question: "第六天の魔王の『苦しみは無意味だ』という迷いに対し、近い教えはどれですか？",
    choices: ["変毒為薬", "慢心", "無関心", "責任転嫁"],
    answer: 0,
    explanation: "変毒為薬は、苦難や悩みを価値ある成長や使命へ変えていく考え方です。",
    powerText: "変毒為薬の力が、絶望を希望へ変えた！"
  },
  {
    id: 60,
    area: "tower",
    type: "life",
    question: "『自分には価値がない』という迷いに対し、生命論が示す希望はどれですか？",
    choices: ["誰の生命にも尊い可能性がある", "価値は一部の人だけにある", "人は比べるためにいる", "学びは意味がない"],
    answer: 0,
    explanation: "仏法の生命観は、誰の生命にも尊い可能性があることを示します。自分を信じる力になります。",
    powerText: "生命尊厳の宝珠が、自己否定の闇を砕いた！"
  },
  {
    id: 61,
    area: "tower",
    type: "practice",
    question: "広宣流布の身近な実践として近いものはどれですか？",
    choices: ["友人を励まし、幸福を願って対話する", "相手を見下す", "学びを独占する", "人との関わりを断つ"],
    answer: 0,
    explanation: "広宣流布は、身近な人を励まし、幸福を願って対話することから始まります。",
    powerText: "励ましの対話が、塔の闇に穴を開けた！"
  },
  {
    id: 62,
    area: "tower",
    type: "life",
    question: "依正不二を生活に生かす考え方として近いものはどれですか？",
    choices: ["自分の変革が環境にもよい影響を与える", "環境は絶対に変わらない", "周囲だけを責める", "自分の行動は無意味"],
    answer: 0,
    explanation: "依正不二は、自分と環境が深く結びつくことを示します。自分の変化が周囲にも響きます。",
    powerText: "一念の変革が、塔の景色を変え始めた！"
  },
  {
    id: 63,
    area: "tower",
    type: "practice",
    question: "信行学の関係として適切なものはどれですか？",
    choices: ["信・行・学を一体で進める", "学だけで実践しない", "行だけで学ばない", "信心と生活は無関係"],
    answer: 0,
    explanation: "信行学は、信じる心、実践、学びを一体で進めることが大切です。",
    powerText: "信行学の盾が、魔王のささやきを受け止めた！"
  },
  {
    id: 64,
    area: "tower",
    type: "practice",
    question: "第六天の魔王の『どうせ無理だ』という迷いに勝つ姿勢はどれですか？",
    choices: ["小さくても一歩行動する", "何もせず待つ", "人を責める", "学びを捨てる"],
    answer: 0,
    explanation: "信行学の実践は、小さな一歩から始まります。行動が迷いを晴らします。",
    powerText: "小さな一歩が、魔王の足元を揺るがした！"
  },
  {
    id: 65,
    area: "tower",
    type: "life",
    question: "友人が落ち込んでいる時、教学を生かす姿勢として近いものはどれですか？",
    choices: ["相手の生命を信じて励ます", "正論だけを押しつける", "弱さを責める", "関わらない"],
    answer: 0,
    explanation: "教学は人を責めるためでなく、相手の生命を信じて励ますための知恵です。",
    powerText: "励ましの言葉が、塔にあたたかな光をともした！"
  },
  {
    id: 66,
    area: "tower",
    type: "meaning",
    question: "『人間革命』が示す希望として近いものはどれですか？",
    choices: ["一人の変革が周囲を変えていく", "社会は絶対に変わらない", "他人だけ変えればよい", "努力は意味がない"],
    answer: 0,
    explanation: "人間革命は、一人の内面の変革が家庭や地域、社会へ広がるという希望の哲学です。",
    powerText: "一人の変革の光が、魔王の玉座を照らした！"
  },
  {
    id: 67,
    area: "tower",
    type: "year",
    question: "生命尊厳の精神を示す、戸田先生の原水爆禁止宣言はいつ発表されましたか？",
    choices: ["1957年9月8日", "1930年11月18日", "1960年5月3日", "1975年1月26日"],
    answer: 0,
    explanation: "戸田先生は1957年9月8日、原水爆禁止宣言を発表されました。生命尊厳の叫びです。",
    powerText: "生命尊厳の叫びが、塔の闇を震わせた！"
  },
  {
    id: 68,
    area: "tower",
    type: "practice",
    question: "第六天の魔王が『人を信じても傷つくだけだ』とささやく時、近い実践はどれですか？",
    choices: ["相手を尊重し、誠実に対話する", "最初から疑い続ける", "相手を避ける", "自分だけ守る"],
    answer: 0,
    explanation: "対話は、相手の生命を尊重するところから始まります。誠実さが信頼の一歩になります。",
    powerText: "誠実な対話が、魔王の孤独の鎖を断った！"
  },
  {
    id: 69,
    area: "tower",
    type: "life",
    question: "歴史を学ぶ意味として近いものはどれですか？",
    choices: ["受け継がれた精神を今に生かす", "年号だけで満足する", "過去を忘れる", "人と比べる材料にする"],
    answer: 0,
    explanation: "歴史は暗記だけでなく、受け継がれた精神を今の行動に生かすために学びます。",
    powerText: "師弟の灯火が、最後の闇を照らし始めた！"
  },
  {
    id: 70,
    area: "tower",
    type: "practice",
    question: "教学を学んだ後に大切な姿勢として、もっとも近いものはどれですか？",
    choices: ["身近な一人を励ます行動につなげる", "知識を自慢する", "人の間違いだけ探す", "自分だけ満足する"],
    answer: 0,
    explanation: "教学は、学んで終わりではなく、人を励まし、自分の行動を変える力にしていくことが大切です。",
    powerText: "希望の王冠が輝き、第六天の魔王の闇を打ち破った！"
  }
];

const BUDDY_LINES = {
  start: [
    "よし、まずは一問！ 肩の力ぬいていこう",
    "分からないところからで大丈夫！ そこから始めよう",
    "焦らなくていいよ！ ちょっとずつ分かれば十分",
    "教学って、誰かを責めるためじゃなくて、支えるための知恵だと思う！",
    "いきなり完璧じゃなくていい！ まずは一緒にやってみよう",
    "小さくても一歩は一歩！ ここから行こう"
  ],

  correct: [
    "いいね、その答え！",
    "正解！ 今の、けっこう大事なところだよ",
    "やるね！ ちゃんとつかめてる",
    "うん、その感じ！ 少しずつ見えてきたね",
    "今の答え、誰かを励ます時にも使えそう！",
    "ナイス！ 一問分、ちゃんと強くなった"
  ],

  wrong: [
    "大丈夫！ ここで覚えればいいよ",
    "惜しい！ でも今ので、逆に覚えやすくなったかも",
    "焦らなくていい！ もう一回見れば、ちゃんと入る",
    "ここで止まらなければ大丈夫！ 次いこう",
    "迷うのは普通だよ！ 答えを見て、ちょっとずつ慣れよう",
    "今の一問、あとで効いてくるやつだと思う！"
  ],

  victory: [
    "やったね！ ひとつ越えた！",
    "いい感じ！ 空が少し広くなった気がする",
    "ここまで来たの、ちゃんと意味あるよ！",
    "今の学び、きっとどこかで誰かの力になる！",
    "よかった！ 一緒に進めて、うれしい",
    "次もいけるよ！ 今の流れ、大事にしよう"
  ],

  defeat: [
    "大丈夫！ ここで終わりじゃないよ",
    "悔しいね！ でも、まだやり直せる",
    "今日はちょっと迷いが強かっただけ！ また行こう",
    "少し休んで、もう一回いこう！ 立て直せばいい",
    "負けても、覚えた分はちゃんと残ってる！",
    "ここまで来たことも、次の力になるよ！"
  ],

  boss: [
    "空気、ちょっと重いね！ でも一問ずついこう",
    "相手は強いけど、焦らなければ大丈夫！",
    "深呼吸しよう！ 今の一問だけ見ればいい",
    "こういう時こそ、落ち着いて選ぼう！",
    "最後まで一緒にいるよ！ ちゃんと見てる",
    "ここまで来たんだ！ あと少し、前を見よう"
  ],

  final: [
    "第六天の魔王の声は強い！ でも、ここで終わりじゃない",
    "迷いは心を狭くする！ でも、学びはちゃんと道を開いてくれる",
    "ここまでやってきたこと、全部いまの力になってる！",
    "最後まで一緒に行こう！ まだ光は消えてない",
    "人の生命をあきらめない！ それが、僕たちの答えだよ",
    "怖くても進もう！ 夜明けは、ちゃんと向こうにある"
  ],

  review: [
    "復習だね！ ここ、地味だけどかなり大事",
    "間違えた問題って、伸びしろが見える場所なんだよね！",
    "一度見た道なら、次は少し歩きやすいはず！",
    "焦らず取り戻そう！ ちゃんと積み上がっていくから",
    "復習できる人は強いよ！ ほんとに",
    "前に間違えたところを、今日は味方にしよう！"
  ]
};

const TITLE_RULES = [
  {
    title: "ミョウホウ・チャンピオン",
    minCleared: 7,
    minRate: 0
  },
  {
    title: "第六天を越えし者",
    minCleared: 7,
    minRate: 0.7
  },
  {
    title: "広布の勇者",
    minCleared: 5,
    minRate: 0
  },
  {
    title: "迷いを斬る冒険者",
    minCleared: 3,
    minRate: 0
  },
  {
    title: "希望を鍛える者",
    minCleared: 1,
    minRate: 0.7
  },
  {
    title: "教学の旅人",
    minCleared: 0,
    minRate: 0
  }
];

const STORY_TEXTS = {
  prologue: [
    "世界に、“迷い”の霧が広がっていた。",
    "「どうせ無理だ」「自分なんて変われない」――そんな声が、人々の心を暗くしていく。",
    "その奥には、人間をあきらめさせる大きな迷いがひそんでいた。",
    "主人公は、小さな相棒ソラと出会う。",
    "ソラは言った。「教学には、人を励ます力があるんです。一つずつ学べば、きっと迷いを晴らせます。」",
    "こうして、希望のしるしを集める旅が始まった。"
  ],
  nameIntro: [
    "旅立つ前に、冒険者の名前を決めましょう。",
    "この名前で、ソラと一緒に迷いを晴らす旅へ出発します。"
  ],
  beforeFinal: [
    "六つの地に広がっていた迷いは晴れ、希望のしるしが集まった。",
    "けれど、マヨイの塔からは、まだ暗い声が響いている。",
    "第六天の魔王が待っている。人間をあきらめさせる、根本の迷いそのものが。",
    "ソラは少し震えながらも、前を向いた。",
    "「こわいけど…ここまで学んできたことは、きっと力になります。最後まで、一緒に進みましょう！」"
  ],
  ending: [
    "第六天の魔王は倒れ、マヨイの塔を覆っていた闇は静かに消えていった。",
    "世界に広がっていた霧は晴れ、人々の心に小さな光が戻り始める。",
    "けれど、迷いはこれからも、何度だって現れるかもしれない。",
    "だからこそ、この旅で学んだ教学は、これからの一歩を照らしてくれる。"
  ],
  endingAfterword: [
    "ソラは言った。「迷いは何度でも現れるけれど、学び、励まし、行動する心があれば、また立ち上がれます。」",
    "「教学は、人を責めるためじゃなくて、人を励ますための知恵なんです…！」",
    "希望のしるしは、主人公の中にある。そして、次に励ますべき一人のもとへ、新しい一歩が始まる。"
  ]
};

const BATTLE_WORDS = {
  correctLabel: "正解！",
  wrongLabel: "不正解…！",
  damageText: "迷いが薄れた！",
  enemyDefeated: "迷いが晴れた！",
  playerDefeated: "ソラは力尽きた…",
  nextButton: "次へ",
  runButton: "にげる",
  retryButton: "もう一度挑戦",
  areaSelectButton: "エリア選択へ",
  statsButton: "成績を見る",
  reviewButton: "復習する",
  finalButton: "最終決戦へ",
  rewardText: "希望のしるしを手に入れた！",
  learnedText: "今回学んだこと",
  correctPrefix: "ソラ",
  bossPrefix: "迷いの声",
  nameInputTitle: "冒険者の名を刻もう",
  nameInputButton: "この名前で旅立つ",
  defaultNameButton: "ユウキで始める"
};
