/**
 * ⚔️ 漢字モンスターハンター -RENEWAL EDITION- ⚔️
 */

const QUESTION_RANGE = { start: 1, end: 200 };

const KANJI_TEXT_DATA = `
1,葉,葉（は）,青葉（あおば）,落ち葉（おちば）
2,起,起きる（おきる）,起立（きりつ）
3,速,速い（はやい）,速力（そくりょく）,音速（おんそく）,高速（こうそく）
4,面,面（めん）,面会（めんかい）,面前（めんぜん）,面持ち（おも持ち）
5,台,台（だい）,台風（たいふう）,台所（だいどころ）,土台（どだい）
6,緑,緑（みどり）,緑茶（りょくちゃ）,緑化（りょくか）
7,感,感じる（かんじる）,感心（かんしん）,感動（かんどう）,予感（よかん）
8,豆,豆（まめ）,大豆（だいず）,小豆（あずき）
9,物,物（もの）,品物（しなもの）,作物（さくもつ）,人物（じんぶつ）
10,様,様子（ようす）,王様（おうさま）,神様（かみさま）
11,仕,仕える（つかえる）,仕事（しごと）,仕上がり（しあがり）
12,練,練習（れんしゅう）,練る（ねる）
13,習,習う（ならう）,習字（しゅうじ）,自習（じしゅう）,予習（よしゅう）
14,州,五大州（ごだいしゅう）,中州（なかす）
15,央,中央（ちゅうおう）
16,横,横顔（よこがお）,真横（まよこ）,横道（よこみち）,横転（おうてん）
17,倍,倍数（ばいすう）,二倍（にばい）
18,館,図書館（としょかん）,館内（かんない）,会館（かいかん）
19,事,事（こと）,火事（かじ）,食事（しょくじ）,仕事（しごと）
20,号,暗号（あんごう）,記号（きごう）,番号（ばんごう）
21,使,使う（つかう）,使用（しよう）,使者（ししゃ）
22,意,意外（いがい）,意気（いき）,意見（いけん）
23,味,味（あじ）,意味（いみ）,味方（みかた）
24,漢,漢字（かんじ）,漢語（かんご）,漢文（かんぶん）
25,表,本の表（おもて）,表す（あらわす）,表面（ひょうめん）,表明（ひょうめい）
26,調,調べる（しらべる）,調子（ちょうし）,調整（ちょうせい）,調理（ちょうり）
27,柱,柱（はしら）,石柱（せきちゅう）,円柱（えんちゅう）
28,所,所（ところ）,所有（しょゆう）,台所（だいどころ）,名所（めいしょ）
29,取,取る（とる）,取っ手（とって）,取り引き（とりひき）,先取（せんしゅ）
30,局,局外（きょくがい）,局地（きょくち）,局面（きょくめん）,当局（とうきょく）
31,配,配る（くばる）,配合（はいごう）,配色（はいしょく）
32,住,住む（すむ）,住所（じゅうしょ）,住人（じゅうにん）
33,身,身（み）,身体（しんたい）,身内（みうち）,身元（みもと）
34,育,体育（たいいく）,生育（せいいく）,発育（はついく）,育てる（そだてる）
35,守,守る（まもる）,死守（ししゅ）
36,決,決める（きめる）,決意（けつい）,決勝（けっしょう）,決行（けっこう）
37,動,動く（うごく）,動作（どうさ）,行動（こうどう）,感動（かんどう）
38,持,持つ（もつ）,気持ち（きもち）,長持ち（なが持ち）,所持（しょじ）
39,問,問う（とう）,問題（もんだい）,問題外（もんだいがい）
40,題,題（だい）,題名（だいめい）,題目（だいもく）
41,部,部下（ぶか）,部首（ぶしゅ）,部分（ぶぶん）
42,筆,筆（ふで）,筆先（ふでさき）,筆記（ひっき）,筆写（ひっしゃ）
43,者,読者（どくしゃ）,学者（がくしゃ）,筆者（ひっしゃ）,人気者（にんきもの）
44,都,東京都（とうきょうと）,都合（つごう）,都会（とかい）,都（みやこ）
45,氷,氷（こおり）,氷山（ひょうざん）,氷点（ひょうてん）
46,泳,泳ぐ（およぐ）,水泳（すいえい）,力泳（りきえい）,遊泳（ゆうえい）
47,有,有る（ある）,有名（ゆうめい）,有用（ゆうよう）
48,返,返す（かえす）,返事（へんじ）,返品（へんぴん）,返答（へんとう）
49,遊,遊ぶ（あそぶ）,遊園地（ゆうえんち）
50,開,開く（ひらく）,開ける（あける）,開花（かいか）,開会（かいかい）
51,全,全く（全く）,全校（ぜんこう）,全部（ぜんぶ）
52,始,始める（はじめる）,開始（かいし）,原始（げんし）,始業（しぎょう）
53,係,係る（かかる）,係員（かかりいん）,関係（かんけい）,連係（れんけい）
54,世,世の中（よのなか）,世代（せだい）,世話（せわ）,世界（せかい）
55,終,終わる（おわる）,終点（しゅうてん）
56,苦,苦しい（くるしい）,苦心（くしん）,苦い（にがい）
57,族,家族（かぞく）,親族（しんぞく）
58,章,文章（ぶんしょう）
59,曲,曲げる（まげる）,曲線（きょくせん）,曲目（きょくもく）,歌曲（かきょく）
60,板,板（いた）,板目（いため）,鉄板（てっぱん）,画板（がばん）
61,品,品（しな）,品物（しなもの）,下品（げひん）,上品（じょうひん）
62,皿,皿（さら）,小皿（こざら）,絵皿（えざら）
63,委,委員（いいん）,委細（いさい）
64,員,委員（いいん）,係員（かかりいん）,工員（こういん）,人員（じんいん）
65,発,発する（はっする）,発音（はつおん）,発言（はつげん）,発売（はつばい）
66,島,島（しま）,島国（しまぐに）,小島（こじま）,列島（れっとう）
67,寒,寒い（さむい）,寒段差（かんだんさ）,寒気（さむけ）
68,相,手相（てそう）,相当（そうとう）,真相（しんそう）,相手（あいて）
69,死,死ぬ（しぬ）,死人（しにん）,死活（しかつ）,生死（せいし）
70,君,君（きみ）,君主（くんしゅ）,名君（めいくん）,君子（くんし）
71,安,安い（やすい）,安全（あんぜん）,安心（あんしん）,安定（あんてい）
72,急,急ぐ（いそぐ）,急行（きゅうこう）,急用（きゅうよう）
73,橋,橋（はし）,石橋（いしばし）,丸木橋（まるきばし）,歩道橋（ほどうきょう）
74,登,登る（のぼる）,登校（とうこう）,登山（とざん）
75,血,血（ち）,血色（けっしょく）,血行（けっこう）,血気（けっき）
76,申,物申す（ものもうす）,上申（じょうしん）,内申（ないしん）
77,由,理由（りゆう）,自由（じゆう）,由来（ゆらい）
78,想,空想（くうそう）,予想（よそう）,回想（かいそう）
79,詩,詩（し）,詩作（しさく）,詩集（ししゅう）
80,集,集める（あつめる）,集合（しゅうごう）,集会（しゅうかい）
81,次,次（つぎ）,次元（じげん）,次点（じてん）,目次（もくじ）
82,暑,暑い（あつい）,暑中（しょちゅう）
83,業,家業（かぎょう）,学業（がくぎょう）,作業（さぎょう）,工業（こうぎょう）
84,実,実（み）,実る（みのる）,実力（じつりょく）,真実（しんじつ）
85,農,農家（のうか）,農園（のうえん）,農具（のうぐ）
86,命,命（いのち）,命名（めいめい）,生命（せいめい）
87,写,写す（うつす）,写真（しゃしん）,写生（しゃせい）
88,助,助ける（たすける）,助言（じょ言）,助走（じょそう）
89,落,落ちる（おちる）,落下（らっか）,落書き（らくがき）
90,進,進む（すすむ）,進化（しんか）,進学（しんがく）,進行（しんこう）
91,役,役員（やくいん）,役者（やくしゃ）,役所（やくしょ）,役人（やくにん）
92,負,負ける（まける）,勝負（しょうぶ）,負う（おう）
93,勝,勝つ（かつ）,勝手（かって）,勝負（しょうぶ）
94,区,区分（くぶん）,区分け（くわけ）,区間（くかん）
95,県,県（けん）,県名（けんめい）,県立（けん立）
96,丁,一丁（いっちょう）,丁重（ていちょう）
97,屋,屋外（おくがい）,屋上（おくじょう）,屋内（おくない）,屋台（やたい）
98,根,根（ね）,根気（こんき）,根本（こんぽん）
99,投,投げる（なげる）,投手（とうしゅ）
100,球,球（たま）,球根（きゅうこん）,球場（きゅうじょう）,野球（やきゅう）
101,打,打つ（うつ）,打算（ださん）,打者（だしゃ）,安打（あんだ）
102,主,主人（しゅじん）,地主（じぬし）,主題（しゅだい）,主な（おもな）
103,化,化ける（ばける）,化学（かがく）,化石（かせき）
104,鉄,鉄（てつ）,鉄道（てつどう）,地下鉄（ちかてつ）,鉄橋（てっきょう）
105,真,真意（しんい）,真空（しんくう）,真実（しんじつ）,真心（まごころ）
106,客,客（きゃく）,来客（らいきゃく）,先客（せんきゃく）,旅客（りょかく）
107,着,着く（つく）,着る（きる）,とう着（とうちゃく）,着物（きもの）
108,送,送る（おくる）,送金（そうきん）,放送（ほうそう）,回送（かいそう）
109,院,病院（びょういん）,寺院（じいん）
110,皮,皮（かわ）,頭皮（とうひ）,皮肉（ひにく）
111,受,受ける（うける）,受理（じゅり）,受け取り（うけとり）,受け身（うけみ）
112,消,消える（きえる）,消す（けす）,消化（しょうか）,消火（しょうか）
113,荷,荷重（かじゅう）,荷車（にぐるま）,荷物（にもつ）,荷台（にだい）
114,運,運ぶ（はこぶ）,運転（うんてん）,運命（うんめい）
115,陽,太陽（たいよう）,陽気（ようき）,陽光（ようこう）
116,路,道路（どうろ）,路地（ろじ）,水路（すいろ）,路上（ろじょう）
117,昔,昔（むかし）,昔話（むかしばなし）,大昔（おおむかし）
118,服,服（ふく）,洋服（ようふく）,和服（わふく）,服装（ふくそう）
119,両,両方（りょうほう）,両親（りょうしん）,両手（りょうて）,車両（しゃりょう）
120,軽,軽い（かるい）,手軽（てがる）,軽快（けいかい）,軽食（けいしょく）
121,具,具（ぐ）,道具（どうぐ）,具合（ぐあい）,家具（かぐ）
122,温,温かい（あたたかい）,温度（おんど）,体温（たいおん）,温室（おんしつ）
123,度,度（ど）,角度（かくど）,今度（こんど）,程度（ていど）
124,美,美しい（うつくしい）,美人（びじん）,美化（びか）,美容（びよう）
125,短,短い（みじかい）,短歌（たんか）,短時間（たんじかん）,短所（たんしょ）
126,整,整える（ととのえる）,整理（せいり）,整列（せいれつ）,調整（ちょうせい）
127,指,指（ゆび）,親指（おやゆび）,指示（しじ）,指名（しめい）
128,植,植える（うえる）,植木（うえき）,植物（しょくぶつ）,田植え（たうえ）
129,研,研ぐ（とぐ）,研究（けんきゅう）,研修（けんしゅう）,研磨（けんま）
130,究,研究（けんきゅう）,探究（たんきゅう）,究極（きゅうきょく）,究明（きゅうめい）
131,深,深い（ふかい）,水深（すいしん）,深夜（しんや）,深海（しんかい）
132,代,代わる（かわる）,時代（じだい）,代理（だいり）,代金（だいきん）
133,乗,乗る（のる）,乗車（じょうしゃ）,乗客（じょうきゃく）,乗馬（じょうば）
134,飲,飲む（のむ）,飲み物（のみもの）,飲食（いんしょく）,飲料（いんりょう）
135,流,流れる（ながれる）,流す（ながす）,流行（りゅうこう）,一流（いちりゅう）
136,炭,炭（すみ）,石炭（せきたん）,木炭（もくたん）,炭火（すみび）
137,平,平ら（たいら）,平和（へいわ）,平日（へいじつ）,平等（びょうどう）
138,和,和（わ）,和食（わしょく）,和室（わしつ）,温和（おんわ）
139,銀,銀（ぎん）,銀行（ぎんこう）,銀色（ぎんいろ）,水銀（すいぎん）
140,鼻,鼻（はな）,鼻水（はなみず）,耳鼻科（じびか）,目鼻（めはな）
141,神,神（かみ）,神社（じんじゃ）,神様（かみさま）,神宮（じんぐう）
142,祭,祭り（まつり）,祭日（さいじつ）,文化祭（ぶんかさい）,学校祭（がっこうさい）
143,歯,歯（は）,虫歯（むしば）,歯医者（はいしゃ）,歯車（はぐるま）
144,医,医者（いしゃ）,医師（いし）,医院（いいん）,医学（いがく）
145,坂,坂（さか）,坂道（さかみち）,上り坂（のぼりざか）,下り坂（くだりざか）
146,薬,薬（くすり）,薬局（やっきょく）,医薬品（いやくひん）,目薬（めぐすり）
147,箱,箱（はこ）,道具箱（どうぐばこ）,ゴミ箱（ごみばこ）,筆箱（ふでばこ）
148,湯,湯（ゆ）,お湯（おゆ）,湯気（ゆげ）,銭湯（せんとう）
149,他,他（ほか）,他人（たにん）,他国（たこく）,その他（そのた）
150,対,反対（はんたい）,対立（たいりつ）,対話（たいわ）,対象（たいしょう）
151,洋,洋服（ようふく）,洋風（ようふう）,太平洋（たいへいよう）,西洋（せいよう）
152,湖,湖（みずうみ）,湖水（こすい）,湖畔（こはん）,琵琶湖（びわこ）
153,酒,酒（さけ）,日本酒（にほんしゅ）,洋酒（ようしゅ）,酒屋（さかや）
154,油,油（あぶら）,石油（せきゆ）,油田（ゆでん）,サラダ油（さらだあぶら）
155,拾,拾う（ひろう）,拾得（しゅうとく）,命拾い（いのちびろい）
156,羊,羊（ひつじ）,羊毛（よう毛）,羊雲（ひつじぐも）,子羊（こひつじ）
157,駅,駅（えき）,駅前（えきまえ）,駅長（えきちょう）,東京駅（とうきょうえき）
158,港,港（みなと）,港町（みなとまち）,空港（くうこう）,出港（しゅっこう）
159,界,世界（せかい）,学界（がっかい）,限界（げんかい）,業界（ぎょうかい）
160,期,期間（きかん）,学期（がっき）,期待（きたい）,冬期（とうき）
161,勉,勉強（べんきょう）,勉学（べんがく）,勉強家（べんきょうか）,勤勉（きんべん）
162,級,学級（がっきゅう）,進級（しんきゅう）,高級（こうきゅう）,階級（かいきゅう）
163,式,式（しき）,公式（こうしき）,入学式（にゅうがくしき）,始業式（しぎょう式）
164,列,列（れつ）,列車（れっしゃ）,行列（ぎょうれつ）,列島（れっとう）
165,予,予定（よてい）,予想（よそう）,予約（よやく）,予感（よかん）
166,談,相談（そうだん）,談話（だんわ）,面談（めんだん）,対談（たいだん）
167,反,反る（そる）,反対（はんたい）,反省（はんせい）,反転（はんてん）
168,注,注ぐ（そそぐ）,注意（ちゅうい）,注目（ちゅうもく）,注文（ちゅうもん）
169,暗,暗い（くらい）,暗記（あんき）,暗号（あんごう）,暗闇（くらやみ）
170,悪,悪い（わるい）,悪口（わるぐち）,悪事（あくじ）,悪化（あっか）
171,岸,岸（きし）,海岸（かいがん）,川岸（かわぎし）,対岸（たいがん）
172,放,放す（はなす）,放送（ほうそう）,解放（かいほう）,放課後（ほうかご）
173,幸,幸せ（しあわせ）,幸運（こううん）,幸福（こうふく）,幸い（さいわい）
174,悲,悲しい（かなしい）,悲しむ（かなしむ）,悲運（ひうん）,悲劇（ひげき）
175,商,商い（あきない）,商品（しょうひん）,商店（しょうてん）,商売（しょうばい）
176,昭,昭和（しょうわ）
177,帳,手帳（てちょう）,通帳（つうちょう）,帳面（ちょうめん）,日記帳（にっきちょう）
178,庫,車庫（しゃこ）,金庫（きんこ）,倉庫（そうこ）,冷蔵庫（れいぞうこ）
179,転,転がる（ころがる）,運転（うんてん）,自転車（じてんしゃ）,転校（てんこう）
180,第,第一（だいいち）,第二（だいに）,落第（らくだい）
181,福,幸福（こうふく）,福祉（ふくし）,福引（ふくびき）,福の神（ふくのかみ）
182,等,等しい（ひとしい）,平等（びょうどう）,等分（とうぶん）,高等（こうとう）
183,定,定める（さだめる）,予定（よてい）,決定（けってい）,定規（じょうぎ）
184,宮,宮（みや）,神宮（じんぐう）,お宮（おみや）,王宮（おうきゅう）
185,宿,宿（やど）,宿題（しゅくだい）,宿屋（やどや）,宿泊（しゅくはく）
186,追,追う（おう）,追い風（おいかぜ）,追加（ついか）,追跡（ついせき）
187,庭,庭（にわ）,庭園（ていえん）,家庭（かてい）,中庭（なかにわ）
188,旅,旅（たび）,旅行（りょこう）,旅先（たびさき）,旅人（たびびと）
189,息,息（いき）,ため息（ため息）,休息（きゅうそく）,息切れ（いきぎれ）
190,階,階段（かいだん）,二階（にかい）,階級（かいきゅう）,階層（かいそう）
191,重,重い（おもい）,重ねる（かさねる）,体重（たいじゅう）,重荷（おもに）
192,畑,畑（はたけ）,田畑（たはた）,畑仕事（はたけしごと）,茶畑（ちゃばたけ）
193,去,去る（さる）,立ち去る（たちさる）,去年（きょねん）,過去（かこ）
194,礼,お礼（おれい）,礼儀（れいぎ）,朝礼（ちょうれい）,返礼（へんれい）
195,待,待つ（まつ）,期待（きたい）,招待（しょうたい）,待合室（まちあいしつ）
196,秒,秒（びょう）,何秒（なんびょう）,秒読み（びょうよみ）,秒針（びょうしん）
197,病,病気（びょうき）,病院（びょういん）,急病（きゅうびょう）,病室（びょう室）
198,童,童話（どうわ）,童心（どうしん）,学童（がくどう）,児童（じどう）
199,笛,笛（ふえ）,口笛（くちぶえ）,草笛（くさぶえ）,汽笛（きてき）
200,波,波（なみ）,津波（つなみ）,電波（でんぱ）,波長（はちょう）
`;

function parseKanjiData(text) {
    const lines = text.trim().split("\n");
    const allQuiz = [];
    const allReadings = new Set();
    const parsedLines = [];

    lines.forEach(line => {
        if (!line.trim()) return;
        const parts = line.split(",").map(p => p.trim());
        const id = parseInt(parts[0]);
        const kanji = parts[1];
        const words = parts.slice(2);

        words.forEach(w => {
            const match = w.match(/(.+)（(.+)）/);
            if (match) allReadings.add(match[2]);
        });
        parsedLines.push({ id, kanji, words });
    });

    const readingArray = Array.from(allReadings);

    parsedLines.forEach(item => {
        if (item.id >= QUESTION_RANGE.start && item.id <= QUESTION_RANGE.end) {
            item.words.forEach(w => {
                const match = w.match(/(.+)（(.+)）/);
                if (match) {
                    const wordText = match[1];
                    const reading = match[2];

                    const dummyChoices = readingArray.filter(r => r !== reading);
                    dummyChoices.sort(() => Math.random() - 0.5);
                    const selectedDummies = dummyChoices.slice(0, 3);

                    const choices = [reading, ...selectedDummies];
                    choices.sort(() => Math.random() - 0.5);
                    const answer = choices.indexOf(reading);

                    allQuiz.push({ kanji: item.kanji, wordText, choices, answer });
                }
            });
        }
    });

    return allQuiz;
}

let QUIZ_DATA = parseKanjiData(KANJI_TEXT_DATA);

// クエストごとのルール設定
// mode: "choice"=4択 / "typing"=記述(ひらがな入力)
// timePerQ: 1問あたりの制限時間(秒)。null=時間制限なし
const QUEST_RULES = {
    beginner:     { mode: "choice", timePerQ: null, rewardG: 50,  rewardEX: 30,  totalQuestions: 10, passThreshold: 9 },
    intermediate: { mode: "choice", timePerQ: 20,   rewardG: 100, rewardEX: 60,  totalQuestions: 10, passThreshold: 9 },
    advanced:     { mode: "typing", timePerQ: null, rewardG: 200, rewardEX: 120, totalQuestions: 10, passThreshold: 9 },
    oni:          { mode: "typing", timePerQ: 15,   rewardG: 250, rewardEX: 180, totalQuestions: 10, passThreshold: 9 },
    kami:         { mode: "typing", timePerQ: 10,   rewardG: 300, rewardEX: 250, totalQuestions: 10, passThreshold: 9 },
    weekly:       { mode: "choice", timePerQ: null, rewardG: 200, rewardEX: 80,  totalQuestions: 5,  passThreshold: 4 },
    review:       { mode: "choice", timePerQ: null, rewardG: 50,  rewardEX: 50,  totalQuestions: 10, passThreshold: 8 }
};

// 全国制覇モード: 高知県(ラスボス枠、別扱い)を除く46県を、各難易度にランダムに配分
const JAPAN_TIER_COUNTS = { beginner: 10, intermediate: 10, advanced: 10, oni: 10, kami: 6 };
const JAPAN_TIER_LABEL = { beginner: "🌱初級", intermediate: "⚔️中級", advanced: "🔥上級", oni: "👹鬼級", kami: "⚡神級" };

// 全国制覇モード: 8地方区分(地方選択→都道府県選択の2段階ナビゲーション用)
const JAPAN_REGIONS = [
    { key: "hokkaido", label: "北海道地方", icon: "❄️", prefs: ["北海道"] },
    { key: "tohoku", label: "東北地方", icon: "🌾", prefs: ["青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"] },
    { key: "kanto", label: "関東地方", icon: "🗼", prefs: ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"] },
    { key: "chubu", label: "中部地方", icon: "🗻", prefs: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県"] },
    { key: "kinki", label: "近畿地方", icon: "⛩️", prefs: ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"] },
    { key: "chugoku", label: "中国地方", icon: "🍇", prefs: ["鳥取県", "島根県", "岡山県", "広島県", "山口県"] },
    { key: "shikoku", label: "四国地方", icon: "🍊", prefs: ["徳島県", "香川県", "愛媛県", "高知県"] },
    { key: "kyushu", label: "九州・沖縄地方", icon: "🌺", prefs: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"] }
];

// 2日ごとに切り替わる地域テーマ(日付から自動計算)
const REGION_THEMES = [
    { key: "theme-hokkaido-tohoku", name: "北海道・東北", icon: "❄️" },
    { key: "theme-kanto-chubu",     name: "関東・中部",   icon: "🗼" },
    { key: "theme-kinki-chugoku",   name: "近畿・中国",   icon: "⛩️" },
    { key: "theme-shikoku-kyushu",  name: "四国・九州",   icon: "🌺" }
];

function getTodayTheme() {
    const daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    const themeIndex = Math.floor(daysSinceEpoch / 2) % REGION_THEMES.length;
    return REGION_THEMES[themeIndex];
}

function getDefaultGameState() {
    return {
        level: 1,
        exp: 0,
        gold: 0,
        title: "【駆け出し漢士】",
        earnedTitles: ["starter"],
        selectedTitle: "starter",
        clears: { advanced: 0, oni: 0, kami: 0 },
        prefecturesCleared: [],
        zukan: {},
        partnerId: null,
        partnerHearts: 3,
        items: { glasses: 0, clock: 0, whistle: false, colorChange: false, expDouble: false },
        customKanjiColor: "#2979ff",
        hasSeenOpening: false,
        prefectureTiers: {},
        unlockFlags: { oni: false, kami: false, japan: false },
        pendingMonster: {},
        weeklyQuestClearedWeek: null,
        missedKanji: [],
        milestones: { ultraDefeats: 0, reviewClears: 0, noMissStreak: 0 },
        hiddenTitles: { shinyMaster: false, hyakusen: false, nomiss: false },
        janken: { lastPlayedDay: null, winStreakDays: 0 },
        lastSeenVersion: null,
        capturedPartnerId: null,
        finalBossCutsceneShown: false,
        towerUnlocked: false,
        tower: { bestFloor: 0, weeklyBestFloor: 0, weeklyWeekId: null },
        lastVisitedRegion: null,
        questClearCount: 0
    };
}
let gameState = getDefaultGameState();

const PREFECTURES = [
    { name: "北海道", boss: "夕張メロンドラゴン", icon: "🍈" }, { name: "青森県", boss: "林檎鳳凰", icon: "🍎" },
    { name: "岩手県", boss: "椀子そば忍者", icon: "🍜" }, { name: "宮城県", boss: "牛タン戦鬼", icon: "🐂" },
    { name: "秋田県", boss: "きりたんぽ鬼", icon: "🍢" }, { name: "山形県", boss: "桜桃鳥", icon: "🍒" },
    { name: "福島県", boss: "福島桃鬼", icon: "🍑" }, { name: "茨城県", boss: "水戸納豆スライム", icon: "🫘" },
    { name: "栃木県", boss: "餃子竜", icon: "🥟" }, { name: "群馬県", boss: "下仁田こんにゃくゴーレム", icon: "🍢" },
    { name: "埼玉県", boss: "深谷ネギバット", icon: "🥬" }, { name: "千葉県", boss: "落花生ペガサス", icon: "🥜" },
    { name: "東京都", boss: "月島もんじゃタワー", icon: "🍳" }, { name: "神奈川県", boss: "崎陽軒シウマイ武者", icon: "🥟" },
    { name: "新潟県", boss: "米米コシヒカリん", icon: "🌾" }, { name: "富山県", boss: "ホタルイカキング", icon: "🦑" },
    { name: "石川県", boss: "金箔フェニックス", icon: "✨" }, { name: "福井県", boss: "越前ガニキング", icon: "🦀" },
    { name: "山梨県", boss: "葡萄狐", icon: "🍇" }, { name: "長野県", boss: "信州蕎麦蛇", icon: "🥢" },
    { name: "岐阜県", boss: "飛騨牛タウロス", icon: "🐄" }, { name: "静岡県", boss: "静岡茶ドラゴン", icon: "🍵" },
    { name: "愛知県", boss: "味噌カツ天狗", icon: "🍖" }, { name: "三重県", boss: "伊勢海老将軍", icon: "🦞" },
    { name: "滋賀県", boss: "琵琶湖鮒寿司ナマズ", icon: "🐟" }, { name: "京都府", boss: "八ツ橋鬼", icon: "🍵" },
    { name: "大阪府", boss: "たこ焼き大将", icon: "🐙" }, { name: "兵庫県", boss: "神戸牛タウロス", icon: "🥩" },
    { name: "奈良県", boss: "柿の葉寿司忍者", icon: "🍣" }, { name: "和歌山県", boss: "蜜柑狐", icon: "🍊" },
    { name: "鳥取県", boss: "鳥取梨キング", icon: "🍐" }, { name: "島根県", boss: "出雲そばオロチ", icon: "🍜" },
    { name: "岡山県", boss: "桃太郎犬", icon: "🍑" }, { name: "広島県", boss: "紅葉饅頭蟹", icon: "🍁" },
    { name: "山口県", boss: "河豚毒魚", icon: "🐡" }, { name: "徳島県", boss: "すだちフェニックス", icon: "🍋" },
    { name: "香川県", boss: "讃岐うどんスライム", icon: "🍜" }, { name: "愛媛県", boss: "伊予柑タイガー", icon: "🍊" },
    { name: "高知県", boss: "鰹タタキ龍", icon: "🐲" }, { name: "福岡県", boss: "明太子鳳凰", icon: "🌶️" },
    { name: "佐賀県", boss: "有田焼ゴーレム", icon: "🏺" }, { name: "長崎県", boss: "カステラウサギ", icon: "🥮" },
    { name: "熊本県", boss: "黒馬タウロス", icon: "🐎" }, { name: "大分県", boss: "温泉湯けむりドラゴン", icon: "♨️" },
    { name: "宮崎県", boss: "マンゴーフェニックス", icon: "🥭" }, { name: "鹿児島県", boss: "黒豚ボム", icon: "🐖" },
    { name: "沖縄県", boss: "サーターアンダギー獅子", icon: "🍩" }
];



const MONSTERS = [
    // 通常 (35種)
    { id: "m1", name: "火炎ドゴラ", icon: "🦖", type: "normal" },
    { id: "m2", name: "アクアジャラー", icon: "🐍", type: "normal" },
    { id: "m3", name: "リーフウルフ", icon: "🐺", type: "normal" },
    { id: "m4", name: "サンダーバード", icon: "🦅", type: "normal" },
    { id: "m5", name: "アイスゴーレム", icon: "⛄", type: "normal" },
    { id: "m6", name: "ウィンドバット", icon: "🦇", type: "normal" },
    { id: "m7", name: "ロックペルソナ", icon: "🗿", type: "normal" },
    { id: "m8", name: "シャドウキャット", icon: "🐈‍⬛", type: "normal" },
    { id: "m9", name: "ライトフェアリー", icon: "🧚", type: "normal" },
    { id: "m10", name: "ポイズンスパイダー", icon: "🕷️", type: "normal" },
    { id: "m11", name: "マグマタートル", icon: "🐢", type: "normal" },
    { id: "m12", name: "フロストベア", icon: "🐻", type: "normal" },
    { id: "m13", name: "ストームイーグル", icon: "🦅", type: "normal" },
    { id: "m14", name: "メタルスカラベ", icon: "🪲", type: "normal" },
    { id: "m15", name: "ナイトメアホーク", icon: "🦉", type: "normal" },
    { id: "m16", name: "フォレストエイプ", icon: "🦧", type: "normal" },
    { id: "m17", name: "ブルータコラ", icon: "🐙", type: "normal" },
    { id: "m18", name: "クリスタルシャーク", icon: "🦈", type: "normal" },
    { id: "m19", name: "ボムポーク", icon: "🐖", type: "normal" },
    { id: "m20", name: "スピードラビット", icon: "🐇", type: "normal" },
    { id: "m21", name: "シェルクラブ", icon: "🦀", type: "normal" },
    { id: "m22", name: "ヴェノムスネーク", icon: "🐍", type: "normal" },
    { id: "m23", name: "ホーリーライオン", icon: "🦁", type: "normal" },
    { id: "m24", name: "ダークウルフ", icon: "🐺", type: "normal" },
    { id: "m25", name: "ソーラーペガサス", icon: "🦄", type: "normal" },
    { id: "m26", name: "ルナフォックス", icon: "🦊", type: "normal" },
    { id: "m27", name: "グラビティモグラ", icon: "🦡", type: "normal" },
    { id: "m28", name: "ソニックサイ", icon: "🦏", type: "normal" },
    { id: "m29", name: "プラズマワニ", icon: "🐊", type: "normal" },
    { id: "m30", name: "ブレイズコーカサス", icon: "🪲", type: "normal" },
    { id: "m31", name: "アシッドスライム", icon: "🧪", type: "normal" },
    { id: "m32", name: "サイクロンサソリ", icon: "🦂", type: "normal" },
    { id: "m33", name: "ゴーストマンタ", icon: "🛈", type: "normal" },
    { id: "m34", name: "メテオカムイ", icon: "🐻‍❄️", type: "normal" },
    { id: "m35", name: "アビスイカ", icon: "🦑", type: "normal" },
    // マイクラ風 (15種)
    { id: "mc1", name: "ピクセル・ゾンビ", icon: "🧟", type: "normal" },
    { id: "mc2", name: "ブロック・スケルトン", icon: "💀", type: "normal" },
    { id: "mc3", name: "クラフト・クリーパー", icon: "🧨", type: "normal" },
    { id: "mc4", name: "ドット・エンダーマン", icon: "👁️", type: "normal" },
    { id: "mc5", name: "レッドストーン・ゴーレム", icon: "🔴", type: "normal" },
    { id: "mc6", name: "キューブ・スライム", icon: "🟩", type: "normal" },
    { id: "mc7", name: "ピクセル・ガスト", icon: "👻", type: "normal" },
    { id: "mc8", name: "マイン・ブレイズ", icon: "🔥", type: "normal" },
    { id: "mc9", name: "ネザー・ウィザー", icon: "☠️", type: "normal" },
    { id: "mc10", name: "クラフト・ドラゴン", icon: "🐉", type: "normal" },
    { id: "mc11", name: "ボクセルタイガー", icon: "🐯", type: "normal" },
    { id: "mc12", name: "ブロックビーバー", icon: "🦫", type: "normal" },
    { id: "mc13", name: "クラフトハリネズミ", icon: "🦔", type: "normal" },
    { id: "mc14", name: "キューブカメレオン", icon: "🦎", type: "normal" },
    { id: "mc15", name: "ピクセルスロース", icon: "🦥", type: "normal" },
    // 超激レア (10種)
    { id: "u1", name: "時空竜クロノス・ラグナ", icon: "⏳", portraitImg: ULTRA_IMG_KURONOSU, type: "ultra" },
    { id: "u2", name: "創世神アルティメット・オーディン", icon: "🔱", portraitImg: ULTRA_IMG_ODIN, type: "ultra" },
    { id: "u3", name: "深淵王ヴォイド・ルシファー", icon: "👑", portraitImg: ULTRA_IMG_LUCIFER, type: "ultra" },
    { id: "u4", name: "終焉鳥ラグナロク", icon: "🔥", portraitImg: ULTRA_IMG_RAGNAROK, type: "ultra" },
    { id: "u5", name: "輝光神アマテラス", icon: "☀️", portraitImg: ULTRA_IMG_AMATERASU, type: "ultra" },
    { id: "u6", name: "冥界王ハデス", icon: "💀", portraitImg: ULTRA_IMG_HADES, type: "ultra" },
    { id: "u7", name: "覇王竜バハムート", icon: "🐉", portraitImg: ULTRA_IMG_BAHAMUT, type: "ultra" },
    { id: "u8", name: "聖獣セイント・フェニックス", icon: "🐦‍🔥", portraitImg: ULTRA_IMG_SAINT_PHOENIX, type: "ultra" },
    { id: "u9", name: "虚無神ゼノ・ギアス", icon: "🌌", portraitImg: ULTRA_IMG_XENOGEAR, type: "ultra" },
    { id: "u10", name: "始祖龍ヴェルト・カイザー", icon: "🦖", portraitImg: ULTRA_IMG_VERUTO, type: "ultra" },
    // 色違い専用 (15種・1/100で出現する専用デザインのレアモンスター)
    { id: "s1", name: "煌めきドゴラ", icon: "✨🦖", type: "shiny" },
    { id: "s2", name: "虹彩ジャラー", icon: "✨🐍", type: "shiny" },
    { id: "s3", name: "黄金ウルフ", icon: "✨🐺", type: "shiny" },
    { id: "s4", name: "極光バード", icon: "✨🦅", type: "shiny" },
    { id: "s5", name: "水晶ゴーレム", icon: "✨🗿", type: "shiny" },
    { id: "s6", name: "満月キャット", icon: "✨🐈", type: "shiny" },
    { id: "s7", name: "プリズムフェアリー", icon: "✨🧚", type: "shiny" },
    { id: "s8", name: "琥珀タートル", icon: "✨🐢", type: "shiny" },
    { id: "s9", name: "銀氷ベア", icon: "✨🐻", type: "shiny" },
    { id: "s10", name: "彩虹イーグル", icon: "✨🦅", type: "shiny" },
    { id: "s11", name: "七色ラビット", icon: "✨🐇", type: "shiny" },
    { id: "s12", name: "光輪ライオン", icon: "✨🦁", type: "shiny" },
    { id: "s13", name: "星屑フォックス", icon: "✨🦊", type: "shiny" },
    { id: "s14", name: "極彩ペガサス", icon: "✨🦄", type: "shiny" },
    { id: "s15", name: "黄金スライム", icon: "✨🟨", type: "shiny" },
    // ライバルキャラクター (7種・人間のトレーナー+パートナーモンスター、たまにしか出現しない特別枠)
    // name/iconは「戦う相手(パートナーモンスター)」、trainerName/trainerIconは「ライバル本人」
    { id: "r1", trainerName: "リュウガ", trainerIcon: "🔥⚔️", portraitImg: RIVAL_IMG_RYUGA, portraitFace: RIVAL_FACE_RYUGA, name: "リュウガ", icon: "🔥⚔️", type: "rival", quote: "正々堂々、真っ向勝負だ！お前を倒すのは、このオレだ！" },
    { id: "r2", trainerName: "カイ", trainerIcon: "❄️⚔️", portraitImg: RIVAL_IMG_KAI, portraitFace: RIVAL_FACE_KAI, name: "カイ", icon: "❄️⚔️", type: "rival", quote: "……計算上、お前の勝率は低い。だが、油断はしない。" },
    { id: "r3", trainerName: "ミコト", trainerIcon: "🌿⚔️", portraitImg: RIVAL_IMG_MIKOTO, portraitFace: RIVAL_FACE_MIKOTO, name: "ミコト", icon: "🌿⚔️", type: "rival", quote: "わーい、やっと会えた！思いっきり遊ぼうね！" },
    { id: "r4", trainerName: "セリカ", trainerIcon: "⚡⚔️", portraitImg: RIVAL_IMG_SERIKA, portraitFace: RIVAL_FACE_SERIKA, name: "セリカ", icon: "⚡⚔️", type: "rival", quote: "あら、やっと現れましたのね。わたくしの実力、見せて差し上げますわ！" },
    { id: "r5", trainerName: "クロード", trainerIcon: "🖤⚔️", portraitImg: RIVAL_IMG_CLAUDE, portraitFace: RIVAL_FACE_CLAUDE, name: "クロード", icon: "🖤⚔️", type: "rival", quote: "……油断、しない方がいいよ。" },
    { id: "r6", trainerName: "レン", trainerIcon: "🥋⚔️", portraitImg: RIVAL_IMG_REN, portraitFace: RIVAL_FACE_REN, name: "レン", icon: "🥋⚔️", type: "rival", quote: "参る。漢字の美しさ、その身で味わうがいい。" },
    { id: "r7", trainerName: "ルナ", trainerIcon: "🎩⚔️", portraitImg: RIVAL_IMG_LUNA, portraitFace: RIVAL_FACE_LUNA, name: "ルナ", icon: "🎩⚔️", type: "rival", quote: "さあ、今宵のショーの始まりだ。君を驚かせてあげよう。" }
];

// --- ふりがな(ルビ)自動付与システム ---
// 辞書にある単語が画面テキストに現れたら <ruby> で自動的にふりがなを振る。
// 長い語から先にマッチさせるため、使用時にキーを文字数降順でソートする。
const FURIGANA_DICT = {
    // UI・共通ワード
    "漢字": "かんじ", "文字神": "もじしん", "冒険": "ぼうけん", "平和": "へいわ", "人々": "ひとびと",
    "忘": "わす", "乱": "みだ", "狂": "くる", "襲": "おそ", "始": "はじ",
    "長老": "ちょうろう", "若": "わか", "者": "もの", "支配": "しはい", "希望": "きぼう",
    "正": "ただ", "知識": "ちしき", "倒": "たお", "世界": "せかい", "再": "ふたた", "戻": "もど", "旅": "たび", "出発": "しゅっぱつ",
    "出題範囲": "しゅつだいはんい", "学校": "がっこう", "家": "いえ", "守": "まも",
    "駆け出し": "かけだし", "漢士": "かんし", "達人": "たつじん", "神": "かみ", "称号": "しょうごう",
    "図鑑": "ずかん", "相棒": "あいぼう", "全回復": "ぜんかいふく", "全滅": "ぜんめつ",
    "選": "えら", "変更": "へんこう", "表示": "ひょうじ", "色": "いろ",
    "報酬": "ほうしゅう", "倍": "ばい", "消去": "しょうきょ", "延長": "えんちょう",
    "制限時間": "せいげんじかん", "秒": "びょう", "問題": "もんだい", "正解": "せいかい", "不正解": "ふせいかい",
    "撃破": "げきは", "成功": "せいこう", "失敗": "しっぱい", "挑戦": "ちょうせん", "解放": "かいほう",
    "全国制覇": "ぜんこくせいは", "都道府県": "とどうふけん", "全国": "ぜんこく", "制覇": "せいは",
    "今週": "こんしゅう", "来週": "らいしゅう", "毎日": "まいにち", "復習": "ふくしゅう", "苦手": "にがて",
    "経験値": "けいけんち", "永続": "えいぞく", "獲得": "かくとく", "受け取る": "うけとる",
    "全問": "ぜんもん", "正解率": "せいかいりつ", "記述": "きじゅつ", "択": "たく",
    "初級": "しょきゅう", "中級": "ちゅうきゅう", "上級": "じょうきゅう", "鬼級": "おにきゅう", "神級": "しんきゅう",
    "初級クエスト": "しょきゅうくえすと", "中級クエスト": "ちゅうきゅうくえすと", "上級クエスト": "じょうきゅうくえすと",
    "鬼級クエスト": "おにきゅうくえすと", "神級クエスト": "しんきゅうくえすと",
    "全国制覇モード": "ぜんこくせいはもーど", "今週のクエスト": "こんしゅうのくえすと", "復習クエスト": "ふくしゅうくえすと",
    "回": "かい", "以上": "いじょう", "以下": "いか", "解放条件": "かいほうじょうけん",
    "宝箱": "たからばこ", "出現": "しゅつげん", "確率": "かくりつ", "木": "き", "銀": "ぎん", "金": "きん", "虹": "にじ",
    "勝負": "しょうぶ", "大勝利": "だいしょうり", "引": "ひ", "分": "わ", "負": "ま", "連勝": "れんしょう", "連続": "れんぞく",
    "危機一髪": "ききいっぱつ", "逆転": "ぎゃくてん", "残": "のこ",
    "隠し称号": "かくししょうごう", "色違い": "いろちがい", "超激レア": "ちょうげきれあ",
    "百戦錬磨": "ひゃくせんれんま", "警告": "けいこく", "武者": "むしゃ",
    "モンスター図鑑": "もんすたーずかん", "攻撃": "こうげき", "戦": "たたか",
    "現在": "げんざい", "小": "しょう", "必要": "ひつよう", "本当": "ほんとう", "操作": "そうさ",
    "全滅回復": "ぜんめつかいふく", "都道府": "とどうふ", "戻る": "もどる",
    "回復薬": "かいふくやく", "経験値2倍の書": "けいけんちにばいのしょ",
    "漢字カラーチェンジ": "かんじからーちぇんじ", "カンニンググラス": "かんにんぐぐらす",
    "限定": "げんてい", "暮": "く", "全": "ぜん", "問": "もん", "時間": "じかん", "制限": "せいげん",
    "文字": "もじ", "満": "まん", "足": "た", "消": "き", "済": "す", "元": "もと", "戻": "もど",
    "見": "み", "頼": "たの", "取": "と", "読み方": "よみかた", "読": "よ", "方": "かた",
    "仲間": "なかま", "我": "わたし", "悪": "わる", "来": "き", "力": "ちから",
    "タイムストップの時計": "たいむすとっぷのとけい", "レアモンスターの笛": "れあもんすたーのふえ",
    "時計": "とけい", "笛": "ふえ", "書": "しょ", "薬": "やく",
    // 都道府県
    "北海道": "ほっかいどう", "青森県": "あおもりけん", "岩手県": "いわてけん", "宮城県": "みやぎけん",
    "秋田県": "あきたけん", "山形県": "やまがたけん", "福島県": "ふくしまけん", "茨城県": "いばらきけん",
    "栃木県": "とちぎけん", "群馬県": "ぐんまけん", "埼玉県": "さいたまけん", "千葉県": "ちばけん",
    "東京都": "とうきょうと", "神奈川県": "かながわけん", "新潟県": "にいがたけん", "富山県": "とやまけん",
    "石川県": "いしかわけん", "福井県": "ふくいけん", "山梨県": "やまなしけん", "長野県": "ながのけん",
    "岐阜県": "ぎふけん", "静岡県": "しずおかけん", "愛知県": "あいちけん", "三重県": "みえけん",
    "滋賀県": "しがけん", "京都府": "きょうとふ", "大阪府": "おおさかふ", "兵庫県": "ひょうごけん",
    "奈良県": "ならけん", "和歌山県": "わかやまけん", "鳥取県": "とっとりけん", "島根県": "しまねけん",
    "岡山県": "おかやまけん", "広島県": "ひろしまけん", "山口県": "やまぐちけん", "徳島県": "とくしまけん",
    "香川県": "かがわけん", "愛媛県": "えひめけん", "高知県": "こうちけん", "福岡県": "ふくおかけん",
    "佐賀県": "さがけん", "長崎県": "ながさきけん", "熊本県": "くまもとけん", "大分県": "おおいたけん",
    "宮崎県": "みやざきけん", "鹿児島県": "かごしまけん", "沖縄県": "おきなわけん",
    // ご当地モンスター(特産品モチーフ)
    "夕張": "ゆうばり", "林檎鳳凰": "りんごほうおう", "椀子": "わんこ", "忍者": "にんじゃ",
    "牛タン": "ぎゅうたん", "戦鬼": "せんき", "鬼": "おに", "桜桃鳥": "おうとうちょう", "桃鬼": "ももおに",
    "水戸": "みと", "納豆": "なっとう", "餃子竜": "ぎょうざりゅう", "下仁田": "しもにた",
    "深谷": "ふかや", "落花生": "らっかせい", "月島": "つきしま", "崎陽軒": "きようけん",
    "米": "こめ", "金箔": "きんぱく", "越前": "えちぜん", "葡萄狐": "ぶどうぎつね",
    "信州": "しんしゅう", "蕎麦": "そば", "蛇": "へび", "飛騨牛": "ひだぎゅう",
    "静岡茶": "しずおかちゃ", "味噌": "みそ", "天狗": "てんぐ", "伊勢海老": "いせえび", "将軍": "しょうぐん",
    "琵琶湖": "びわこ", "鮒寿司": "ふなずし", "八ツ橋": "やつはし", "大将": "たいしょう",
    "神戸牛": "こうべぎゅう", "柿の葉寿司": "かきのはずし", "蜜柑狐": "みかんぎつね",
    "鳥取梨": "とっとりなし", "出雲": "いずも", "桃太郎犬": "ももたろういぬ",
    "紅葉饅頭蟹": "もみじまんじゅうがに", "河豚毒魚": "ふぐどくぎょ", "讃岐": "さぬき", "伊予柑": "いよかん",
    "鰹": "かつお", "龍": "りゅう", "明太子鳳凰": "めんたいこほうおう", "有田焼": "ありたやき",
    "黒馬": "くろうま", "温泉": "おんせん", "湯": "ゆ", "黒豚": "くろぶた", "獅子": "しし",
    // モンスター(漢字部分)
    "火炎": "かえん", "時空竜": "じくうりゅう", "創世神": "そうせいしん", "深淵王": "しんえんおう",
    "終焉鳥": "しゅうえんちょう", "輝光神": "きこうしん", "冥界王": "めいかいおう", "覇王竜": "はおうりゅう",
    "聖獣": "せいじゅう", "虚無神": "きょむしん", "始祖龍": "しそりゅう",
    "煌めき": "きらめき", "虹彩": "こうさい", "黄金": "おうごん", "極光": "きょっこう", "水晶": "すいしょう",
    "満月": "まんげつ", "琥珀": "こはく", "銀氷": "ぎんぴょう", "彩虹": "さいこう", "七色": "なないろ",
    "光輪": "こうりん", "星屑": "ほしくず", "極彩": "ごくさい"
};
const FURIGANA_KEYS = Object.keys(FURIGANA_DICT).sort((a, b) => b.length - a.length);

function addFurigana(text) {
    if (!text || !/[一-龠々]/.test(text)) return text;
    let result = "";
    let i = 0;
    while (i < text.length) {
        let matched = false;
        for (const key of FURIGANA_KEYS) {
            if (text.startsWith(key, i)) {
                result += `<ruby>${key}<rt>${FURIGANA_DICT[key]}</rt></ruby>`;
                i += key.length;
                matched = true;
                break;
            }
        }
        if (!matched) {
            result += text[i];
            i++;
        }
    }
    return result;
}

function walkAndRubyify(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(n) {
            const p = n.parentNode;
            if (!p || !n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            const tag = p.tagName;
            if (tag === "RT" || tag === "RUBY" || tag === "SCRIPT" || tag === "STYLE") return NodeFilter.FILTER_REJECT;
            if (p.closest && p.closest(".no-furigana")) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
        }
    });
    const targets = [];
    let n;
    while ((n = walker.nextNode())) targets.push(n);

    targets.forEach(textNode => {
        const html = addFurigana(textNode.nodeValue);
        if (html !== textNode.nodeValue) {
            const span = document.createElement("span");
            span.innerHTML = html;
            textNode.replaceWith(...span.childNodes);
        }
    });
}

function initFuriganaObserver() {
    const root = document.getElementById("game-container");
    walkAndRubyify(root);
    let pending = false;
    const observer = new MutationObserver(() => {
        if (pending) return;
        pending = true;
        setTimeout(() => {
            pending = false;
            walkAndRubyify(root);
        }, 60);
    });
    observer.observe(root, { childList: true, subtree: true, characterData: true });
}

let currentBattle = {
    questKey: "beginner",
    monster: null,
    isShiny: false,
    isUltra: false,
    isRival: false,
    quizList: [],
    questionIndex: 0,
    correctCount: 0,
    comboCount: 0,
    quiz: null,
    mode: "choice",
    timePerQ: null,
    passThreshold: 9,
    battleKey: "beginner",
    timer: 15,
    timerId: null,
    rewardG: 50,
    rewardEX: 30,
    isKochiBoss: false,
    prefTarget: null
};

document.addEventListener("DOMContentLoaded", () => {
    const hadSave = loadGame();
    const isUpdateMigration = gameState.lastSeenVersion !== CURRENT_GAME_VERSION;

    if (isUpdateMigration && hadSave) {
        // アップデート移行: 所持ゴールド・アイテムだけ引き継ぎ、それ以外(経験値・レベル・モンスター図鑑など)は初期化する
        const keepGold = gameState.gold;
        const keepItems = gameState.items;
        gameState = getDefaultGameState();
        gameState.gold = keepGold;
        gameState.items = keepItems;
        saveGame();
    }

    ensurePrefectureTiers();
    setupEventListeners();
    updateUI();
    initFuriganaObserver();

    // アップデート後は、新規・既存を問わず全プレイヤーが初回オープニング演出を見る
    if (isUpdateMigration) {
        showElement("op-story-modal");
        playPhaseEnterAnim("op-phase-1");
    }
});

function updateUI() {
    const nextExp = 600;
    document.getElementById("player-level").innerText = `レベル${gameState.level}`;
    document.getElementById("exp-text").innerText = `${gameState.exp} / ${nextExp} EX`;
    document.getElementById("exp-bar-fill").style.width = `${Math.min(100, (gameState.exp / nextExp) * 100)}%`;

    // 称号: 条件を満たすと「獲得済み」に追加され、獲得済みの中から自由に選んで表示できる
    let newlyEarnedTitle = null;
    TITLE_DEFS.forEach(t => {
        if (t.check() && !gameState.earnedTitles.includes(t.key)) {
            gameState.earnedTitles.push(t.key);
            newlyEarnedTitle = t;
        }
    });
    if (newlyEarnedTitle) {
        gameState.selectedTitle = newlyEarnedTitle.key; // 新しく獲得した称号を自動で選択状態にする
        showTitlePop(newlyEarnedTitle.label);
    }

    const selectedDef = TITLE_DEFS.find(t => t.key === gameState.selectedTitle) || TITLE_DEFS[0];
    gameState.title = selectedDef.label;
    document.getElementById("player-title").innerText = gameState.title;

    // 次の称号(レベル基準)まで、あと何レベルかを表示
    const nextTitleHint = document.getElementById("next-title-hint");
    if (gameState.level < 10) {
        nextTitleHint.innerText = `次の称号「【漢字の達人】」まで あとレベル${10 - gameState.level}`;
    } else if (gameState.level < 30) {
        nextTitleHint.innerText = `次の称号「【漢字マスター】」まで あとレベル${30 - gameState.level}`;
    } else if (gameState.level < 50) {
        nextTitleHint.innerText = `次の称号「【漢字神】」まで あとレベル${50 - gameState.level}`;
    } else {
        nextTitleHint.innerText = "";
    }

    document.getElementById("player-gold").innerText = `${gameState.gold} G`;
    document.getElementById("count-glasses").innerText = gameState.items.glasses;
    document.getElementById("count-clock").innerText = gameState.items.clock;

    if (gameState.partnerId && gameState.zukan[gameState.partnerId]) {
        const partner = MONSTERS.find(m => m.id === gameState.partnerId);
        document.getElementById("partner-icon").innerText = partner ? partner.icon : "👾";
        document.getElementById("partner-name").innerText = partner ? partner.name : "ご当地";
        document.getElementById("partner-hearts").innerText = "❤️".repeat(gameState.partnerHearts);
    } else if (gameState.capturedPartnerId) {
        const captured = MONSTERS.find(m => m.id === gameState.capturedPartnerId);
        document.getElementById("partner-icon").innerText = "🔒";
        document.getElementById("partner-name").innerText = `${captured ? captured.name : "なかま"}(高知に囚われ中)`;
        document.getElementById("partner-hearts").innerText = "";
    } else {
        document.getElementById("partner-icon").innerText = "❓";
        document.getElementById("partner-name").innerText = "なし";
        document.getElementById("partner-hearts").innerText = "";
    }

    document.getElementById("range-badge").innerText = `出題範囲: ${QUESTION_RANGE.start} 〜 ${QUESTION_RANGE.end}`;

    // モンスタールーレット: 本日未挑戦なら「1日1回チャレンジ！」の吹き出しを表示
    toggleVisibility("roulette-bubble", gameState.janken.lastPlayedDay !== getTodayId());

    updateQuestLockStatus();
}

function updateQuestLockStatus() {
    toggleVisibility("card-tower", gameState.towerUnlocked);

    const oniCard = document.getElementById("card-oni");
    if (gameState.clears.advanced >= 3) {
        oniCard.className = "quest-card quest-oni";
        oniCard.innerHTML = `<div class="quest-icon">👹</div><div class="quest-info"><h3>鬼級クエスト</h3><p>報酬: 250 G / 180 EX</p><p class="quest-rule-text">全10問・9問正解でクリア(記述・1問15秒)</p></div>`;
        oniCard.onclick = () => startBattle("oni");
        if (!gameState.unlockFlags.oni) {
            gameState.unlockFlags.oni = true;
            saveGame();
            showUnlockCutin("👹 鬼級クエスト解放！", "👹", false, buildUnlockBossMessage("oni"));
        }
    } else {
        document.getElementById("oni-hint").innerText = `上級をあと ${3 - gameState.clears.advanced} 回クリアで解放…！？`;
    }

    const kamiCard = document.getElementById("card-kami");
    if (gameState.clears.oni >= 5) {
        kamiCard.className = "quest-card quest-kami";
        kamiCard.innerHTML = `<div class="quest-icon">⚡</div><div class="quest-info"><h3>神級クエスト</h3><p>報酬: 300 G / 250 EX</p><p class="quest-rule-text">全10問・9問正解でクリア(記述・1問10秒)</p></div>`;
        kamiCard.onclick = () => startBattle("kami");
        if (!gameState.unlockFlags.kami) {
            gameState.unlockFlags.kami = true;
            saveGame();
            showUnlockCutin("⚡ 神級クエスト解放！", "⚡", false, buildUnlockBossMessage("kami"));
        }
    } else {
        document.getElementById("kami-hint").innerText = `鬼級をあと ${5 - gameState.clears.oni} 回クリアで解放…！？`;
    }

    const japanCard = document.getElementById("card-japan");
    if (gameState.clears.kami >= 10) {
        japanCard.className = "quest-card quest-japan";
        japanCard.innerHTML = `<div class="quest-icon">🗾</div><div class="quest-info"><h3>全国制覇モード</h3><p>47都道府県を制覇せよ！</p></div>`;
        japanCard.onclick = openRegionSelect;
        if (!gameState.unlockFlags.japan) {
            gameState.unlockFlags.japan = true;
            saveGame();
            openJapanUnlockCutscene();
        }
    } else {
        document.getElementById("japan-hint").innerText = `神級をあと ${10 - gameState.clears.kami} 回クリアで全国開放…！？`;
    }

    const weeklyCard = document.getElementById("card-weekly");
    const weeklyDone = gameState.weeklyQuestClearedWeek === getCurrentWeekId();
    weeklyCard.className = `quest-card ${weeklyDone ? "quest-locked" : ""}`;
    weeklyCard.innerHTML = weeklyDone
        ? `<div class="quest-icon">✅</div><div class="quest-info"><h3>今週のクエスト</h3><p class="hint-text">今週はクリア済み。来週また挑戦！</p></div>`
        : `<div class="quest-icon">📅</div><div class="quest-info"><h3>今週のクエスト</h3><p>報酬: 200 G / 80 EX</p><p class="quest-rule-text">全5問・4問正解でクリア(4択・週1回)</p></div>`;
    weeklyCard.onclick = () => startBattle("weekly");

    const reviewCard = document.getElementById("card-review");
    reviewCard.innerHTML = `<div class="quest-icon">📖</div><div class="quest-info"><h3>復習クエスト</h3><p>報酬: 50 G / 50 EX</p><p class="quest-rule-text">全10問・8問正解でクリア(苦手な漢字を優先出題)</p></div>`;
    reviewCard.onclick = () => startBattle("review");
}

// --- 全国制覇モード解放 専用カットシーン(6フェーズ) ---
function openJapanUnlockCutscene() {
    showElement("japan-unlock-cutscene");
    ["jc-phase-1", "jc-phase-2", "jc-phase-3", "jc-phase-4", "jc-phase-5", "jc-phase-6"].forEach((id, idx) => {
        toggleVisibility(id, idx === 0);
    });

    // フェーズ1: 集めた仲間たちが震える
    const ownedIcons = MONSTERS.filter(m => gameState.zukan[m.id]).map(m => m.icon);
    const partyIcons = (ownedIcons.length > 0 ? ownedIcons : ["❓"]).slice(0, 8);
    const partyBox = document.getElementById("jc-party-icons");
    partyBox.innerHTML = partyIcons.map(icon => `<span class="jc-party-icon">${icon}</span>`).join("");

    playPhaseEnterAnim("jc-phase-1");
}

function jcGoToPhase2() {
    hideElement("jc-phase-1");
    showElement("jc-phase-2");
    playPhaseEnterAnim("jc-phase-2");

    // 日本地図を北から順に闇に飲み込んでいく演出
    const grid = document.getElementById("jc-map-grid");
    grid.innerHTML = PREFECTURES.map(p => `<span class="jc-map-cell">${p.icon}</span>`).join("");
    const cells = grid.querySelectorAll(".jc-map-cell");
    let i = 0;
    const darken = setInterval(() => {
        if (i < cells.length) {
            cells[i].classList.add("jc-map-dark");
            i++;
        } else {
            clearInterval(darken);
            setTimeout(jcGoToPhase3, 500);
        }
    }, 35);
}

function jcGoToPhase3() {
    hideElement("jc-phase-2");
    showElement("jc-phase-3");
    playPhaseEnterAnim("jc-phase-3");

    const pool = MONSTERS.filter(m => m.type === "normal" || m.type === "ultra");
    const picks = [];
    for (let i = 0; i < 8; i++) picks.push(pool[Math.floor(Math.random() * pool.length)]);
    const grid = document.getElementById("jc-enemy-grid");
    grid.innerHTML = picks.map((m, idx) => `<span class="jc-enemy-icon" style="animation-delay:${idx * 0.1}s">${m.icon}</span>`).join("");

    setTimeout(jcGoToPhase4, 1800);
}

function jcGoToPhase4() {
    hideElement("jc-phase-3");
    showElement("jc-phase-4");
    playPhaseEnterAnim("jc-phase-4");

    const partner = MONSTERS.find(m => m.id === gameState.partnerId);
    document.getElementById("jc-partner-icon").innerText = partner ? partner.icon : "❓";

    // 相棒がいた場合、高知の闇に連れ去られる(全国制覇するまで使用不可に)
    if (gameState.partnerId) {
        gameState.capturedPartnerId = gameState.partnerId;
        gameState.partnerId = null;
        gameState.partnerHearts = 3;
        saveGame();
        updateUI();
    }

    setTimeout(jcGoToPhase5, 2000);
}

function jcGoToPhase5() {
    hideElement("jc-phase-4");
    showElement("jc-phase-5");
    playPhaseEnterAnim("jc-phase-5");

    const text = "ハハハ！ 日本の 力（ちから）を うばい、\nお前の 仲間（なかま）は 我（わたし）が もらった！\n\n仲間を 取りもどしたくば、\n全国の 悪（わる）い やつらを たおし、\nこの 高知（こうち）まで 来（き）て みよ！";
    const target = document.getElementById("jc-boss-text");
    target.innerText = "";
    let i = 0;
    let buffer = "";
    const timer = setInterval(() => {
        buffer += text[i];
        target.innerText = buffer;
        i++;
        if (i >= text.length) {
            clearInterval(timer);
            target.innerHTML = addFurigana(text);
            showElement("btn-jc-next-5");
        }
    }, 35);
}

function jcGoToPhase6() {
    hideElement("jc-phase-5");
    showElement("jc-phase-6");
    playPhaseEnterAnim("jc-phase-6");
}

function jcFinish() {
    hideElement("japan-unlock-cutscene");
}

// --- ラスボス撃破 専用カットシーン(5フェーズ) ---
function openBossDefeatCutscene() {
    showElement("boss-defeat-cutscene");
    ["bd-phase-1", "bd-phase-2", "bd-phase-3", "bd-phase-4", "bd-phase-5"].forEach((id, idx) => {
        toggleVisibility(id, idx === 0);
    });
    hideElement("bd-partner-icon");
    hideElement("bd-map-grid");
    hideElement("bd-banner");
    document.getElementById("bd-boss-icon").className = "bd-boss-icon";
    playPhaseEnterAnim("bd-phase-1");
    bdStep1();
}

function bdStep1() {
    // 1. ラスボス消滅
    const caption = document.getElementById("bd-step-caption");
    caption.innerText = "ラスボスを、うちやぶった……！";
    document.getElementById("bd-boss-icon").classList.add("bd-boss-dissolve");
    playChime(true);

    setTimeout(bdStep2, 1400);
}

function bdStep2() {
    // 2. 相棒の救出
    const caught = MONSTERS.find(m => m.id === gameState.partnerId);
    const icon = document.getElementById("bd-partner-icon");
    icon.innerText = caught ? caught.icon : "👾";
    hideElement("bd-boss-icon");
    showElement("bd-partner-icon");
    document.getElementById("bd-step-caption").innerText = "鎖が くだけ散り、相棒が 飛びついてきた……「ありがとう！」";
    playChime(true);

    setTimeout(bdStep3, 1600);
}

function bdStep3() {
    // 3. 日本全土の浄化(高知から光が広がる)
    hideElement("bd-partner-icon");
    document.getElementById("bd-step-caption").innerText = "高知から、金色の光が 日本中へ 広がっていく……！";
    const grid = document.getElementById("bd-map-grid");
    grid.innerHTML = PREFECTURES.map(p => `<span class="jc-map-cell jc-map-dark">${p.icon}</span>`).join("");
    showElement("bd-map-grid");
    const cells = grid.querySelectorAll(".jc-map-cell");
    // 高知(配列末尾)から順に、逆順で光らせていく
    let i = cells.length - 1;
    const lighten = setInterval(() => {
        if (i >= 0) {
            cells[i].classList.remove("jc-map-dark");
            cells[i].classList.add("bd-map-gold");
            i--;
        } else {
            clearInterval(lighten);
            setTimeout(bdStep4, 500);
        }
    }, 30);
}

function bdStep4() {
    // 4. 全国制覇バナー表示
    document.getElementById("bd-step-caption").innerText = "";
    showElement("bd-banner");
    playChime(true);

    setTimeout(() => {
        hideElement("bd-phase-1");
        showElement("bd-phase-2");
        playPhaseEnterAnim("bd-phase-2");
        bdStep5();
    }, 2200);
}

function bdStep5() {
    // 長老の祝福メッセージ(タイプライター)
    const text = "見事じゃ！ 47都道府県の 漢字の試練を すべて 乗りこえたな！\n\nきみこそ 真の『漢字マスター』じゃ！";
    const target = document.getElementById("bd-elder-text");
    target.innerText = "";
    let i = 0;
    let buffer = "";
    const timer = setInterval(() => {
        buffer += text[i];
        target.innerText = buffer;
        i++;
        if (i >= text.length) {
            clearInterval(timer);
            target.innerHTML = addFurigana(text);

            // 全国制覇報酬の付与
            gameState.finalBossCutsceneShown = true;
            gameState.gold += 30000;
            gameState.selectedTitle = "top_master";
            saveGame();
            updateUI();

            showElement("bd-reward-box");
            showElement("btn-bd-next-2");
        }
    }, 35);
}

function bdGoToPhase3() {
    hideElement("bd-phase-2");
    showElement("bd-phase-3");
    playPhaseEnterAnim("bd-phase-3");

    const container = document.getElementById("game-container");
    container.classList.add("shake-penalty");
    setTimeout(() => container.classList.remove("shake-penalty"), 500);

    const text = "なんじゃ！？ 空が……闇に 包まれていく……！\nまだ 終わりでは なかったのか！？";
    const target = document.getElementById("bd-elder-text-2");
    target.innerText = "";
    let i = 0;
    let buffer = "";
    const timer = setInterval(() => {
        buffer += text[i];
        target.innerText = buffer;
        i++;
        if (i >= text.length) {
            clearInterval(timer);
            target.innerHTML = addFurigana(text);
            showElement("btn-bd-next-3");
        }
    }, 35);
}

function bdGoToPhase4() {
    hideElement("bd-phase-3");
    showElement("bd-phase-4");
    playPhaseEnterAnim("bd-phase-4");

    setTimeout(() => {
        showElement("bd-tower-title");
        playChime(true);
    }, 900);

    const text = "全国を おさめた 漢字マスターよ……\n己の 限界を こえる 覚悟は あるか？\nこのタワーの 頂上で 待つ！";
    const target = document.getElementById("bd-voice-text");
    target.innerText = "";
    let i = 0;
    let buffer = "";
    setTimeout(() => {
        const timer = setInterval(() => {
            buffer += text[i];
            target.innerText = buffer;
            i++;
            if (i >= text.length) {
                clearInterval(timer);
                target.innerHTML = addFurigana(text);
                showElement("btn-bd-next-4");
            }
        }, 35);
    }, 1600);
}

function bdGoToPhase5() {
    hideElement("bd-phase-4");
    showElement("bd-phase-5");
    playPhaseEnterAnim("bd-phase-5");
}

function bdFinish() {
    hideElement("boss-defeat-cutscene");
    gameState.towerUnlocked = true;
    saveGame();
    updateUI();
    switchScene("scene-select");
}

function showUnlockCutin(title, icon, isJapan = false, boss = null) {
    document.getElementById("unlock-cutin-icon").innerText = icon;
    document.getElementById("unlock-cutin-title").innerText = title;
    document.getElementById("unlock-cutin-sub").innerText = isJapan
        ? "🎉 全都道府県が舞台に！マップのテーマも解放された！ 🎉"
        : "新しいクエストが解放されました！";
    const content = document.querySelector("#unlock-cutin .unlock-cutin-content");
    content.classList.toggle("cutin-japan", isJapan);

    if (boss) {
        document.getElementById("unlock-boss-icon").innerText = boss.icon;
        document.getElementById("unlock-boss-text").innerText = `${boss.name}「${boss.quote}」`;
        showElement("unlock-boss-message");
    } else {
        hideElement("unlock-boss-message");
    }

    showElement("unlock-cutin");
}

// 解放されたクエストのボスからの挑戦メッセージを組み立てる
function buildUnlockBossMessage(tier) {
    if (tier === "oni") {
        const pool = MONSTERS.filter(m => m.type === "normal");
        const m = pool[Math.floor(Math.random() * pool.length)];
        return { icon: m.icon, name: m.name, quote: "ククク…鬼級の門をくぐるとは、いい度胸だ。俺を倒せるものなら倒してみろ！" };
    }
    if (tier === "kami") {
        const pool = MONSTERS.filter(m => m.type === "ultra");
        const m = pool[Math.floor(Math.random() * pool.length)];
        return { icon: m.icon, name: m.name, quote: "ほう…神級まで辿り着いたか。ここから先は、生半可な知識では通用しないぞ？" };
    }
    if (tier === "japan") {
        return { icon: "🐲", name: "高知県ラスボス・鰹タタキ龍", quote: "待っていたぞ、勇者よ…全国のモンスターを制した先で、この俺が待っている！" };
    }
    return null;
}

function playPhaseEnterAnim(id) {
    const el = document.getElementById(id);
    el.classList.remove("phase-enter");
    void el.offsetWidth; // reflow でアニメーションを再トリガー
    el.classList.add("phase-enter");
}

function setupEventListeners() {
    document.getElementById("btn-op-next-1").onclick = () => {
        hideElement("op-phase-1");
        showElement("op-phase-2");
        document.getElementById("op-story-modal").classList.add("story-phase-2");
        playPhaseEnterAnim("op-phase-2");
    };
    document.getElementById("btn-op-next-2").onclick = () => {
        hideElement("op-phase-2");
        showElement("op-phase-3");
        document.getElementById("op-story-modal").classList.remove("story-phase-2");
        document.getElementById("op-story-modal").classList.add("story-phase-3");
        playPhaseEnterAnim("op-phase-3");
        startElderTypewriter();
    };
    document.getElementById("btn-op-finish").onclick = () => {
        hideElement("op-story-modal");
        gameState.hasSeenOpening = true;
        gameState.lastSeenVersion = CURRENT_GAME_VERSION;
        saveGame();
    };

    document.getElementById("btn-title-start").onclick = () => switchScene("scene-rules");
    document.getElementById("btn-rules-yes").onclick = () => switchScene("scene-select");
    document.getElementById("btn-rules-no").onclick = () => showToast("⚠️ ルールを守れないハンターは、ゲームに入ることができません！", "error", 4000);

    document.querySelectorAll(".quest-card").forEach(card => {
        const q = card.dataset.quest;
        if (q) card.onclick = () => startBattle(q);
    });

    document.getElementById("btn-open-shop").onclick = () => showElement("modal-shop");
    document.getElementById("btn-close-shop").onclick = () => hideElement("modal-shop");
    document.getElementById("btn-open-zukan").onclick = openZukan;
    document.getElementById("btn-close-zukan").onclick = () => hideElement("modal-zukan");
    document.getElementById("btn-back-to-select").onclick = () => openRegionSelect();
    document.getElementById("btn-region-back-to-select").onclick = () => switchScene("scene-select");
    document.getElementById("btn-unlock-ok").onclick = () => hideElement("unlock-cutin");
    document.getElementById("btn-battle-flee").onclick = () => {
        if (!confirm("🏳️ この戦いから にげますか？(ペナルティはありません)")) return;
        clearInterval(currentBattle.timerId);
        returnFromBattle();
    };

    document.getElementById("card-tower").onclick = openTowerIntro;
    document.getElementById("btn-tower-start").onclick = startTowerRun;
    document.getElementById("btn-close-tower-intro").onclick = () => hideElement("modal-tower-intro");
    document.querySelectorAll(".tower-choice-btn").forEach(btn => {
        btn.onclick = (e) => checkTowerChoice(parseInt(e.target.dataset.idx));
    });
    document.getElementById("btn-tower-typing-submit").onclick = () => {
        checkTowerTyping(document.getElementById("tower-typing-input").value.trim());
    };
    document.getElementById("tower-typing-input").addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !document.getElementById("btn-tower-typing-submit").disabled) {
            checkTowerTyping(document.getElementById("tower-typing-input").value.trim());
        }
    });
    document.getElementById("btn-tower-flee").onclick = () => {
        if (!confirm(`🏳️ ここでやめますか？(現在 ${towerState.floor}階・${towerState.runGold}Gは獲得できます)`)) return;
        clearInterval(towerState.timerId);
        endTowerRun();
    };
    document.getElementById("btn-reset-data").onclick = () => {
        if (!confirm("⚠️ 本当にやり直しますか？\nレベル・称号・図鑑・アイテムなど、全てのデータが消えます。この操作は元に戻せません。")) return;
        localStorage.removeItem("kanji_monster_hunter_save");
        location.reload();
    };
    document.getElementById("btn-close-chest").onclick = () => {
        hideElement("modal-chest");
        returnFromBattle();
    };
    document.getElementById("btn-open-janken").onclick = openJanken;
    document.getElementById("btn-jc-next-1").onclick = jcGoToPhase2;
    document.getElementById("btn-jc-next-5").onclick = jcGoToPhase6;
    document.getElementById("btn-jc-finish").onclick = jcFinish;
    document.getElementById("btn-bd-next-2").onclick = bdGoToPhase3;
    document.getElementById("btn-bd-next-3").onclick = bdGoToPhase4;
    document.getElementById("btn-bd-next-4").onclick = bdGoToPhase5;
    document.getElementById("btn-bd-finish").onclick = bdFinish;
    document.getElementById("player-title").onclick = openTitleSelect;
    document.getElementById("btn-close-title-select").onclick = () => hideElement("modal-title-select");

    document.getElementById("btn-breakout-skip").onclick = skipBreakoutMinigame;
    const bLeft = document.getElementById("btn-breakout-left");
    const bRight = document.getElementById("btn-breakout-right");
    const setDir = (dir) => { if (breakout) breakout.moveDir = dir; };
    bLeft.addEventListener("mousedown", () => setDir(-1));
    bLeft.addEventListener("touchstart", (e) => { e.preventDefault(); setDir(-1); });
    bRight.addEventListener("mousedown", () => setDir(1));
    bRight.addEventListener("touchstart", (e) => { e.preventDefault(); setDir(1); });
    ["mouseup", "mouseleave", "touchend"].forEach(ev => {
        bLeft.addEventListener(ev, () => setDir(0));
        bRight.addEventListener(ev, () => setDir(0));
    });
    document.getElementById("btn-renewal-close").onclick = () => hideElement("renewal-update-modal");
    document.getElementById("btn-close-janken").onclick = () => hideElement("modal-janken");
    document.getElementById("btn-roulette-spin").onclick = spinRoulette;

    document.querySelectorAll(".btn-buy").forEach(btn => {
        btn.onclick = () => buyItem(btn.dataset.item, parseInt(btn.dataset.price), btn);
    });

    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.onclick = (e) => checkAnswer(parseInt(e.target.dataset.idx));
    });

    document.getElementById("btn-typing-submit").onclick = () => {
        checkAnswerTyping(document.getElementById("typing-input").value.trim());
    };
    document.getElementById("typing-input").addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !document.getElementById("btn-typing-submit").disabled) {
            checkAnswerTyping(document.getElementById("typing-input").value.trim());
        }
    });

    document.getElementById("btn-use-glasses").onclick = useGlasses;
    document.getElementById("btn-use-clock").onclick = useClock;
}

function startElderTypewriter() {
    const text = "よくぞ まいった、若きハンターよ！\n\n見てのとおり、世界は モンスターたちによって 支配されてしまった……\nしかし、希望は まだ ある！\n\n頼んだぞ！ 正しい 漢字の知識で モンスターたちを 倒し、この 世界に 再び 平和を 取り戻すのだ！\n\n……さあ、冒険の 旅へ 出発じゃ！";
    const target = document.getElementById("elder-text");
    target.innerText = "";
    let i = 0;
    let buffer = "";
    const timer = setInterval(() => {
        buffer += text[i];
        target.innerText = buffer; // バッファから毎回上書き。DOM側から読み戻さないので、ルビ付与による文字化けを防げる
        i++;
        if (i >= text.length) {
            clearInterval(timer);
            target.innerHTML = addFurigana(text); // 完了時にまとめてルビを付与
            showElement("btn-op-finish");
        }
    }, 40);
}

// 高知県を除く46県を、指定された県数配分(初級10/中級15/上級10/鬼級7/神級4)でランダムに割り当てる
function ensurePrefectureTiers() {
    if (gameState.prefectureTiers && Object.keys(gameState.prefectureTiers).length > 0) return;
    gameState.prefectureTiers = {};

    const pool = PREFECTURES.filter(p => p.name !== "高知県").map(p => p.name);
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    let idx = 0;
    Object.entries(JAPAN_TIER_COUNTS).forEach(([tier, count]) => {
        for (let k = 0; k < count && idx < pool.length; k++, idx++) {
            gameState.prefectureTiers[pool[idx]] = tier;
        }
    });

    saveGame();
}

// QUIZ_DATAから重複しないn問をランダムに抽出(不足時のみ重複を許容)
function pickRandomQuizzes(n) {
    const pool = [...QUIZ_DATA];
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    if (pool.length >= n) return pool.slice(0, n);

    const result = [...pool];
    while (result.length < n) {
        result.push(QUIZ_DATA[Math.floor(Math.random() * QUIZ_DATA.length)]);
    }
    return result;
}

// --- 宝箱システム(ボス撃破後 1/100 で出現) ---
const CHEST_RARITIES = [
    { key: "wood",    chance: 0.70, icon: "🪵", label: "木の宝箱" },
    { key: "silver",  chance: 0.20, icon: "🥈", label: "銀の宝箱" },
    { key: "gold",    chance: 0.08, icon: "🥇", label: "金の宝箱" },
    { key: "rainbow", chance: 0.02, icon: "🌈", label: "虹の宝箱" }
];

function rollChestRarity() {
    const r = Math.random();
    let cum = 0;
    for (const tier of CHEST_RARITIES) {
        cum += tier.chance;
        if (r < cum) return tier;
    }
    return CHEST_RARITIES[0];
}

function applyChestLoot(tier) {
    switch (tier.key) {
        case "wood": {
            const g = 50 + Math.floor(Math.random() * 51);
            gameState.gold += g;
            gameState.exp += 20;
            return `💰 ${g} G ＋ 📖 経験値アップ(小) +20 EX`;
        }
        case "silver": {
            const pick = ["glasses", "clock", "gold"][Math.floor(Math.random() * 3)];
            if (pick === "glasses") { gameState.items.glasses++; return "👓 カンニンググラス ×1"; }
            if (pick === "clock") { gameState.items.clock++; return "⏱️ タイムストップの時計 ×1"; }
            gameState.gold += 500;
            return "💰 500 G";
        }
        case "gold": {
            const pick = ["whistle", "color", "gold"][Math.floor(Math.random() * 3)];
            if (pick === "whistle") { gameState.items.whistle = true; return "🎺 レアモンスターの笛"; }
            if (pick === "color") { gameState.items.colorChange = true; return "🎨 漢字カラーチェンジ"; }
            gameState.gold += 2000;
            return "💰 2,000 G";
        }
        case "rainbow": {
            gameState.gold += 10000;
            gameState.items.expDouble = true;
            const eggCandidates = MONSTERS.filter(m => m.type === "shiny" && !gameState.zukan[m.id]);
            let eggMsg = "";
            if (eggCandidates.length > 0) {
                const egg = eggCandidates[Math.floor(Math.random() * eggCandidates.length)];
                gameState.zukan[egg.id] = true;
                eggMsg = ` ＋ 🥚限定モンスター「${egg.name}」`;
            }
            return `💰 10,000 G ＋ 📜 経験値2倍の書${eggMsg}`;
        }
    }
}

function showTreasureChest(tier) {
    showElement("modal-chest");
    const slot = document.getElementById("chest-slot");
    const resultText = document.getElementById("chest-result-text");
    const lootText = document.getElementById("chest-loot-text");
    const closeBtn = document.getElementById("btn-close-chest");
    resultText.innerText = "";
    lootText.innerText = "";
    slot.classList.remove("chest-settled");
    closeBtn.classList.add("hidden");

    // 鍵穴スロット演出: 木→銀→金→虹...と高速に切り替わり、最後に結果へ着地
    const icons = ["🪵", "🥈", "🥇", "🌈"];
    let i = 0;
    const spin = setInterval(() => {
        slot.innerText = icons[i % icons.length];
        i++;
    }, 90);

    setTimeout(() => {
        clearInterval(spin);
        slot.innerText = tier.icon;
        slot.classList.add("chest-settled");
        resultText.innerText = `${tier.label}が出た！`;
        playChime(tier.key !== "wood");

        const loot = applyChestLoot(tier);
        lootText.innerText = loot;
        saveGame();
        updateUI();
        closeBtn.classList.remove("hidden");
    }, 1500);
}

// --- モンスタールーレット(1日1回) ---
const ROULETTE_TIERS = [
    { key: "mystery", chance: 0.05, label: "💎 ??? / WIN!!", icon: "💎" },
    { key: "jackpot", chance: 0.20, label: "🎉 大当たり / WIN!!", icon: "🎉" },
    { key: "chance",  chance: 0.30, label: "⭐ 当たり / CHANCE", icon: "⭐" },
    { key: "miss",    chance: 0.45, label: "💦 はずれ / LOSE", icon: "💦" }
];

function getTodayId() {
    return Math.floor(Date.now() / (1000 * 60 * 60 * 24));
}

function getTodayJankenMonster() {
    const normals = MONSTERS.filter(m => m.type === "normal");
    return normals[getTodayId() % normals.length];
}

// 円盤ルーレットの各ゾーンの角度範囲(conic-gradientの定義と一致させる)
const ROULETTE_ANGLE_RANGES = { mystery: [0, 18], jackpot: [18, 90], chance: [90, 198], miss: [198, 360] };
let rouletteRotation = 0;

function spinRouletteWheelTo(tierKey) {
    const [start, end] = ROULETTE_ANGLE_RANGES[tierKey];
    const targetAngle = start + Math.random() * (end - start);
    const currentMod = ((rouletteRotation % 360) + 360) % 360;
    const desiredMod = ((-targetAngle % 360) + 360) % 360;
    let delta = desiredMod - currentMod;
    if (delta < 0) delta += 360;
    rouletteRotation += (5 * 360) + delta; // 常に5周以上まわしてから止める
    const wheel = document.getElementById("roulette-wheel");
    if (wheel) wheel.style.transform = `rotate(${rouletteRotation}deg)`;
}

function rollRouletteTier() {
    const r = Math.random();
    let cum = 0;
    for (const t of ROULETTE_TIERS) {
        cum += t.chance;
        if (r < cum) return t;
    }
    return ROULETTE_TIERS[ROULETTE_TIERS.length - 1];
}

function openJanken() {
    showElement("modal-janken");
    const monster = getTodayJankenMonster();
    document.getElementById("janken-monster-icon").innerText = monster.icon;
    document.getElementById("janken-monster-name").innerText = `${monster.name}が待ちかまえている！`;

    const alreadyPlayed = gameState.janken.lastPlayedDay === getTodayId();
    toggleVisibility("janken-intro", !alreadyPlayed);
    toggleVisibility("janken-done", alreadyPlayed);
    hideElement("janken-result");
    const wheel = document.getElementById("roulette-wheel");
    if (wheel) wheel.style.transform = `rotate(${rouletteRotation}deg)`;
}

function spinRoulette() {
    if (gameState.janken.lastPlayedDay === getTodayId()) return;

    // 回転中もホイールが見えるよう、introはまだ隠さずボタンだけ無効化する
    document.getElementById("btn-roulette-spin").disabled = true;
    const resultText = document.getElementById("janken-result-text");
    const msgText = document.getElementById("janken-result-msg");
    hideElement("janken-result");
    resultText.innerText = "";
    msgText.innerText = "";
    playChime(true);

    // 結果を先に抽選し、円盤をその位置まで回転させる(実際に回って止まる演出)
    let tier = rollRouletteTier();
    spinRouletteWheelTo(tier.key);

    setTimeout(() => {
        hideElement("janken-intro");
        showElement("janken-result");
        document.getElementById("btn-roulette-spin").disabled = false;

        const today = getTodayId();
        const wasConsecutive = gameState.janken.lastPlayedDay === today - 1;
        let rewardG = 0;

        if (tier.key === "mystery") {
            rewardG = 1000;
            resultText.innerText = tier.label;
            msgText.innerText = `まさかの大成功！ +${rewardG} G`;
            playChime(true);
        } else if (tier.key === "jackpot") {
            const newStreak = wasConsecutive ? gameState.janken.winStreakDays + 1 : 1;
            gameState.janken.winStreakDays = newStreak;
            rewardG = newStreak >= 3 ? 600 : 500;
            resultText.innerText = tier.label;
            msgText.innerText = newStreak >= 3
                ? `🎉🎉 3日連続大当たりジャックポット！ +${rewardG} G 🎉🎉`
                : `やったね！ +${rewardG} G`;
            playChime(true);
        } else if (tier.key === "chance") {
            gameState.janken.winStreakDays = 0;
            rewardG = 100;
            resultText.innerText = tier.label;
            msgText.innerText = `+${rewardG} G`;
        } else {
            // はずれ
            gameState.janken.winStreakDays = 0;
            rewardG = 50;
            resultText.innerText = tier.label;
            msgText.innerText = `負けちゃったけど次はがんばれ！『さんずい』の漢字を復習するといいぞ！ +${rewardG} G`;
        }

        gameState.janken.lastPlayedDay = today;
        gameState.gold += rewardG;
        saveGame();
        updateUI();
    }, 3000);
}

// 称号の定義一覧(達成すると「獲得済み」になり、以後は自由に選んで表示できる)
const TITLE_DEFS = [
    { key: "starter", label: "【駆け出し漢士】", check: () => true },
    { key: "tatsujin", label: "【漢字の達人】", check: () => gameState.level >= 10 },
    { key: "master", label: "【漢字マスター】", check: () => gameState.level >= 30 },
    { key: "kanji_god", label: "【漢字神】", check: () => gameState.level >= 50 },
    { key: "oni_slayer", label: "【鬼を討つ者】", check: () => gameState.clears.oni >= 3 },
    { key: "kami_slayer", label: "【神をも超えし者】", check: () => gameState.clears.kami >= 5 },
    { key: "japan_hero", label: "【日本制覇の英雄】", check: () => gameState.prefecturesCleared.length >= 47 },
    { key: "top_master", label: "【日本一の漢字マスター】", check: () => gameState.finalBossCutsceneShown }
];

function openTitleSelect() {
    showElement("modal-title-select");
    const list = document.getElementById("title-select-list");
    list.innerHTML = "";
    TITLE_DEFS.forEach(t => {
        if (!gameState.earnedTitles.includes(t.key)) return;
        const btn = document.createElement("button");
        btn.className = "btn-pop title-select-btn" + (gameState.selectedTitle === t.key ? " title-select-current" : "");
        btn.innerText = (gameState.selectedTitle === t.key ? "✅ " : "") + t.label;
        btn.onclick = () => {
            gameState.selectedTitle = t.key;
            saveGame();
            updateUI();
            hideElement("modal-title-select");
        };
        list.appendChild(btn);
    });
}

function getCurrentWeekId() {
    const daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    return Math.floor(daysSinceEpoch / 7);
}

// 過去に間違えた漢字を優先的に出題し、足りない分はランダムで補う
function pickReviewQuizzes(n) {
    const missedPool = QUIZ_DATA.filter(q => gameState.missedKanji.includes(q.kanji));
    for (let i = missedPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [missedPool[i], missedPool[j]] = [missedPool[j], missedPool[i]];
    }
    if (missedPool.length >= n) return missedPool.slice(0, n);

    const rest = pickRandomQuizzes(n - missedPool.length);
    return [...missedPool, ...rest];
}

function startBattle(questKey, prefObj = null) {
    QUIZ_DATA = parseKanjiData(KANJI_TEXT_DATA);
    if (QUIZ_DATA.length === 0) {
        showToast("⚠️ 出題範囲に対応する問題が見つかりません。", "error");
        return;
    }

    if (questKey === "weekly" && gameState.weeklyQuestClearedWeek === getCurrentWeekId()) {
        showToast("📅 今週のクエストはクリア済みです。来週また挑戦してね！", "error");
        return;
    }

    currentBattle.questKey = questKey;
    currentBattle.prefTarget = prefObj;
    currentBattle.isKochiBoss = (prefObj && prefObj.name === "高知県");
    currentBattle.questionIndex = 0;
    currentBattle.correctCount = 0;
    currentBattle.comboCount = 0;

    if (currentBattle.isKochiBoss) {
        // 高知県ラスボスは従来通り: 1問勝負・記述式・10秒・特別報酬
        currentBattle.mode = "typing";
        currentBattle.timePerQ = 10;
        currentBattle.rewardG = 1000;
        currentBattle.rewardEX = 1000;
        currentBattle.passThreshold = 1;
        currentBattle.quizList = pickRandomQuizzes(1);
    } else {
        const rule = QUEST_RULES[questKey] || QUEST_RULES.advanced;
        currentBattle.mode = rule.mode;
        currentBattle.timePerQ = rule.timePerQ;
        currentBattle.rewardG = rule.rewardG;
        currentBattle.rewardEX = rule.rewardEX;
        currentBattle.passThreshold = rule.passThreshold;
        currentBattle.quizList = questKey === "review"
            ? pickReviewQuizzes(rule.totalQuestions)
            : pickRandomQuizzes(rule.totalQuestions);
    }

    const battleKey = prefObj ? prefObj.name : questKey;
    currentBattle.battleKey = battleKey;

    if (gameState.pendingMonster[battleKey]) {
        // リセマラ防止: このクエスト枠をクリアするまで、前回と同じモンスターで再戦させる
        const pending = gameState.pendingMonster[battleKey];
        currentBattle.isUltra = pending.isUltra;
        currentBattle.isShiny = pending.isShiny;
        currentBattle.isRival = pending.isRival || false;
        // 古いセーブに残る旧形式(画像フィールド未対応)のモンスター情報を使わないよう、
        // MONSTERSの最新データをidで再取得する(ご当地モンスターなど配列にないものはそのまま使う)
        currentBattle.monster = (pending.monster && MONSTERS.find(m => m.id === pending.monster.id)) || pending.monster;
        currentBattle.rewardG = pending.rewardG;
        currentBattle.rewardEX = pending.rewardEX;
    } else {
        // 色違い 1/100・超激レア 1/500 判定(このクエスト枠に初めて挑戦する時のみ抽選)
        const rand100 = Math.floor(Math.random() * 100);
        const rand500 = Math.floor(Math.random() * 500);

        if (prefObj) {
            // ご当地モンスター戦
            currentBattle.isUltra = false;
            currentBattle.isRival = false;
            currentBattle.isShiny = (rand100 === 0);
            currentBattle.monster = {
                id: `pref_${prefObj.name}`,
                name: `${prefObj.name}限定・${prefObj.boss}`,
                icon: prefObj.icon,
                type: "local"
            };
        } else {
            // 通常クエスト戦
            currentBattle.isUltra = (rand500 === 0) || gameState.items.whistle;
            currentBattle.isShiny = !currentBattle.isUltra && (rand100 === 0);
            currentBattle.isRival = !currentBattle.isUltra && !currentBattle.isShiny && (Math.floor(Math.random() * 30) === 0);
            if (gameState.items.whistle) gameState.items.whistle = false;

            if (currentBattle.isUltra) {
                const ultras = MONSTERS.filter(m => m.type === "ultra");
                currentBattle.monster = ultras[Math.floor(Math.random() * ultras.length)];
                currentBattle.rewardG *= 10;
                currentBattle.rewardEX *= 10;
            } else if (currentBattle.isShiny) {
                const shinies = MONSTERS.filter(m => m.type === "shiny");
                currentBattle.monster = shinies[Math.floor(Math.random() * shinies.length)];
                currentBattle.rewardG *= 3;
                currentBattle.rewardEX *= 3;
            } else if (currentBattle.isRival) {
                const rivals = MONSTERS.filter(m => m.type === "rival");
                currentBattle.monster = rivals[Math.floor(Math.random() * rivals.length)];
                currentBattle.rewardG *= 2;
                currentBattle.rewardEX *= 2;
            } else {
                const normals = MONSTERS.filter(m => m.type === "normal");
                currentBattle.monster = normals[Math.floor(Math.random() * normals.length)];
            }
        }

        gameState.pendingMonster[battleKey] = {
            monster: currentBattle.monster,
            isShiny: currentBattle.isShiny,
            isUltra: currentBattle.isUltra,
            isRival: currentBattle.isRival,
            rewardG: currentBattle.rewardG,
            rewardEX: currentBattle.rewardEX
        };
    }

    gameState.zukan[currentBattle.monster.id] = true;
    saveGame();

    if (currentBattle.isUltra) {
        const uIconEl = document.getElementById("ultra-monster-icon");
        if (currentBattle.monster.portraitImg) {
            uIconEl.innerHTML = `<img src="${currentBattle.monster.portraitImg}" class="ultra-portrait-img" alt="${currentBattle.monster.name}">`;
        } else {
            uIconEl.innerHTML = "";
        }
        document.getElementById("ultra-monster-name").innerText = currentBattle.monster.name;
        showElement("ultra-cutin");
        document.getElementById("btn-ultra-start").onclick = () => {
            hideElement("ultra-cutin");
            setupBattleUI();
        };
    } else if (currentBattle.isRival) {
        const displayName = currentBattle.monster.trainerName || currentBattle.monster.name || "？？？";
        const displayIcon = currentBattle.monster.trainerIcon || currentBattle.monster.icon || "⚔️";
        const iconEl = document.getElementById("rival-monster-icon");
        if (currentBattle.monster.portraitImg) {
            iconEl.innerHTML = `<img src="${currentBattle.monster.portraitImg}" class="rival-portrait-img" alt="${displayName}">`;
        } else {
            iconEl.innerHTML = "";
            iconEl.innerText = displayIcon;
        }
        document.getElementById("rival-monster-name").innerText = displayName;
        document.getElementById("rival-monster-quote").innerText = `「${currentBattle.monster.quote || "……"}」`;
        hideElement("rival-partner-info");
        showElement("rival-cutin");
        document.getElementById("btn-rival-start").onclick = () => {
            hideElement("rival-cutin");
            setupBattleUI();
        };
    } else {
        setupBattleUI();
    }
}

function setupBattleUI() {
    switchScene("scene-battle");
    hideElement("battle-partner-attack-zone");

    const mAvatar = document.getElementById("monster-avatar");
    const rivalName = currentBattle.monster.trainerName || currentBattle.monster.name || "？？？";
    const rivalIcon = currentBattle.monster.trainerIcon || currentBattle.monster.icon || "⚔️";
    if (currentBattle.isRival && currentBattle.monster.portraitImg) {
        mAvatar.innerHTML = `<img src="${currentBattle.monster.portraitImg}" class="rival-battle-img" alt="${rivalName}">`;
    } else if (currentBattle.isUltra && currentBattle.monster.portraitImg) {
        mAvatar.innerHTML = `<img src="${currentBattle.monster.portraitImg}" class="ultra-battle-img" alt="${currentBattle.monster.name || ""}">`;
    } else {
        mAvatar.innerHTML = "";
        mAvatar.innerText = currentBattle.isRival ? rivalIcon : (currentBattle.monster.icon || "❓");
    }
    // 実画像には疑似ピクセレートフィルターは不要(絵文字の時だけ適用)
    const useRealImg = currentBattle.monster.portraitImg && (currentBattle.isRival || currentBattle.isUltra);
    mAvatar.classList.toggle("ultra-pixelate", currentBattle.isUltra && !useRealImg);
    document.getElementById("monster-area").classList.toggle("ultra-pixel-frame", currentBattle.isUltra);

    // 1/100 色違いキラキラ演出
    if (currentBattle.isShiny) {
        mAvatar.classList.add("shiny-monster");
        document.getElementById("monster-name").innerText = `✨【色違い】${currentBattle.monster.name}✨`;
    } else {
        mAvatar.classList.remove("shiny-monster");
        document.getElementById("monster-name").innerText = currentBattle.isRival
            ? rivalName
            : (currentBattle.monster.name || "？？？");
    }

    document.getElementById("monster-hp-fill").style.width = "100%";
    toggleVisibility("monster-shiny-tag", currentBattle.isShiny);

    const questLabelMap = { beginner: "初級", intermediate: "中級", advanced: "上級", oni: "鬼級", kami: "神級" };
    document.getElementById("battle-quest-name").innerText = currentBattle.isKochiBoss
        ? "高知県ラスボス"
        : (questLabelMap[currentBattle.questKey] || currentBattle.questKey);

    loadQuestion();
}

function loadQuestion() {
    currentBattle.quiz = currentBattle.quizList[currentBattle.questionIndex];

    const exampleElem = document.getElementById("quiz-example");
    exampleElem.innerHTML = `「<span id="quiz-word" class="quiz-word no-furigana">${currentBattle.quiz.wordText}</span>」の<span class="quiz-question-tail">読み方は？</span>`;
    if (gameState.items.colorChange) document.getElementById("quiz-word").style.color = gameState.customKanjiColor;

    document.getElementById("battle-progress").innerText =
        `問題 ${currentBattle.questionIndex + 1}/${currentBattle.quizList.length}(正解${currentBattle.correctCount})`;

    document.getElementById("monster-hp-fill").style.width =
        `${Math.round(100 - (currentBattle.questionIndex / currentBattle.quizList.length) * 100)}%`;

    // mode: "choice"=4択 / "typing"=記述(ひらがな入力)
    if (currentBattle.mode === "typing") {
        hideElement("ui-choices");
        showElement("ui-typing");
        document.getElementById("typing-input").value = "";
        document.getElementById("typing-input").disabled = false;
        document.getElementById("btn-typing-submit").disabled = false;
        document.getElementById("typing-input").focus();
        document.getElementById("btn-use-glasses").disabled = true;
    } else {
        showElement("ui-choices");
        hideElement("ui-typing");
        const btns = document.querySelectorAll(".choice-btn");
        btns.forEach((btn, idx) => {
            btn.innerText = currentBattle.quiz.choices[idx];
            btn.style.display = "block";
            btn.disabled = false;
        });
        document.getElementById("btn-use-glasses").disabled = (gameState.items.glasses <= 0);
    }

    clearInterval(currentBattle.timerId);
    document.getElementById("game-container").classList.remove("crisis-mode");
    if (currentBattle.timePerQ) {
        showElement("timer-box");
        currentBattle.timer = currentBattle.timePerQ;
        document.getElementById("timer-val").innerText = currentBattle.timer;
        currentBattle.timerId = setInterval(() => {
            currentBattle.timer--;
            document.getElementById("timer-val").innerText = currentBattle.timer;
            if (currentBattle.timer <= 3 && currentBattle.timer > 0) {
                document.getElementById("game-container").classList.add("crisis-mode");
                playHeartbeat();
            }
            if (currentBattle.timer <= 0) {
                clearInterval(currentBattle.timerId);
                registerAnswer(false); // タイムアップはこの問題を不正解として次へ進む
            }
        }, 1000);
    } else {
        hideElement("timer-box");
    }
}

function checkAnswer(idx) {
    registerAnswer(idx === currentBattle.quiz.answer);
}

function checkAnswerTyping(val) {
    registerAnswer(val === currentBattle.quiz.choices[currentBattle.quiz.answer]);
}

// 1問分の正誤を記録し、次の問題へ。全問解答し終えたらfinishBattleで合否判定。
function registerAnswer(isCorrect) {
    clearInterval(currentBattle.timerId);
    const container = document.getElementById("game-container");
    const wasCrisis = container.classList.contains("crisis-mode");
    container.classList.remove("crisis-mode");

    // 二重送信防止(連打対策)。次の問題表示時に再度有効化される。
    document.querySelectorAll(".choice-btn").forEach(btn => btn.disabled = true);
    document.getElementById("btn-typing-submit").disabled = true;

    if (isCorrect) {
        currentBattle.correctCount++;
        currentBattle.comboCount = (currentBattle.comboCount || 0) + 1;

        // ダメージ数値ポップ
        const dmg = Math.round(100 / currentBattle.quizList.length);
        showDamagePop(`-${dmg}%`, currentBattle.comboCount >= 3);

        // コンボ演出(2連続以上で表示)
        if (currentBattle.comboCount >= 2) showComboPopup(currentBattle.comboCount);

        // ギリギリ正解の「SLOW MOTION」演出
        if (currentBattle.timePerQ && wasCrisis && currentBattle.timer <= 1) {
            playChime(true);
            const fx = document.createElement("div");
            fx.className = "slowmo-safe";
            fx.innerText = "⏱️ ギリギリセーフ！";
            document.getElementById("scene-battle").appendChild(fx);
            setTimeout(() => fx.remove(), 900);
        }
    } else {
        currentBattle.comboCount = 0;
        if (!gameState.missedKanji.includes(currentBattle.quiz.kanji)) {
            gameState.missedKanji.push(currentBattle.quiz.kanji);
            if (gameState.missedKanji.length > 100) gameState.missedKanji.shift();
        }
        container.classList.add("shake-penalty");
        setTimeout(() => container.classList.remove("shake-penalty"), 400);

        // 間違えた問題の正解をその場で表示(まとめて見せるより記憶に残りやすいため)
        const correctReading = currentBattle.quiz.choices[currentBattle.quiz.answer];
        showToast(`❌ 正解は「${correctReading}」でした！`, "error", 2200);
    }

    currentBattle.questionIndex++;

    if (currentBattle.questionIndex >= currentBattle.quizList.length) {
        finishBattle();
    } else {
        setTimeout(loadQuestion, isCorrect ? 200 : 1800);
    }
}

// 全問(高知ラスボスは1問)解答し終えた時点で合否を判定する
// バトル終了後の戻り先: 都道府県クエストなら地方マップへ、それ以外はクエスト選択画面へ
function returnFromBattle() {
    if (currentBattle.prefTarget && !currentBattle.isKochiBoss) {
        openJapanMap();
    } else {
        switchScene("scene-select");
    }
}

function finishBattle() {
    clearInterval(currentBattle.timerId);
    const required = currentBattle.passThreshold;
    const isClear = currentBattle.correctCount >= required;
    const isNoMiss = currentBattle.correctCount >= currentBattle.quizList.length;
    const isOniOrAbove = currentBattle.questKey === "oni" || currentBattle.questKey === "kami" || currentBattle.isKochiBoss;

    if (isClear) {
        document.getElementById("monster-hp-fill").style.width = "0%";

        if (gameState.partnerId && gameState.zukan[gameState.partnerId]) {
            const partner = MONSTERS.find(m => m.id === gameState.partnerId);
            document.getElementById("battle-partner-anim-icon").innerText = partner ? partner.icon : "👾";
            showElement("battle-partner-attack-zone");
        }

        setTimeout(() => {
            let earnedEX = currentBattle.rewardEX;
            if (gameState.items.expDouble) earnedEX *= 2;

            gameState.gold += currentBattle.rewardG;
            gameState.exp += earnedEX;

            let nextExp = 600;
            while (gameState.exp >= nextExp) {
                gameState.exp -= nextExp;
                gameState.level++;
                showToast(`🎉 LEVEL UP! レベル${gameState.level} になりました！`, "levelup", 3500);
            }

            if (!currentBattle.isKochiBoss) {
                if (currentBattle.questKey === "advanced") gameState.clears.advanced++;
                if (currentBattle.questKey === "oni") gameState.clears.oni++;
                if (currentBattle.questKey === "kami") gameState.clears.kami++;
                if (currentBattle.questKey === "weekly") gameState.weeklyQuestClearedWeek = getCurrentWeekId();
                if (currentBattle.questKey === "review") gameState.milestones.reviewClears++;
            }

            if (currentBattle.prefTarget && !gameState.prefecturesCleared.includes(currentBattle.prefTarget.name)) {
                gameState.prefecturesCleared.push(currentBattle.prefTarget.name);
            }

            // 全国制覇(47都道府県クリア)達成時、高知に囚われていた相棒を救出する
            let rescueMsg = "";
            if (gameState.capturedPartnerId && gameState.prefecturesCleared.length >= 47) {
                const rescued = MONSTERS.find(m => m.id === gameState.capturedPartnerId);
                gameState.partnerId = gameState.capturedPartnerId;
                gameState.capturedPartnerId = null;
                gameState.partnerHearts = 3;
                rescueMsg = `🎉 相棒の「${rescued ? rescued.name : "なかま"}」を救出した！`;
            }

            // リセマラ防止: クリアしたので、次に挑戦する時は新しいモンスターを抽選する
            delete gameState.pendingMonster[currentBattle.battleKey];

            // ライバル撃破ボーナス: ランダムでアイテムを1つ獲得
            let rivalItemMsg = "";
            if (currentBattle.isRival) {
                const itemPool = [
                    { key: "glasses", label: "👓 カンニンググラス" },
                    { key: "clock", label: "⏱️ タイムストップの時計" },
                    { key: "whistle", label: "🎺 レアモンスターの笛" },
                    { key: "color", label: "🎨 漢字カラーチェンジ" },
                    { key: "expScroll", label: "📜 経験値2倍の書" }
                ];
                const picked = itemPool[Math.floor(Math.random() * itemPool.length)];
                if (picked.key === "glasses") gameState.items.glasses++;
                else if (picked.key === "clock") gameState.items.clock++;
                else if (picked.key === "whistle") gameState.items.whistle = true;
                else if (picked.key === "color") gameState.items.colorChange = true;
                else gameState.items.expDouble = true;
                rivalItemMsg = picked.label;
            }

            // ノーミス連勝(鬼級以上)
            if (isOniOrAbove) {
                gameState.milestones.noMissStreak = isNoMiss ? gameState.milestones.noMissStreak + 1 : 0;
            }

            // 隠し称号の判定(個別のトーストで表示)
            const hiddenToasts = [];
            if (currentBattle.isUltra && !gameState.hiddenTitles.shinyMaster) {
                gameState.hiddenTitles.shinyMaster = true;
                hiddenToasts.push("色違いマスター");
            }
            if (currentBattle.questKey === "review" && gameState.milestones.reviewClears >= 10 && !gameState.hiddenTitles.hyakusen) {
                gameState.hiddenTitles.hyakusen = true;
                hiddenToasts.push("百戦錬磨");
            }
            if (isOniOrAbove && gameState.milestones.noMissStreak >= 3 && !gameState.hiddenTitles.nomiss) {
                gameState.hiddenTitles.nomiss = true;
                hiddenToasts.push("ノーミスナイト");
            }

            saveGame();

            showToast(`⚔️ 撃破成功！(${currentBattle.correctCount}/${currentBattle.quizList.length}問正解) 💰+${currentBattle.rewardG}G ✨+${earnedEX}EX`, "success", 3500);
            if (rescueMsg) {
                setTimeout(() => showToast(rescueMsg, "title", 4500), 500);
            }
            if (rivalItemMsg) {
                setTimeout(() => showToast(`🎁 ライバル撃破ボーナス！ ${rivalItemMsg} を手に入れた！`, "title", 4000), 900);
            }
            hiddenToasts.forEach((label, i) => {
                setTimeout(() => showToast(`🏆 隠し称号「${label}」を獲得！`, "title", 4000), 500 + i * 400);
            });

            updateUI();

            // 全国制覇を初めて達成した瞬間は、専用のラスボス撃破カットシーンを優先表示
            if (gameState.prefecturesCleared.length >= 47 && !gameState.finalBossCutsceneShown) {
                openBossDefeatCutscene();
                return;
            }

            // クエスト5回クリアごとにボーナスミニゲーム(ブロックくずし)が出現
            gameState.questClearCount++;
            saveGame();
            if (gameState.questClearCount % 5 === 0) {
                openBreakoutMinigame();
                return;
            }

            // ボス撃破後、1/100の確率で宝箱が出現
            const chestTier = Math.random() < 0.01 ? rollChestRarity() : null;
            if (chestTier) {
                showTreasureChest(chestTier);
            } else {
                returnFromBattle();
            }
        }, 400);
    } else {
        const container = document.getElementById("game-container");
        container.classList.add("shake-penalty");
        setTimeout(() => container.classList.remove("shake-penalty"), 400);

        if (isOniOrAbove) gameState.milestones.noMissStreak = 0;

        let partnerDeadMsg = "";
        let partnerVanished = false;
        if (gameState.partnerId && gameState.zukan[gameState.partnerId]) {
            gameState.partnerHearts--;
            if (gameState.partnerHearts <= 0) {
                const deadPartner = MONSTERS.find(m => m.id === gameState.partnerId);
                const pName = deadPartner ? deadPartner.name : "ご当地相棒";
                partnerDeadMsg = `\n💀 相棒の「${pName}」は力つき、消滅してしまった……！`;
                delete gameState.zukan[gameState.partnerId];
                gameState.partnerId = null;
                gameState.partnerHearts = 3;
                partnerVanished = true;
            } else {
                partnerDeadMsg = `\n⚠️ 相棒のライフが減った！ (残り ❤️${gameState.partnerHearts}/3)`;
            }
        }

        const finishUp = () => {
            saveGame();
            updateUI();
            showToast(`❌ クエスト失敗... (${currentBattle.correctCount}/${currentBattle.quizList.length}問正解、${required}問以上の正解が必要でした)`, "error", 3500);
            if (partnerDeadMsg) {
                setTimeout(() => showToast(partnerDeadMsg.trim(), partnerVanished ? "error" : "info", 3500), 400);
            }
            returnFromBattle();
        };

        if (partnerVanished) {
            // 消滅演出(アイコンがフェード＆回転しながら消える)を見せてから結果を表示
            const partnerIcon = document.getElementById("partner-icon");
            partnerIcon.classList.add("partner-vanish");
            playChime(false);
            setTimeout(() => {
                partnerIcon.classList.remove("partner-vanish");
                finishUp();
            }, 700);
        } else {
            finishUp();
        }
    }
}

// --- 漢字タワー(全国制覇後に解禁されるエンドコンテンツ) ---
let towerState = { active: false, floor: 0, runGold: 0, streak: 0, quiz: null, timerId: null, timer: 0 };

function getTowerTimeLimit(floor) {
    return Math.max(5, 10 - Math.floor((floor - 1) / 10));
}
function isTowerMilestoneFloor(floor) {
    if (floor === 10 || floor === 30 || floor === 50 || floor === 100) return true;
    return floor > 100 && (floor - 100) % 20 === 0;
}
function getTowerMode(floor) {
    return floor >= 10 ? "typing" : "choice";
}

function openTowerIntro() {
    showElement("modal-tower-intro");
    document.getElementById("tower-best-floor").innerText = gameState.tower.bestFloor;
    const todayWeek = getCurrentWeekId();
    const weeklyBest = gameState.tower.weeklyWeekId === todayWeek ? gameState.tower.weeklyBestFloor : 0;
    document.getElementById("tower-weekly-best").innerText = weeklyBest;
}

function startTowerRun() {
    if (gameState.gold < 50) {
        showToast("💰 ゴールドが足りません！(挑戦には50G必要です)", "error");
        return;
    }
    gameState.gold -= 50;
    saveGame();
    updateUI();
    hideElement("modal-tower-intro");

    towerState = { active: true, floor: 1, runGold: 0, streak: 0, quiz: null, timerId: null, timer: 0 };
    switchScene("scene-tower");
    loadTowerFloor();
}

function loadTowerFloor() {
    QUIZ_DATA = parseKanjiData(KANJI_TEXT_DATA);
    towerState.quiz = QUIZ_DATA[Math.floor(Math.random() * QUIZ_DATA.length)];

    document.getElementById("tower-floor-num").innerText = towerState.floor;
    document.getElementById("tower-gold").innerText = towerState.runGold;
    document.getElementById("tower-streak").innerText = towerState.streak;
    toggleVisibility("tower-fever-tag", towerState.streak >= 15);
    document.getElementById("tower-example").innerHTML =
        `「<span class="quiz-word no-furigana">${towerState.quiz.wordText}</span>」の<span class="quiz-question-tail">読み方は？</span>`;

    const mode = getTowerMode(towerState.floor);
    if (mode === "typing") {
        hideElement("tower-choices");
        showElement("tower-typing");
        const input = document.getElementById("tower-typing-input");
        input.value = "";
        input.disabled = false;
        document.getElementById("btn-tower-typing-submit").disabled = false;
        input.focus();
    } else {
        showElement("tower-choices");
        hideElement("tower-typing");
        document.querySelectorAll(".tower-choice-btn").forEach((btn, idx) => {
            btn.innerText = towerState.quiz.choices[idx];
            btn.disabled = false;
            btn.style.display = "block";
        });
    }

    clearInterval(towerState.timerId);
    document.getElementById("game-container").classList.remove("crisis-mode");
    towerState.timer = getTowerTimeLimit(towerState.floor);
    document.getElementById("tower-timer-val").innerText = towerState.timer;
    towerState.timerId = setInterval(() => {
        towerState.timer--;
        document.getElementById("tower-timer-val").innerText = towerState.timer;
        if (towerState.timer <= 3 && towerState.timer > 0) {
            document.getElementById("game-container").classList.add("crisis-mode");
            playHeartbeat();
        }
        if (towerState.timer <= 0) {
            clearInterval(towerState.timerId);
            registerTowerAnswer(false, true);
        }
    }, 1000);
}

function checkTowerChoice(idx) {
    registerTowerAnswer(idx === towerState.quiz.answer, false);
}
function checkTowerTyping(val) {
    registerTowerAnswer(val === towerState.quiz.choices[towerState.quiz.answer], false);
}

function registerTowerAnswer(isCorrect, isTimeout) {
    clearInterval(towerState.timerId);
    document.getElementById("game-container").classList.remove("crisis-mode");
    document.querySelectorAll(".tower-choice-btn").forEach(b => b.disabled = true);
    document.getElementById("btn-tower-typing-submit").disabled = true;

    if (isCorrect) {
        towerState.streak++;
        const fever = towerState.streak >= 15;
        const floorGold = 10 * (fever ? 3 : 1);
        towerState.runGold += floorGold;
        showDamagePop(`+${floorGold}G`, fever);
        if (fever && towerState.streak === 15) {
            showToast("🔥 フィーバーモード発動！ 獲得ゴールドが3倍に！", "title", 3000);
        }

        if (isTowerMilestoneFloor(towerState.floor)) {
            grantTowerMilestoneReward(towerState.floor);
        }

        towerState.floor++;
        setTimeout(loadTowerFloor, 350);
    } else if (isTimeout) {
        // タイムオーバーのみ即終了
        const container = document.getElementById("game-container");
        container.classList.add("shake-penalty");
        setTimeout(() => container.classList.remove("shake-penalty"), 400);
        endTowerRun();
    } else {
        // 間違いは何回でもOK。連続正解はリセットされるが、同じ階で問題を変えてやり直せる
        towerState.streak = 0;
        const container = document.getElementById("game-container");
        container.classList.add("shake-penalty");
        setTimeout(() => container.classList.remove("shake-penalty"), 400);
        setTimeout(loadTowerFloor, 400);
    }
}

function grantTowerMilestoneReward(floor) {
    if (Math.random() < 0.5) {
        const itemPool = [
            { key: "glasses", label: "👓 カンニンググラス" },
            { key: "clock", label: "⏱️ タイムストップの時計" },
            { key: "whistle", label: "🎺 レアモンスターの笛" },
            { key: "color", label: "🎨 漢字カラーチェンジ" },
            { key: "expScroll", label: "📜 経験値2倍の書" }
        ];
        const picked = itemPool[Math.floor(Math.random() * itemPool.length)];
        if (picked.key === "glasses") gameState.items.glasses++;
        else if (picked.key === "clock") gameState.items.clock++;
        else if (picked.key === "whistle") gameState.items.whistle = true;
        else if (picked.key === "color") gameState.items.colorChange = true;
        else gameState.items.expDouble = true;
        showToast(`🎁 ${floor}階到達ボーナス！ ${picked.label} を獲得！`, "title", 3800);
    } else {
        const candidates = MONSTERS.filter(m => (m.type === "shiny" || m.type === "ultra") && !gameState.zukan[m.id]);
        if (candidates.length > 0) {
            const m = candidates[Math.floor(Math.random() * candidates.length)];
            gameState.zukan[m.id] = true;
            showToast(`🎁 ${floor}階到達ボーナス！ 限定モンスター「${m.name}」を発見！`, "title", 3800);
        } else {
            gameState.gold += 500;
            showToast(`🎁 ${floor}階到達ボーナス！ 500 G 獲得！`, "title", 3800);
        }
    }
    saveGame();
}

function endTowerRun() {
    const finalFloor = towerState.floor;
    gameState.gold += towerState.runGold;

    const todayWeek = getCurrentWeekId();
    if (gameState.tower.weeklyWeekId !== todayWeek) {
        gameState.tower.weeklyWeekId = todayWeek;
        gameState.tower.weeklyBestFloor = 0;
    }
    const isNewWeeklyBest = finalFloor > gameState.tower.weeklyBestFloor;
    const isNewAllTimeBest = finalFloor > gameState.tower.bestFloor;
    if (isNewWeeklyBest) gameState.tower.weeklyBestFloor = finalFloor;
    if (isNewAllTimeBest) gameState.tower.bestFloor = finalFloor;

    saveGame();
    towerState.active = false;

    showToast(`💀 ${finalFloor}階で 力つきた…… 💰+${towerState.runGold}G`, "error", 4000);
    if (isNewAllTimeBest) {
        setTimeout(() => showToast(`🏆 自己ベスト更新！ ${finalFloor}階`, "title", 4000), 500);
    } else if (isNewWeeklyBest) {
        setTimeout(() => showToast(`📅 今週のベスト更新！ ${finalFloor}階`, "title", 4000), 500);
    }

    updateUI();
    switchScene("scene-select");
}

// --- ボーナスミニゲーム: ブロックくずし(クエスト5回クリアごとに出現) ---
let breakout = null;

function openBreakoutMinigame() {
    switchScene("scene-minigame");
    const canvas = document.getElementById("breakout-canvas");
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;

    const brickRows = 4, brickCols = 7;
    const brickW = W / brickCols - 4, brickH = 16, brickGap = 4, brickTop = 30;
    const bricks = [];
    const brickColors = ["#ff2f92", "#ff8c1a", "#ffe600", "#00e676"];
    for (let r = 0; r < brickRows; r++) {
        for (let c = 0; c < brickCols; c++) {
            bricks.push({ x: c * (brickW + brickGap) + brickGap, y: brickTop + r * (brickH + brickGap), w: brickW, h: brickH, alive: true, color: brickColors[r % brickColors.length] });
        }
    }

    breakout = {
        ctx, W, H,
        paddleW: 60, paddleH: 10, paddleX: W / 2 - 30,
        ballX: W / 2, ballY: H - 40, ballR: 6, ballVX: 3, ballVY: -3,
        bricks, lives: 3, score: 0, running: true, moveDir: 0
    };

    document.getElementById("breakout-lives").innerText = breakout.lives;
    document.getElementById("breakout-score").innerText = breakout.score;

    canvas.onmousemove = (e) => {
        const rect = canvas.getBoundingClientRect();
        breakout.paddleX = Math.max(0, Math.min(W - breakout.paddleW, (e.clientX - rect.left) - breakout.paddleW / 2));
    };
    canvas.ontouchmove = (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX - rect.left;
        breakout.paddleX = Math.max(0, Math.min(W - breakout.paddleW, touchX - breakout.paddleW / 2));
    };

    requestAnimationFrame(breakoutLoop);
}

function breakoutLoop() {
    if (!breakout || !breakout.running) return;
    const b = breakout, ctx = b.ctx;

    // パドル(ボタン操作分)
    b.paddleX = Math.max(0, Math.min(b.W - b.paddleW, b.paddleX + b.moveDir * 5));

    // ボール移動
    b.ballX += b.ballVX;
    b.ballY += b.ballVY;
    if (b.ballX <= b.ballR || b.ballX >= b.W - b.ballR) b.ballVX *= -1;
    if (b.ballY <= b.ballR) b.ballVY *= -1;

    // パドル衝突
    if (b.ballY + b.ballR >= b.H - b.paddleH - 6 && b.ballY + b.ballR <= b.H - 6 &&
        b.ballX >= b.paddleX && b.ballX <= b.paddleX + b.paddleW && b.ballVY > 0) {
        const hitPos = (b.ballX - (b.paddleX + b.paddleW / 2)) / (b.paddleW / 2);
        b.ballVX = hitPos * 4;
        b.ballVY = -Math.abs(b.ballVY);
    }

    // ブロック衝突
    b.bricks.forEach(brick => {
        if (!brick.alive) return;
        if (b.ballX + b.ballR > brick.x && b.ballX - b.ballR < brick.x + brick.w &&
            b.ballY + b.ballR > brick.y && b.ballY - b.ballR < brick.y + brick.h) {
            brick.alive = false;
            b.ballVY *= -1;
            b.score += 5;
            document.getElementById("breakout-score").innerText = b.score;
            playBeep(600, 0.06, "square", 0.12);
        }
    });

    // 落下判定
    if (b.ballY > b.H) {
        b.lives--;
        document.getElementById("breakout-lives").innerText = b.lives;
        if (b.lives <= 0) {
            breakoutEnd(false);
            return;
        }
        b.ballX = b.W / 2; b.ballY = b.H - 40; b.ballVX = 3; b.ballVY = -3;
    }

    // クリア判定
    if (b.bricks.every(br => !br.alive)) {
        breakoutEnd(true);
        return;
    }

    // 描画
    ctx.clearRect(0, 0, b.W, b.H);
    ctx.fillStyle = "#eafbff";
    ctx.fillRect(0, 0, b.W, b.H);
    b.bricks.forEach(brick => {
        if (!brick.alive) return;
        ctx.fillStyle = brick.color;
        ctx.fillRect(brick.x, brick.y, brick.w, brick.h);
        ctx.strokeStyle = "#1a1a1a";
        ctx.lineWidth = 2;
        ctx.strokeRect(brick.x, brick.y, brick.w, brick.h);
    });
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(b.paddleX, b.H - b.paddleH - 6, b.paddleW, b.paddleH);
    ctx.beginPath();
    ctx.arc(b.ballX, b.ballY, b.ballR, 0, Math.PI * 2);
    ctx.fillStyle = "#ff2f92";
    ctx.fill();

    requestAnimationFrame(breakoutLoop);
}

function breakoutEnd(cleared) {
    if (!breakout) return;
    breakout.running = false;
    const earnedG = breakout.score;
    gameState.gold += earnedG;
    saveGame();
    updateUI();
    showToast(cleared
        ? `🎉 ブロック全部こわした！ボーナス +${earnedG} G`
        : `🧱 おつかれさま！ボーナス +${earnedG} G`, "success", 3500);
    breakout = null;
    switchScene("scene-select");
}

function skipBreakoutMinigame() {
    if (breakout) breakout.running = false;
    breakout = null;
    switchScene("scene-select");
}

function buyItem(itemKey, price, btnEl) {
    if (gameState.gold < price) return showToast("💰 ゴールドが足りません！", "error");

    if (itemKey === "potion") {
        if (!gameState.partnerId) return showToast("👾 相棒がいません！先に図鑑で相棒を選んでね。", "error");
        if (gameState.partnerHearts >= 3) return showToast("❤️ 相棒のライフはすでに満タンです！", "error");
    }

    gameState.gold -= price;

    if (itemKey === "glasses") gameState.items.glasses++;
    if (itemKey === "clock") gameState.items.clock++;
    if (itemKey === "whistle") gameState.items.whistle = true;
    if (itemKey === "color") gameState.items.colorChange = true;
    if (itemKey === "expScroll") gameState.items.expDouble = true;
    if (itemKey === "potion") gameState.partnerHearts = 3;

    saveGame();
    updateUI();
    showToast(itemKey === "potion" ? "💊 相棒のライフが全回復した！" : "🛍️ アイテムを購入しました！", "success");
    playChime(true);

    // 購入演出: アイテムカードをフラッシュさせ、コインが弾けるポップを表示
    if (btnEl) {
        const shopItem = btnEl.closest(".shop-item");
        if (shopItem) {
            shopItem.classList.add("shop-item-bought");
            setTimeout(() => shopItem.classList.remove("shop-item-bought"), 600);

            const pop = document.createElement("div");
            pop.className = "buy-pop";
            pop.innerText = "💰GET!";
            shopItem.appendChild(pop);
            setTimeout(() => pop.remove(), 800);
        }
    }
}

function useGlasses() {
    if (gameState.items.glasses <= 0) return;
    if (currentBattle.mode === "typing") {
        showToast("👓 記述式では、カンニンググラスは使えません！", "error");
        return;
    }
    gameState.items.glasses--;
    updateUI();
    showItemUseEffect("👓", "2択消去！");

    const wrongIndices = [0, 1, 2, 3].filter(i => i !== currentBattle.quiz.answer);
    wrongIndices.sort(() => Math.random() - 0.5);
    const btns = document.querySelectorAll(".choice-btn");
    btns[wrongIndices[0]].style.display = "none";
    btns[wrongIndices[1]].style.display = "none";
}

function useClock() {
    if (gameState.items.clock <= 0) return;
    gameState.items.clock--;
    currentBattle.timer += 10;
    document.getElementById("timer-val").innerText = currentBattle.timer;
    updateUI();
    showItemUseEffect("⏱️", "+10秒！");
}

// アイテム使用時のポップ演出
function showItemUseEffect(icon, label) {
    const scene = document.getElementById("scene-battle");
    if (!scene) return;
    const pop = document.createElement("div");
    pop.className = "item-use-pop";
    pop.innerHTML = `<span class="item-use-icon">${icon}</span><span class="item-use-label">${label}</span>`;
    scene.appendChild(pop);
    playChime(true);
    setTimeout(() => pop.remove(), 1000);
}

function openRegionSelect() {
    switchScene("scene-region-select");
    ensurePrefectureTiers();

    const theme = getTodayTheme();
    REGION_THEMES.forEach(t => document.getElementById("scene-region-select").classList.remove(t.key));
    document.getElementById("scene-region-select").classList.add(theme.key);
    document.getElementById("japan-theme-label").innerText = `${theme.icon} 本日のテーマ: ${theme.name}(2日ごとに切替)`;

    const grid = document.getElementById("region-grid");
    grid.innerHTML = "";
    JAPAN_REGIONS.forEach(region => {
        const clearedCount = region.prefs.filter(name => gameState.prefecturesCleared.includes(name)).length;
        const isComplete = clearedCount >= region.prefs.length;
        const btn = document.createElement("button");
        btn.className = `region-btn ${isComplete ? "cleared" : ""}`;
        btn.innerHTML = `<span class="region-icon">${region.icon}</span><span class="region-name">${region.label}</span><span class="region-progress">${clearedCount}/${region.prefs.length}</span>`;
        btn.onclick = () => openJapanMap(region.key);
        grid.appendChild(btn);
    });

    document.getElementById("prefectures-cleared-region").innerText = gameState.prefecturesCleared.length;
}

function openJapanMap(regionKey) {
    if (regionKey) gameState.lastVisitedRegion = regionKey;
    const region = JAPAN_REGIONS.find(r => r.key === gameState.lastVisitedRegion) || JAPAN_REGIONS[0];

    switchScene("scene-japan-map");
    ensurePrefectureTiers();
    document.getElementById("region-map-title").innerText = `${region.icon} ${region.label} ${region.icon}`;

    const grid = document.getElementById("japan-grid");
    grid.innerHTML = "";

    const otherPrefNames = PREFECTURES.filter(p => p.name !== "高知県").map(p => p.name);
    const clearedOthersCount = otherPrefNames.filter(name => gameState.prefecturesCleared.includes(name)).length;
    const kochiUnlocked = clearedOthersCount >= otherPrefNames.length;

    const regionPrefs = PREFECTURES.filter(p => region.prefs.includes(p.name));

    regionPrefs.forEach(pObj => {
        const btn = document.createElement("button");
        const isCleared = gameState.prefecturesCleared.includes(pObj.name);
        const isKochi = pObj.name === "高知県";
        const tier = gameState.prefectureTiers[pObj.name];

        if (isKochi && !kochiUnlocked) {
            btn.className = "pref-btn quest-locked";
            btn.innerText = `🔒高知県\nあと${otherPrefNames.length - clearedOthersCount}県`;
            btn.onclick = () => showToast(`🔒 高知県ラスボスは、他の${otherPrefNames.length}都道府県をすべて制覇すると挑戦できます！(現在 ${clearedOthersCount}/${otherPrefNames.length})`, "error", 3800);
        } else {
            // 難易度(◯級)は表示しない。押してみるまで分からない「におわせ」仕様
            btn.className = `pref-btn ${isCleared ? "cleared" : ""}`;
            btn.innerText = isKochi ? `👑高知県` : pObj.name;
            btn.onclick = () => startBattle(isKochi ? "kami" : tier, pObj);
        }
        grid.appendChild(btn);
    });

    document.getElementById("prefectures-cleared").innerText = gameState.prefecturesCleared.length;
}

function openZukan() {
    showElement("modal-zukan");

    const HIDDEN_TITLE_DEFS = [
        { key: "shinyMaster", label: "色違いマスター", desc: "超激レア(1/500)を撃破" },
        { key: "hyakusen", label: "百戦錬磨", desc: "復習クエストを10回クリア" },
        { key: "nomiss", label: "ノーミスナイト", desc: "鬼級以上を3連続ノーミスクリア" }
    ];
    const box = document.getElementById("hidden-titles-box");
    box.innerHTML = "🏆 隠し称号<br>" + HIDDEN_TITLE_DEFS.map(t => {
        const got = gameState.hiddenTitles[t.key];
        return `<span class="hidden-title-tag ${got ? "got" : ""}">${got ? "✅" : "🔒"} ${t.label}</span>`;
    }).join("");

    const grid = document.getElementById("zukan-grid");
    grid.innerHTML = "";

    MONSTERS.forEach(m => {
        const isDiscovered = gameState.zukan[m.id];
        const isCurrentPartner = (gameState.partnerId === m.id);
        const isCaptured = (gameState.capturedPartnerId === m.id);

        const card = document.createElement("div");
        card.className = `zukan-card ${isDiscovered ? "" : "unknown"} ${isCurrentPartner ? "is-partner" : ""} ${isCaptured ? "is-captured" : ""}`;
        
        let actionBtnHTML = "";
        if (isCaptured) {
            actionBtnHTML = `<p class="captured-hint">🔒 高知に囚われ中<br>全国制覇で救出！</p>`;
        } else if (isDiscovered) {
            actionBtnHTML = isCurrentPartner ? 
                `<button class="btn-pop btn-partner-set btn-danger">相棒解除</button>` : 
                `<button class="btn-pop btn-partner-set btn-success">相棒にする</button>`;
        }

        const isUltraType = (m.type === "ultra");
        card.className += isUltraType ? " ultra-pixel-frame" : "";

        const iconHTML = (isDiscovered && (m.portraitFace || m.portraitImg))
            ? `<img src="${m.portraitFace || m.portraitImg}" class="zukan-portrait-img" alt="${m.name}">`
            : `<div class="${isUltraType ? "ultra-pixelate" : ""}" style="font-size:2rem;">${isDiscovered ? m.icon : "❓"}</div>`;

        card.innerHTML = `
            ${iconHTML}
            <div>${isDiscovered ? m.name : "？？？？"}</div>
            ${actionBtnHTML}
        `;

        if (isDiscovered && !isCaptured) {
            const btn = card.querySelector(".btn-partner-set");
            btn.onclick = () => {
                if (isCurrentPartner) {
                    gameState.partnerId = null;
                } else {
                    gameState.partnerId = m.id;
                    gameState.partnerHearts = 3;
                }
                saveGame();
                updateUI();
                openZukan();
            };
        }

        grid.appendChild(card);
    });
}

const CURRENT_GAME_VERSION = "2.2-gold-carryover";

function saveGame() { localStorage.setItem("kanji_monster_hunter_save", JSON.stringify(gameState)); }
function loadGame() {
    const data = localStorage.getItem("kanji_monster_hunter_save");
    if (data) {
        Object.assign(gameState, JSON.parse(data));
        return true;
    }
    return false;
}

function switchScene(sceneId) {
    document.querySelectorAll(".scene").forEach(s => s.classList.add("hidden"));
    document.getElementById(sceneId).classList.remove("hidden");
}

function showElement(id) { document.getElementById(id).classList.remove("hidden"); }
function hideElement(id) { document.getElementById(id).classList.add("hidden"); }
function toggleVisibility(id, show) { if (show) showElement(id); else hideElement(id); }

// --- トースト通知(alert()の代わり。積み重なって自動で消える) ---
function showToast(message, type, duration) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast toast-${type || "info"}`;
    toast.innerText = message;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("toast-show"));
    setTimeout(() => {
        toast.classList.remove("toast-show");
        setTimeout(() => toast.remove(), 300);
    }, duration || 3200);
}

// --- 称号獲得時の大きなポップ演出 ---
function showTitlePop(title) {
    const container = document.getElementById("game-container");
    const pop = document.createElement("div");
    pop.className = "title-pop-overlay";
    pop.innerHTML = `<div class="title-pop-label">✨ 称号獲得！ ✨</div><div class="title-pop-name">${title}</div>`;
    container.appendChild(pop);
    playChime(true);
    setTimeout(() => {
        pop.classList.add("title-pop-fadeout");
        setTimeout(() => pop.remove(), 500);
    }, 2800);
}

// --- コンボ演出 ---
function showComboPopup(n) {
    const scene = document.getElementById("scene-battle");
    if (!scene) return;
    const pop = document.createElement("div");
    pop.className = "combo-pop";
    pop.innerText = `${n}連続正解！🔥`;
    pop.style.fontSize = `${Math.min(1.2 + n * 0.15, 2.4)}rem`;
    scene.appendChild(pop);
    setTimeout(() => pop.remove(), 900);
}

// --- ダメージ数値ポップ ---
function showDamagePop(text, isCrit) {
    const area = document.getElementById("monster-area");
    if (!area) return;
    const pop = document.createElement("div");
    pop.className = "damage-pop" + (isCrit ? " damage-crit" : "");
    pop.innerText = text;
    pop.style.left = `${35 + Math.random() * 30}%`;
    area.appendChild(pop);
    setTimeout(() => pop.remove(), 800);
}

// --- 簡易効果音(Web Audio API・音声ファイル不要) ---
function playBeep(freq, duration, type, vol) {
    try {
        if (!window.__audioCtx) window.__audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const ctx = window.__audioCtx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type || "sine";
        osc.frequency.value = freq;
        gain.gain.value = vol || 0.15;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.stop(ctx.currentTime + duration);
    } catch (e) { /* 音声非対応環境では無視 */ }
}
function playHeartbeat() {
    playBeep(70, 0.12, "sine", 0.3);
    setTimeout(() => playBeep(60, 0.12, "sine", 0.25), 160);
}
function playChime(rising) {
    const notes = rising ? [523, 659, 784, 1047] : [400, 300];
    notes.forEach((f, i) => setTimeout(() => playBeep(f, 0.15, "triangle", 0.18), i * 90));
}