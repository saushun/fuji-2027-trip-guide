# 富士五湖 × 箱根 2027｜Sunny & Helen Travel Guide

Interactive static travel guide for the Fuji Five Lakes + Hakone trip (13–18 Feb 2027).

Traditional Chinese + light Cantonese-friendly copy · Leaflet map · guide cards · day tabs.

---

## 本地預覽 / Open locally

```bash
cd trip-guide
# 任一靜態伺服器，例如：
python3 -m http.server 8080
# 然後開 http://localhost:8080
```

或直接用瀏覽器打開 `index.html`（部分瀏覽器對本地 Leaflet／字體較嚴格，建議用 http.server）。

檔案結構：

```
trip-guide/
  index.html
  css/styles.css
  js/data.js      # 行程資料、座標、導遊文案
  js/app.js       # 地圖、分日、scroll reveal
  images/         # Wikimedia Commons 照片
  README.md
```

無需 build step（純 HTML/CSS/JS）。

---

## GitHub Pages（user: `saushun`）

另一 agent 負責 `gh` auth／push。建議步驟：

1. 在 `saushun` 帳號建立新 repo（例如 `fuji2027-guide`）
2. 將 **本目錄內容**（`trip-guide/` 內的檔案）放到 repo **root**（確保有根目錄 `index.html`）
3. Settings → Pages → Source: **Deploy from a branch** → Branch `main`（或 `gh-pages`）→ folder `/`（root）
4. 數分鐘後開：`https://saushun.github.io/<repo-name>/`

替代：把整個 `trip-guide/` 放進 repo 的 `docs/`，Pages 選 `/docs`。

**唔好**用錯誤帳號 push；本機 box 上嘅 `gh` auth 可能唔係 `saushun`。

---

## 資料來源

- 行程來源：`/workspace/fuji2027/富士五湖2027行程.md`（2026-10-27）
- 座標：OpenStreetMap Nominatim（2026-10-27 查詢）＋個別地址近似座標（見 `js/data.js` 註解）
- 租車：站內標示已訂確認號 `26101305986`（行程檔曾寫報價中；以確認號為準）
- 箱根酒店：**季之湯雪月花（共立リゾート）**｜Rakuten **21315099251796**｜CI 16/2 15:00–18:00、CO 17/2 11:00｜Airbnb 縮短 15→16 仍待改訂

---

## Photo licenses / 圖片授權

All photos downloaded from **Wikimedia Commons**. Check each file page for the exact license (typically CC BY / CC BY-SA / public domain). Attribution summary in `images/CREDITS.txt`.

Do not replace with AI-generated photos of real hotels.

| Local file | Commons title (search) | Notes |
|---|---|---|
| narita.jpg | Garuda Indonesia B747… Narita… | |
| shinjuku.jpg | Shinjuku skyscraper 2.jpg | |
| shinjuku-west.jpg | Shinjuku-station West-area.jpg | Nissan 西口 |
| tokyo-chill.jpg | Tocho from Shinjuku Central Park… | calm daytime |
| chureito.jpg | Mount Fuji, Arakurayama Sengen Park 20241022.jpg | |
| mt-fuji.jpg | Autumn leaf color and Mount Fuji from Lake Kawaguchi.jpg | site hero |
| fabcafe-honcho.jpg | Honcho Street… Fujiyoshida, 2016.jpg | area: FabCafe on 本町通 |
| hoto-ayumi.jpg | 黄金ほうとう歩成…(19861478506).jpg | 歩成 storefront |
| shokupan.jpg | Japanese Milk Bread.jpg | cuisine stand-in |
| oishi-park.jpg | Mount Fuji from Oishi Park.jpg | |
| ropeway.jpg | Mt Kachi Kachi Ropeway.jpg | |
| mizno-lakeside.jpg | Oishi in Fujikawaguchiko 02.jpg | area: north lakeside |
| unaju.jpg | Unaju by Kawatoyo Honten.jpg | cuisine stand-in |
| cafe-coffee.jpg | Manual drip (pour-over) coffee.jpg | café stand-in |
| nenba.jpg | Aerial… Saiko Iyashi-no-Sato Nenba… | |
| soba.jpg | ざるそば（手打そば一ぷく）.jpg | cuisine stand-in 彩呼亭 |
| saiko.jpg | Mt. Fuji… Lake Saiko Nenma-hama.jpg | Airbnb / Saiko |
| wind-cave.jpg | Fugaku Fuketu Entrance Stairs 20161025.jpg | |
| shoji.jpg | Kodaki fuji frm shojinko.jpg | |
| motosu.jpg | Mount Fuji from Lake Motosu.jpg | |
| forest-mall.jpg | ForestMall Fuji-Kawaguchiko.JPG | |
| hakone-shrine.jpg | Hakone-jinja torii 20211202.jpg | |
| ashinoko.jpg | Lake Ashi & Mt Fuji & Hakone Shrine.jpg | |
| hakone-fuji.jpg | Mount Fuji from Lake Ashi 20211202-1.jpg | 雪月花 place card（Commons 風景，非酒店官方照） |
| glass-forest.jpg | Hakone Venetian Glass Museum.jpg | |
| hakone-open-air.jpg | Hakone Open-air Museum 20211202-5.jpg | |
| gora-park.jpg | Gōra Park 20090818 10.jpg | |
| gotemba.jpg | Gotemba premium outlets1.jpg | |
| toraya-koubou.jpg | Toraya koubou gotemba.JPG | |

Map tiles: © OpenStreetMap contributors · UI map: Leaflet.

---

## Last updated

2026-10-27（Asia/Hong_Kong）— itinerary may change.
