/**
 * Fuji Five Lakes + Hakone 2027 trip data
 * Coordinates: OpenStreetMap Nominatim (queried 2026-10-27) unless noted.
 * Known-public / address-approx coords marked with // approx
 */
window.TRIP = {
  meta: {
    title: "富士五湖 × 箱根",
    subtitle: "Sunny & Helen の悠閒冬之旅",
    dates: "2027-02-13（六）— 02-18（四）",
    days: 6,
    nights: 5,
    travelers: ["Sunny", "Helen"],
    updated: "2026-10-27",
    note: "行程或會微調；出發前請再確認營業時間同路況。",
    flights: {
      out: { code: "UO646", pnr: "DBY9RQ", from: "HKG T2 13:00", to: "NRT T2 18:05", date: "13/2" },
      back: { code: "UO647", pnr: "DBY9RQ", from: "NRT T2 19:00", to: "HKG T1 23:25", date: "18/2" }
    },
    car: {
      status: "booked",
      vendor: "Nissan 新宿駅西口店",
      model: "Kicks e-POWER 四驅 + 雪胎（スタッドレス）",
      confirm: "26101305986",
      pickup: "14/2 08:00 新宿",
      return: "17/2 ~19:00 新宿同店",
      note: "行程檔曾寫「報價中未訂」；記憶／確認號顯示已訂。要加租 ETC；滿油還車。"
    }
  },

  lodging: [
    {
      night: "13/2",
      name: "Kadoya Hotel",
      area: "西新宿",
      address: "西新宿 1-23-1",
      confirm: "3925-6530-8839",
      status: "booked",
      note: "Double economy｜已預付 ¥27,060"
    },
    {
      night: "14/2",
      name: "Mizno Hotel 湖のホテル",
      area: "河口湖",
      confirm: "Rakuten 21315092992312",
      status: "booked",
      note: "和室・湖景＋富士山景露台｜CI 15:00｜CO 15/2 11:00｜入湯稅 ¥150 現場付"
    },
    {
      night: "15/2（計劃）",
      name: "Airbnb Cabin G, Weekend House Saiko",
      area: "西湖",
      address: "1210-3 Saiko",
      confirm: "HM5WBB3CJB",
      status: "booked-planned-shorten",
      note: "現訂 CO 17/2 10:00｜計劃縮短至 15→16 一晚（待改訂／未改訂）｜免費取消至 2027-02-10 15:00 JST"
    },
    {
      night: "16/2",
      name: "箱根溫泉酒店",
      area: "箱根",
      confirm: "—",
      status: "tbd",
      note: "待定／短名單進行中｜計劃 CI ~15:00–16:00｜唔杜撰店名"
    },
    {
      night: "17/2",
      name: "Kadoya Hotel",
      area: "西新宿",
      confirm: "Rakuten RYa0nktyza",
      status: "booked",
      note: "Double Economy 早割60 素泊｜CI 18:00 起｜CO 18/2｜已付 ¥21,208｜電話 03-3346-2561"
    }
  ],

  places: [
    {
      id: "nrt",
      name: "成田國際機場 NRT T2",
      nameJa: "成田国際空港",
      day: 1,
      lat: 35.7758714,
      lng: 140.3933101,
      image: "images/narita.jpg",
      tags: ["機場"],
      intro: "旅程嘅起點同終點。HK Express 飛成田第二航廈，過關拎行李之後坐 JR／京成入新宿就得。",
      tips: "UO646 18:05 抵達；回程 UO647 19:00 起飛，目標 16:00–17:00 到 T2，bag drop 18:00 硬 deadline。",
      mapsQuery: "Narita International Airport Terminal 2"
    },
    {
      id: "kadoya",
      name: "Kadoya Hotel（かどやホテル）",
      nameJa: "かどやホテル",
      day: 1,
      lat: 35.6897763,
      lng: 139.6961712,
      image: "images/shinjuku.jpg",
      tags: ["住宿", "新宿"],
      intro: "西新宿嘅實用型酒店，近車站同晚飯選擇。13/2 同 17/2 兩晚都住呢度，方便落地同還車後入住。",
      tips: "17/2 CI 由 18:00 起，還車後遲到 OK；若預計 21:00 後到，提前打電話 03-3346-2561。",
      mapsQuery: "Kadoya Hotel Shinjuku"
    },
    {
      id: "nissan",
      name: "Nissan 租車・新宿駅西口",
      nameJa: "日産レンタカー 新宿駅西口店",
      day: 2,
      lat: 35.6915,
      lng: 139.6993, // approx near Shinjuku West Exit
      image: "images/shinjuku2.jpg",
      tags: ["交通"],
      intro: "四日自駕嘅起點。由新宿上中央道出河口湖，返程東名回新宿同店還車。",
      tips: "確認號 26101305986｜14/2 08:00 取 → 17/2 ~19:00 還｜Kicks 四驅＋雪胎｜必加 ETC｜滿油還車。",
      mapsQuery: "日産レンタカー 新宿駅西口"
    },
    {
      id: "fabcafe",
      name: "FabCafe Fuji",
      nameJa: "FabCafe Fuji",
      day: 2,
      lat: 35.4931203,
      lng: 138.8040022,
      image: "images/chureito.jpg",
      tags: ["早餐", "咖啡"],
      intro: "下吉田本町通上嘅設計感 café，早餐碟約 ¥1,300。喺爬新倉山之前補能量，氣氛悠閒。",
      tips: "Google 寫早餐 08:00–11:00，官方 PORTA 寫至 10:00——出發前確認。星期二休；2 個免費泊位。後備：sai Breakfast and Cafe。",
      mapsQuery: "FabCafe Fuji Fujiyoshida"
    },
    {
      id: "chureito",
      name: "新倉山淺間公園・忠霊塔",
      nameJa: "新倉山浅間公園",
      day: 2,
      lat: 35.5012871,
      lng: 138.8013556,
      image: "images/chureito.jpg",
      tags: ["景點", "打卡"],
      intro: "五重塔同富士山同框嘅經典角度。冬天空氣清，富士山常露全貌；要爬約 400 級石階，慢慢行就好。",
      tips: "2 月凍同可能有薄冰，着防滑鞋。早到人少啲。塔本身唔係進內參觀重點，重點係景觀平台。",
      mapsQuery: "Chureito Pagoda Arakurayama"
    },
    {
      id: "hoto",
      name: "ほうとう蔵 歩成 河口湖店",
      nameJa: "ほうとう蔵 歩成",
      day: 2,
      lat: 35.4985,
      lng: 138.7685, // approx Funatsu
      image: "images/kawaguchiko.jpg",
      tags: ["午餐", "美食"],
      intro: "木造店望住富士山食餺飥（ほうとう）——山梨靈魂麵食，南瓜同蔬菜味噌湯底，暖笠笠。",
      tips: "船津 6931｜午餐檔約 12:00。冬天熱騰騰正好；留意等位。",
      mapsQuery: "ほうとう蔵 歩成 河口湖"
    },
    {
      id: "shokupan",
      name: "FUJISAN SHOKUPAN",
      nameJa: "FUJISAN SHOKUPAN",
      day: 2,
      lat: 35.4989049,
      lng: 138.7651999,
      image: "images/mt-fuji.jpg",
      tags: ["伴手禮", "早餐預備"],
      intro: "河口湖站附近嘅富士山形食パン專門店。買返去做第二朝房內早餐，外形得意又好味。",
      tips: "船津 3462-11｜11:00–18:00 賣完即止｜星期四休｜4 個泊位。為 15/2 早餐預留。",
      mapsQuery: "FUJISAN SHOKUPAN 河口湖"
    },
    {
      id: "oishi",
      name: "大石公園",
      nameJa: "大石公園",
      day: 2,
      lat: 35.5232900,
      lng: 138.7465374,
      image: "images/kawaguchiko.jpg",
      tags: ["景點", "湖畔"],
      intro: "河口湖北岸花田同湖景開闊位。冬天花少咗，但富士山倒影同清冷空氣特別乾淨。",
      tips: "風大好凍，着夠暖。附近有 L'ESSENCE（Day 3 可再訪）。",
      mapsQuery: "Oishi Park Kawaguchiko"
    },
    {
      id: "ropeway",
      name: "河口湖富士山全景纜車",
      nameJa: "富士山パノラマロープウェイ",
      day: 2,
      lat: 35.5037800,
      lng: 138.7744071,
      image: "images/ropeway.jpg",
      tags: ["景點", "纜車"],
      intro: "天上山公園嘅全景纜車，上落連山頂散步約一小時。晴天可見河口湖同富士山開闊景。",
      tips: "票價同時間出發前確認。冬天山頂風勁，帶手套圍巾。",
      mapsQuery: "Kawaguchiko Mt Fuji Panorama Ropeway"
    },
    {
      id: "mizno",
      name: "Mizno Hotel 湖のホテル",
      nameJa: "湖のホテル",
      day: 2,
      lat: 35.5188,
      lng: 138.7664, // approx lake north / hotel area
      image: "images/kawaguchiko.jpg",
      tags: ["住宿", "溫泉"],
      intro: "河口湖畔和室，湖景加富士山景露台。浸完溫泉睇湖面夜景，係 Day 2 嘅放鬆高潮。",
      tips: "斜路入酒店，雪天小心駕駛。入湯稅 ¥150 現場付。CI 15:00｜CO 翌日 11:00。",
      mapsQuery: "湖のホテル 河口湖"
    },
    {
      id: "unayoshi",
      name: "甲州うなよし",
      nameJa: "甲州うなよし",
      day: 2,
      lat: 35.4872,
      lng: 138.8075, // approx Fujiyoshida
      image: "images/mt-fuji.jpg",
      tags: ["晚餐", "美食"],
      intro: "富士吉田嘅鰻魚飯名店。炭火香同醬汁甜鹹平衡，係河口湖一帶經典晚飯選擇。",
      tips: "17:00–20:00 LO 19:30｜星期三休｜只收現金｜建議電話訂位 0555-22-7722。",
      mapsQuery: "甲州うなよし 富士吉田"
    },
    {
      id: "lessence",
      name: "L'ESSENCE",
      nameJa: "L'ESSENCE",
      day: 3,
      lat: 35.5225,
      lng: 138.7470, // approx near Oishi
      image: "images/kawaguchiko.jpg",
      tags: ["咖啡"],
      intro: "大石公園附近嘅精品咖啡。Mizno 退房後慢慢喝一杯再出發去西湖，節奏剛剛好。",
      tips: "不定休｜冇停車場｜出發前睇 IG。帶現金較穩。",
      mapsQuery: "L'ESSENCE Kawaguchiko"
    },
    {
      id: "nenba",
      name: "西湖いやしの里根場",
      nameJa: "西湖いやしの里ねン場",
      day: 3,
      lat: 35.5031561,
      lng: 138.6612587,
      image: "images/nenba.jpg",
      tags: ["景點", "傳統"],
      intro: "茅草屋村落重建嘅療癒之里。散步、手作體驗、遠望富士，氣氛好靜。冬天茅草屋頂可能積雪，特別有畫意。",
      tips: "營業時間冬季或縮短，出發前確認。適合慢慢行，唔使趕。",
      mapsQuery: "西湖いやしの里根場"
    },
    {
      id: "saikotei",
      name: "彩呼亭",
      nameJa: "彩呼亭",
      day: 3,
      lat: 35.5046334,
      lng: 138.6920806,
      image: "images/saiko.jpg",
      tags: ["午餐", "美食"],
      intro: "西湖古民家蕎麥麵，配山女鱒。環境安靜、份量同味道都有口碑——記得提早打電話留麵。",
      tips: "西湖 761-3｜11:00 起賣完即止｜不定休｜唔收卡、可二維碼，帶現金｜電話 0555-82-3144。後備：Ma Maison／道の駅なるさわ。",
      mapsQuery: "彩呼亭 西湖"
    },
    {
      id: "fugaku",
      name: "富岳風穴",
      nameJa: "富岳風穴",
      day: 3,
      lat: 35.4775010,
      lng: 138.6575030,
      image: "images/wind-cave.jpg",
      tags: ["景點", "洞窟"],
      intro: "溶岩洞窟，打橫平路易行。冬天洞內冰柱係招牌景色，溫度常年低，入去要加件褸。",
      tips: "門票同冬季時間出發前確認。地面可能濕滑。同青木ヶ原樹海相連區域。",
      mapsQuery: "富岳風穴"
    },
    {
      id: "shoji",
      name: "精進湖・他手合浜",
      nameJa: "精進湖",
      day: 3,
      lat: 35.4887422,
      lng: 138.6066302,
      image: "images/shoji.jpg",
      tags: ["景點", "五湖"],
      intro: "「子抱き富士」角度——富士山被精進湖同樹林擁抱。冬天湖面常結冰，寧靜得可怕。",
      tips: "湖邊風凍，短停拍照即可。路面可能結冰。",
      mapsQuery: "精進湖 他手合浜"
    },
    {
      id: "motosu",
      name: "本栖湖",
      nameJa: "本栖湖",
      day: 3,
      lat: 35.4643056,
      lng: 138.5855050,
      image: "images/motosu.jpg",
      tags: ["景點", "五湖"],
      intro: "千円紙幣上嘅富士山角度就喺呢度。水質清澈、景觀開闊——經典到唔需要多餘介紹。",
      tips: "中ノ倉峠視路況（雪／結冰可能封）。低處湖畔觀景台通常較穩陣。",
      mapsQuery: "本栖湖 千円札 展望"
    },
    {
      id: "forestmall",
      name: "Forest Mall 富士河口湖",
      nameJa: "フォレストモール富士河口湖",
      day: 3,
      lat: 35.4905383,
      lng: 138.7429538,
      image: "images/kawaguchiko.jpg",
      tags: ["超市"],
      intro: "回程買打邊爐材料嘅超市站。MaxValu 等齊全，之後十多分鐘就到西湖 Airbnb。",
      tips: "後備：Ogino 河口湖店（船津，09:00–21:00）。",
      mapsQuery: "Forest Mall 富士河口湖"
    },
    {
      id: "airbnb",
      name: "Airbnb Cabin G（Weekend House Saiko）",
      nameJa: "Weekend House Saiko",
      day: 3,
      lat: 35.4975,
      lng: 138.6850, // approx 1210-3 Saiko
      image: "images/saiko.jpg",
      tags: ["住宿"],
      intro: "西湖邊嘅小木屋風住宿。屋主借鍋同卡式爐，適合自己打邊爐——森林同湖嘅夜晚好靜。",
      tips: "確認 HM5WBB3CJB｜現訂 CO 17/2｜計劃縮短至 16/2 朝早（待改訂）。廚房煤氣爐；鍋底墊隔熱墊；開抽油煙機。",
      mapsQuery: "1210-3 Saiko Fujikawaguchiko"
    },
    {
      id: "hakone-shrine",
      name: "箱根神社",
      nameJa: "箱根神社",
      day: 4,
      lat: 35.2039731,
      lng: 139.0255832,
      image: "images/hakone-shrine.jpg",
      tags: ["景點", "神社"],
      intro: "蘆之湖畔嘅古老神社。平和鳥居企喺湖中，係箱根最具標誌性嘅畫面之一——冬天湖面霧氣同白雪特別莊嚴。",
      tips: "湖邊風大好凍，着夠暖。泊車／參拜時間出發前確認。官網 hakonejinja.or.jp",
      mapsQuery: "箱根神社"
    },
    {
      id: "ashi",
      name: "蘆之湖",
      nameJa: "芦ノ湖",
      day: 4,
      lat: 35.2144830,
      lng: 139.0019966,
      image: "images/ashinoko.jpg",
      tags: ["景點", "湖"],
      intro: "箱根火山口湖。晴天可望富士，遊船同湖畔散步都得。同神社一齊行，大約 1–1.5 小時。",
      tips: "2 月風勁；遊船班次出發前睇。唔使強迫上船，岸邊已經好靚。",
      mapsQuery: "芦ノ湖"
    },
    {
      id: "glass",
      name: "箱根ガラスの森美術館",
      nameJa: "箱根ガラスの森美術館",
      day: 4,
      lat: 35.2661824,
      lng: 139.0176734,
      image: "images/glass-forest.jpg",
      tags: ["景點", "可選"],
      intro: "仙石原嘅威尼斯玻璃庭園美術館。冬天以室內展為主，暖和又靚，適合雪／凍天。",
      tips: "時間／休館出發前確認。下午景點揀 1–2 個即可。",
      mapsQuery: "箱根ガラスの森美術館"
    },
    {
      id: "openair",
      name: "彫刻の森美術館",
      nameJa: "彫刻の森美術館",
      day: 4,
      lat: 35.2442838,
      lng: 139.0520834,
      image: "images/hakone-fuji.jpg",
      tags: ["景點", "可選"],
      intro: "二ノ平戶外雕塑公園，現代藝術散落山林。天晴行開闊草地最舒服；落雪／落雨可改走室內館。",
      tips: "冬季時間出發前確認。着行山鞋。",
      mapsQuery: "箱根 彫刻の森美術館"
    },
    {
      id: "gora",
      name: "強羅公園",
      nameJa: "強羅公園",
      day: 4,
      lat: 35.2486387,
      lng: 139.0452490,
      image: "images/ashi-classic.jpg",
      tags: ["景點", "可選"],
      intro: "溫室同庭園並存嘅強羅經典公園。若酒店近強羅，下午嚟散步剛剛好。",
      tips: "冬季開放時間出發前確認。",
      mapsQuery: "強羅公園"
    },
    {
      id: "hakone-hotel",
      name: "箱根溫泉酒店（待定）",
      nameJa: "箱根温泉ホテル TBD",
      day: 4,
      lat: 35.2320,
      lng: 139.0500, // rough Hakone-Yumoto / Gora area placeholder for map
      image: "images/hakone-fuji.jpg",
      tags: ["住宿", "溫泉", "TBD"],
      intro: "今晚嘅溫泉過夜係成趟旅程嘅鬆一鬆時刻。店名仍喺短名單，訂好再更新呢張卡。",
      tips: "店名／價格 TBD，唔杜撰。計劃 CI ~15:00–16:00｜CO 17/2 朝早。午餐同晚餐都係待定。",
      mapsQuery: "箱根湯本"
    },
    {
      id: "gotemba",
      name: "御殿場プレミアム・アウトレット",
      nameJa: "御殿場プレミアム・アウトレット",
      day: 5,
      lat: 35.3077919,
      lng: 138.9650827,
      image: "images/gotemba.jpg",
      tags: ["購物"],
      intro: "約 290 店嘅大型 Outlet。天晴可喺「夢の大橋」望富士。由箱根過嚟短車程，慢慢掃貨半日。",
      tips: "12–2 月 10:00–19:00｜17/2（三）有開（下次年休 2/25）｜免費泊約 7,000｜立體車高約 2.1 m｜目標 15:30–15:45 離開。",
      mapsQuery: "Gotemba Premium Outlets"
    },
    {
      id: "toraya",
      name: "とらや工房",
      nameJa: "とらや工房",
      day: 5,
      lat: 35.2953403,
      lng: 138.9597857,
      image: "images/gotemba.jpg",
      tags: ["伴手禮", "甜品"],
      intro: "虎屋工房直賣——和菓子職人品牌嘅工場店。買伴手禮同試食都啱，約留 30 分鐘。",
      tips: "東山 1022-1｜目標 ~16:00 到｜冬季關店 17:00。❌ 唔係「虎屋菓寮御殿場店」（該店 2027-02-17 休）。",
      mapsQuery: "とらや工房 御殿場"
    },
    {
      id: "tokyo-chill",
      name: "東京 Chill Day",
      nameJa: "東京",
      day: 6,
      lat: 35.6897,
      lng: 139.6922,
      image: "images/shinjuku2.jpg",
      tags: ["悠閒"],
      intro: "還咗車之後，最後一日留喺東京輕輕鬆鬆：靚早餐、坐低午餐、一間 café——然後準時去機場。",
      tips: "店名全部 placeholder，未訂唔杜撰。目標 14:00–15:00 離開市區，16:00–17:00 到 NRT T2。建議 JR N'EX 或京成 Skyliner／Access。",
      mapsQuery: "Shinjuku Tokyo"
    }
  ],

  days: [
    {
      id: 1,
      date: "13/2（六）",
      title: "香港 → 東京",
      subtitle: "落地新宿，慢慢起步",
      hero: "images/narita.jpg",
      summary: "下午由香港起飛，傍晚抵成田，入西新宿 Kadoya check-in，附近食晚飯。",
      timeline: [
        { time: "13:00", text: "HKG T2 起飛 UO646（PNR DBY9RQ）", placeId: null },
        { time: "18:05", text: "抵 NRT T2 → 入新宿", placeId: "nrt" },
        { time: "晚", text: "Kadoya Hotel check-in（確認 3925-6530-8839）｜附近食晚飯", placeId: "kadoya" }
      ],
      transport: "機場→新宿：N'EX／京成等（視行李同時間）"
    },
    {
      id: 2,
      date: "14/2（日）",
      title: "新宿 → 河口湖",
      subtitle: "取車、五重塔、湖畔同溫泉",
      hero: "images/chureito.jpg",
      summary: "朝早新宿取車出河口湖：FabCafe 早餐 → 新倉山 → 餺飥午餐 → 食パン → 大石公園 → 纜車 → Mizno → 鰻魚飯 → 花火（待確認）。",
      timeline: [
        { time: "08:00", text: "Nissan 新宿駅西口取車（確認 26101305986）→ 中央道 → 富士吉田西桂スマート IC（ETC）", placeId: "nissan" },
        { time: "~09:45", text: "早餐 FabCafe Fuji", placeId: "fabcafe" },
        { time: "~10:45", text: "新倉山淺間公園・五重塔（~400 級）", placeId: "chureito" },
        { time: "12:00", text: "午餐 ほうとう蔵 歩成", placeId: "hoto" },
        { time: "13:15", text: "FUJISAN SHOKUPAN 買食パン（15/2 早餐）", placeId: "shokupan" },
        { time: "13:30", text: "大石公園", placeId: "oishi" },
        { time: "14:30", text: "河口湖富士山全景纜車", placeId: "ropeway" },
        { time: "15:45", text: "Mizno Hotel check-in（斜路，雪天小心）", placeId: "mizno" },
        { time: "17:00", text: "晚餐 甲州うなよし（現金／建議訂位）", placeId: "unayoshi" },
        { time: "~20:00", text: "花火（2027 日期待確認）｜宵夜可 FamilyMart North Kawaguchiko", placeId: null }
      ],
      transport: "約 99 km、1.5–2 小時。07:00–07:30 前過八王子較順。要 ETC／雪胎。"
    },
    {
      id: 3,
      date: "15/2（一）",
      title: "西邊三湖 → 西湖",
      subtitle: "根場、蕎麥、風穴、本栖",
      hero: "images/motosu.jpg",
      summary: "退房後西行：咖啡 → 根場 → 彩呼亭 → 富岳風穴 → 精進／本栖 → 超市買火鍋料 → Airbnb 打邊爐。",
      timeline: [
        { time: "朝", text: "Mizno 睇日出｜房內食富士山食パン＋便利店", placeId: "mizno" },
        { time: "11:00", text: "Mizno check-out → L'ESSENCE", placeId: "lessence" },
        { time: "11:30", text: "西湖いやしの里根場", placeId: "nenba" },
        { time: "~13:30", text: "午餐 彩呼亭（提前電話留麵）", placeId: "saikotei" },
        { time: "午後", text: "富岳風穴（冬天冰柱）", placeId: "fugaku" },
        { time: "午後", text: "精進湖 他手合浜 → 本栖湖", placeId: "motosu" },
        { time: "~17:00", text: "Forest Mall 買打邊爐料 → Airbnb CI", placeId: "airbnb" },
        { time: "晚", text: "🍲 打邊爐（借鍋＋卡式爐；墊隔熱墊；開抽油煙機）", placeId: "airbnb" }
      ],
      transport: "西湖周邊短距離自駕；國道 139。路面可能結冰。"
    },
    {
      id: 4,
      date: "16/2（二）",
      title: "箱根全日 + 溫泉過夜",
      subtitle: "神社、蘆之湖、溫泉（酒店 TBD）",
      hero: "images/hakone-shrine.jpg",
      summary: "Airbnb 提早出發入箱根：神社＋蘆之湖 → 午餐待定 → 玻璃之森／彫刻之森／強羅擇 1–2 → 溫泉酒店 CI。",
      timeline: [
        { time: "~09:00", text: "西湖 Airbnb 提早 CO／出發（現訂仍 CO 17/2 → 縮短待改訂）", placeId: "airbnb" },
        { time: "~10:30", text: "箱根神社 + 蘆之湖（1–1.5 小時）", placeId: "hakone-shrine" },
        { time: "~12:00", text: "午餐：箱根町／湯本一帶（待定，唔杜撰）", placeId: null },
        { time: "午後", text: "可選：ガラスの森／彫刻の森／強羅公園（揀 1–2）", placeId: "glass" },
        { time: "午後", text: "大涌谷／空中纜車僅天氣＋火山氣體許可（常停駛，唔寫死）", placeId: null },
        { time: "~15:00–16:00", text: "箱根溫泉酒店 CI（店名 TBD）→ 浸溫泉", placeId: "hakone-hotel" },
        { time: "晚", text: "晚餐：酒店內或附近（待定）", placeId: "hakone-hotel" }
      ],
      transport: "國道 139 → 富士吉田 IC → 東富士五湖道路 → 箱根｜約 1.5–2 小時｜要 ETC｜山路冬天可能結冰，雪胎必備。"
    },
    {
      id: 5,
      date: "17/2（三）",
      title: "箱根 → 御殿場 → 新宿",
      subtitle: "Outlet、虎屋工房、還車",
      hero: "images/gotemba.jpg",
      summary: "酒店出發去御殿場 Outlet 半日，再到とらや工房，入油後東名返新宿還車，入住 Kadoya。",
      timeline: [
        { time: "~09:00–09:30", text: "箱根溫泉酒店 CO → 御殿場（約 30–60 分）", placeId: "hakone-hotel" },
        { time: "~10:00–10:30", text: "御殿場プレミアム・アウトレット（玩至 ~15:30）", placeId: "gotemba" },
        { time: "午", text: "Outlet 內午餐（店多，出發前確認）", placeId: "gotemba" },
        { time: "~15:30", text: "離開 Outlet → とらや工房（~16:00，約 30 分）", placeId: "toraya" },
        { time: "~16:30", text: "入油（滿油）→ 東名高速返東京", placeId: null },
        { time: "~19:00", text: "Nissan 新宿駅西口還車 → Kadoya CI（RYa0nktyza）", placeId: "kadoya" }
      ],
      transport: "箱根→Outlet 短程；御殿場 IC→新宿約 1.5–2 小時（傍晚或塞）。目標 19:00 前還車。"
    },
    {
      id: 6,
      date: "18/2（四）",
      title: "東京 chill → NRT → 香港",
      subtitle: "唔揸車，慢慢返",
      hero: "images/shinjuku.jpg",
      summary: "Kadoya CO → 東京早餐／午餐／café → 下午出發去成田，晚上飛返香港。成田市方案僅後備。",
      timeline: [
        { time: "朝", text: "Kadoya check-out → 靚早餐（placeholder，未訂）", placeId: "kadoya" },
        { time: "午", text: "東京坐低午餐（未訂）＋一間 chill café（未訂）", placeId: "tokyo-chill" },
        { time: "~14:00–15:00", text: "離開市區 → 目標 16:00–17:00 到 NRT T2", placeId: "nrt" },
        { time: "19:00", text: "UO647 起飛 → 23:25 抵 HKG T1", placeId: "nrt" }
      ],
      transport: "建議 JR N'EX 新宿→空港第2ビル（約 75–90 分）或京成經日暮里。bag drop 18:00 硬 deadline。"
    }
  ],

  routeOverview: [
    { id: "nrt", label: "NRT" },
    { id: "kadoya", label: "新宿" },
    { id: "chureito", label: "河口湖" },
    { id: "airbnb", label: "西湖" },
    { id: "hakone-shrine", label: "箱根" },
    { id: "gotemba", label: "御殿場" },
    { id: "kadoya", label: "新宿" },
    { id: "nrt", label: "NRT" }
  ]
};
