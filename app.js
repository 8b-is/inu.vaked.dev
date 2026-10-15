// inu.vaked.dev — trilingual copy + language switch.
// Japanese is the default; English and 中文 are one tap away.

import { ANIMALS, ANIMAL_CATS } from "./animals.js";

const MAIL = "inu@8b.is";

const DICT = {
  ja: {
    htmlLang: "ja",
    brandSub: "おさんぽサービス",
    heroKicker: "犬 · 猫 · 馬 · 東京",
    heroTitle: "いぬの おさんぽ、まかせて。",
    heroLede:
      "犬の散歩、猫の世話、馬の手入れ。近所を、あたたかく、ていねいに。雨の日も、毎日でも。",
    heroCta: "QRで予約する",
    badges: ["日本語 · English · 中文", "初回の ふれあい は無料", "雨の日も お伺いします"],
    svcKicker: "サービス",
    svcTitle: "三つの足あと",
    svc1t: "犬の散歩",
    svc1d: "元気いっぱいの子も、ゆっくりの子も。リードは二重に、帰りに写真とメモを送ります。",
    svc1m: "30〜60分 · 1頭から",
    svc2t: "猫の世話",
    svc2d: "ごはん、水、トイレ、そして そばにいる時間。留守中の安心を預かります。",
    svc2m: "1回30分 · 写真報告つき",
    svc3t: "馬の手入れ",
    svc3d: "厩舎訪問、ブラッシング、引き馬。大きな友だちにも、ていねいに。",
    svc3m: "60分〜 · 要相談",
    priceKicker: "料金",
    priceTitle: "はっきりした、やさしい値段",
    priceLede:
      "追加料金は かならず事前にご相談。はじめての ふれあい（顔合わせ）は無料です。",
    plan1t: "ソロさんぽ（1頭）",
    plan1p: "¥1,200",
    plan1u: "〜 / 30分",
    plan1l: ["30分 ¥1,200", "60分 ¥2,000", "写真＋メモの報告", "リード二重がけ"],
    plan1a: "これにする",
    plan2ri: "いちばん人気",
    plan2t: "パックさんぽ（2〜3頭）",
    plan2p: "¥1,500",
    plan2u: "〜 / 1頭・60分",
    plan2l: [
      "1頭目 ¥1,500",
      "2頭目から ¥900",
      "一緒に歩くと社会性アップ",
      "週5回のおまとめ割あり",
    ],
    plan2a: "予約する",
    plan3t: "ねこ・うま 訪問",
    plan3p: "¥1,500",
    plan3u: "〜 / 1回",
    plan3l: ["猫 30分 ¥1,500", "馬 60分 ¥4,500", "鍵のお預かりOK", "写真＋動画の報告"],
    plan3a: "相談する",
    addonsSum: "追加オプション（クリックで開く）",
    addons: [
      "月末パス 20回 ¥18,000（10%お得）",
      "土日・祝日 +¥300",
      "早朝（6時前）・深夜 +¥400",
      "シャンプー +¥1,200",
      "動物病院の付き添い ¥2,000",
      "雨の日は室内訪問、または 50% off",
    ],
    howKicker: "つかいかた",
    howTitle: "3ステップ",
    steps: [
      ["QRを読みとる", "スマホのカメラでQRコードを読み、メールを送るだけ。日本語・English・中文OK。"],
      ["ふれあい（無料）", "おうちと、わんちゃん・ねこちゃん・うまに ごあいさつ。ルートと時間を相談します。"],
      ["おさんぽ開始", "毎回 写真とメモをおくります。お預かりした鍵は お約束どおり 大切に。"],
    ],
    bookKicker: "予約",
    bookTitle: "さあ、さんぽへ。",
    bookLede:
      "QRを読みとるか、inu@8b.is へメールしてください。24時間以内に返信します。",
    bookMail: "メールで予約する",
    qrCap: "スマホのカメラで読みとってください",
    facts: [
      ["対応", "犬 · 猫 · 馬（その他の子もご相談）"],
      ["言語", "日本語 · English · 中文"],
      ["連絡", "inu@8b.is · 24時間以内に返信"],
    ],
    mailSubject: "おさんぽ予約 / Dog walk booking",
    mailBody:
      "こんにちは、予約をお願いします。\n\nお名前:\n場所:\n犬・猫・馬の名前と種類:\n希望の日時:\n希望のコース:\n\nありがとうございます！",
    footLine: "a neighbourhood animal-care service by Peter Lodri",
    footNote: "犬 · 猫 · 馬 · made with love for mom & dad · 8b.is",
  },

  en: {
    htmlLang: "en",
    brandSub: "dog walking · pet care",
    heroKicker: "inu · neko · uma · tokyo",
    heroTitle: "Your dog's walk, handled.",
    heroLede:
      "Dog walking, cat visits, horse care. Warm, careful, local — in the rain, every day if you need it.",
    heroCta: "Book by QR",
    badges: ["日本語 · English · 中文", "First meet & greet is free", "Rainy days included"],
    svcKicker: "services",
    svcTitle: "three sets of footprints",
    svc1t: "Dog walking",
    svc1d: "High energy or slow and steady. Double-clipped leads, photos and a note on every return.",
    svc1m: "30–60 min · from one dog",
    svc2t: "Cat visits",
    svc2d: "Food, water, litter, and company. Someone kind in the house while you are away.",
    svc2m: "30 min a visit · photo report",
    svc3t: "Horse care",
    svc3d: "Stable visits, brushing, hand-walking. Big friends handled gently.",
    svc3m: "from 60 min · by arrangement",
    priceKicker: "pricing",
    priceTitle: "clear, kind prices",
    priceLede:
      "Anything extra is agreed before it happens. The first meet & greet is always free.",
    plan1t: "Solo walk (one dog)",
    plan1p: "¥1,200",
    plan1u: "~ / 30 min",
    plan1l: ["30 min ¥1,200", "60 min ¥2,000", "Photo + note report", "Double-clipped lead"],
    plan1a: "Choose this",
    plan2ri: "most popular",
    plan2t: "Pack walk (2–3 dogs)",
    plan2p: "¥1,500",
    plan2u: "~ / dog · 60 min",
    plan2l: [
      "First dog ¥1,500",
      "Each extra dog ¥900",
      "Walks together build sociability",
      "Five-walk weekly bundle",
    ],
    plan2a: "Book it",
    plan3t: "Cat & horse visits",
    plan3p: "¥1,500",
    plan3u: "~ / visit",
    plan3l: ["Cat 30 min ¥1,500", "Horse 60 min ¥4,500", "Keys held safely", "Photo + video report"],
    plan3a: "Ask me",
    addonsSum: "Add-ons (tap to open)",
    addons: [
      "Monthly pass — 20 walks ¥18,000 (10% off)",
      "Weekends & holidays +¥300",
      "Early (before 6am) / late +¥400",
      "Shampoo +¥1,200",
      "Vet visit escort ¥2,000",
      "Rainy day: indoor visit, or 50% off",
    ],
    howKicker: "how it works",
    howTitle: "three steps",
    steps: [
      ["Scan the QR", "Point your phone camera at the QR code and send the email. Japanese, English or 中文."],
      ["Meet & greet (free)", "I meet you, your home, and your dog, cat or horse. We agree the route and the time."],
      ["Walks begin", "Photos and a note after every walk. Your keys are looked after exactly as promised."],
    ],
    bookKicker: "booking",
    bookTitle: "let's go for a walk.",
    bookLede:
      "Scan the QR code, or email inu@8b.is. I reply within 24 hours.",
    bookMail: "Email to book",
    qrCap: "Scan with your phone camera",
    facts: [
      ["Animals", "dog · cat · horse (others on request)"],
      ["Languages", "日本語 · English · 中文"],
      ["Contact", "inu@8b.is · reply within 24h"],
    ],
    mailSubject: "Dog walk booking / おさんぽ予約",
    mailBody:
      "Hello! I would like to book a walk.\n\nName:\nArea:\nPet name & kind:\nPreferred day/time:\nPreferred service:\n\nThank you!",
    footLine: "a neighbourhood animal-care service by Peter Lodri",
    footNote: "犬 · 猫 · 馬 · made with love for mom & dad · 8b.is",
  },

  zh: {
    htmlLang: "zh-Hans",
    brandSub: "遛狗 · 宠物照护",
    heroKicker: "犬 · 猫 · 马 · 东京",
    heroTitle: "遛狗这件事，交给我。",
    heroLede:
      "遛狗、照看猫咪、照料马匹。温柔、细心、就在附近。下雨天也来，每天都可以。",
    heroCta: "扫码预约",
    badges: ["日本語 · English · 中文", "首次见面免费", "雨天照常上门"],
    svcKicker: "服务",
    svcTitle: "三串脚印",
    svc1t: "遛狗",
    svc1d: "精力旺盛的、慢慢走的，都照顾。双扣牵引绳，回来时附照片和留言。",
    svc1m: "30–60 分钟 · 一只起",
    svc2t: "上门喂猫",
    svc2d: "喂食、换水、清理，还有陪伴。你不在家时，有人温柔守着。",
    svc2m: "每次 30 分钟 · 附照片",
    svc3t: "马匹照料",
    svc3d: "马房探访、刷马、牵行。大朋友也需要细心。",
    svc3m: "60 分钟起 · 需预约",
    priceKicker: "价格",
    priceTitle: "清楚又温柔的价格",
    priceLede: "任何额外费用都会事先商量。第一次见面永远免费。",
    plan1t: "单犬散步",
    plan1p: "¥1,200",
    plan1u: "起 / 30 分钟",
    plan1l: ["30 分钟 ¥1,200", "60 分钟 ¥2,000", "照片＋留言反馈", "双扣牵引绳"],
    plan1a: "选这个",
    plan2ri: "最受欢迎",
    plan2t: "多犬同行（2–3 只）",
    plan2p: "¥1,500",
    plan2u: "起 / 每只 · 60 分钟",
    plan2l: ["第一只 ¥1,500", "每多一只 ¥900", "一起散步更social", "每周五次有优惠"],
    plan2a: "立即预约",
    plan3t: "猫咪 · 马匹上门",
    plan3p: "¥1,500",
    plan3u: "起 / 每次",
    plan3l: ["猫 30 分钟 ¥1,500", "马 60 分钟 ¥4,500", "可代管钥匙", "照片＋视频反馈"],
    plan3a: "咨询一下",
    addonsSum: "附加选项（点击展开）",
    addons: [
      "月度套餐 20 次 ¥18,000（省 10%）",
      "周末与节假日 +¥300",
      "清晨（6 点前）/ 深夜 +¥400",
      "洗澡 +¥1,200",
      "陪同去宠物医院 ¥2,000",
      "雨天改为上门陪伴，或 5 折",
    ],
    howKicker: "使用方法",
    howTitle: "三个步骤",
    steps: [
      ["扫码", "用手机相机扫二维码，发一封邮件就行。日本語 · English · 中文。"],
      ["见面（免费）", "我先认识你、你的家，还有狗狗、猫咪或马。一起商量路线和时间。"],
      ["开始散步", "每次都会发照片和留言。钥匙一定按约定小心保管。"],
    ],
    bookKicker: "预约",
    bookTitle: "走，散步去。",
    bookLede: "扫二维码，或发邮件到 inu@8b.is。24 小时内回复。",
    bookMail: "邮件预约",
    qrCap: "请用手机相机扫描",
    facts: [
      ["对象", "犬 · 猫 · 马（其他也可以商量）"],
      ["语言", "日本語 · English · 中文"],
      ["联系", "inu@8b.is · 24 小时内回复"],
    ],
    mailSubject: "遛狗预约 / Dog walk booking",
    mailBody:
      "你好，我想预约散步。\n\n姓名：\n地点：\n宠物名字与种类：\n希望的时间：\n希望的服务：\n\n谢谢！",
    footLine: "a neighbourhood animal-care service by Peter Lodri",
    footNote: "犬 · 猫 · 馬 · made with love for mom & dad · 8b.is",
  },
};

const $ = (id) => document.getElementById(id);
const set = (id, text) => {
  const el = $(id);
  if (el) el.textContent = text;
};
const fillList = (id, items) => {
  const el = $(id);
  if (!el) return;
  el.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    el.appendChild(li);
  }
};

function apply(lang) {
  const d = DICT[lang] ?? DICT.ja;
  document.documentElement.lang = d.htmlLang;
  try {
    localStorage.setItem("inu.lang", lang);
  } catch {}

  document.querySelectorAll("[data-lang-btn]").forEach((b) => {
    b.classList.toggle("active", b.dataset.langBtn === lang);
  });

  set("brand-sub", d.brandSub);
  set("hero-kicker", d.heroKicker);
  set("hero-title", d.heroTitle);
  set("hero-lede", d.heroLede);
  set("hero-cta", d.heroCta);
  set("hero-badges", "");
  fillList("hero-badges", d.badges);

  set("svc-kicker", d.svcKicker);
  set("svc-title", d.svcTitle);
  set("svc1-t", d.svc1t);
  set("svc1-d", d.svc1d);
  set("svc1-m", d.svc1m);
  set("svc2-t", d.svc2t);
  set("svc2-d", d.svc2d);
  set("svc2-m", d.svc2m);
  set("svc3-t", d.svc3t);
  set("svc3-d", d.svc3d);
  set("svc3-m", d.svc3m);

  set("price-kicker", d.priceKicker);
  set("price-title", d.priceTitle);
  set("price-lede", d.priceLede);
  ["1", "2", "3"].forEach((n) => {
    set(`plan${n}-t`, d[`plan${n}t`]);
    set(`plan${n}-p`, d[`plan${n}p`]);
    set(`plan${n}-u`, d[`plan${n}u`]);
    fillList(`plan${n}-l`, d[`plan${n}l`]);
    set(`plan${n}-a`, d[`plan${n}a`]);
  });
  set("plan2-ribbon", d.plan2ri);
  set("addons-sum", d.addonsSum);
  fillList("addons-list", d.addons);

  set("how-kicker", d.howKicker);
  set("how-title", d.howTitle);
  const steps = $("how-steps");
  if (steps) {
    steps.innerHTML = "";
    d.steps.forEach(([t, body]) => {
      const li = document.createElement("li");
      const h = document.createElement("b");
      h.textContent = t;
      const p = document.createElement("span");
      p.textContent = body;
      li.append(h, p);
      steps.appendChild(li);
    });
  }

  set("book-kicker", d.bookKicker);
  set("book-title", d.bookTitle);
  set("book-lede", d.bookLede);
  set("book-mail", d.bookMail);
  set("qr-cap", d.qrCap);
  d.facts.forEach(([k, v], i) => {
    set(`fact${i + 1}-k`, k);
    set(`fact${i + 1}-v`, v);
  });

  const mail = `mailto:${MAIL}?subject=${encodeURIComponent(
    d.mailSubject,
  )}&body=${encodeURIComponent(d.mailBody)}`;
  const mailBtn = $("book-mail");
  if (mailBtn) mailBtn.setAttribute("href", mail);

  set("foot-line", d.footLine);
  set("foot-note", d.footNote);

  renderAnimals(lang);
}

// ── the field guide ──────────────────────────────────────────────────────────

let anCat = "all";
let anQuery = "";
let anLang = "ja";

const matches = (a, q) =>
  !q || `${a.kana} ${a.romaji} ${a.en} ${a.zh}`.toLowerCase().includes(q.toLowerCase());

function renderAnimalFilters(lang) {
  const box = document.getElementById("an-filters");
  if (!box) return;
  const L = ANIMAL_CATS[lang] ?? ANIMAL_CATS.ja;
  box.innerHTML = "";
  for (const key of ["all", ...Object.keys(L.cats)]) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = key === "all" ? L.all : L.cats[key];
    b.className = anCat === key ? "active" : "";
    b.addEventListener("click", () => {
      anCat = key;
      renderAnimals(anLang);
    });
    box.appendChild(b);
  }
}

function renderAnimals(lang) {
  anLang = lang;
  const L = ANIMAL_CATS[lang] ?? ANIMAL_CATS.ja;
  set("an-kicker", L.kicker);
  set("an-title", L.title);
  set("an-lede", L.lede);
  const q = document.getElementById("an-q");
  if (q) q.placeholder = L.find;
  renderAnimalFilters(lang);

  const list = ANIMALS.filter(
    (a) => (anCat === "all" || a.cat === anCat) && matches(a, anQuery),
  );
  set("an-count", L.count(list.length));

  const grid = document.getElementById("an-grid");
  if (!grid) return;
  grid.innerHTML = "";
  for (const a of list) {
    const el = document.createElement("article");
    el.className = `an-card ${a.cat}`;
    const kana = document.createElement("div");
    kana.className = "an-kana";
    kana.textContent = a.kana;
    const romaji = document.createElement("div");
    romaji.className = "an-romaji";
    romaji.textContent = a.romaji;
    const en = document.createElement("div");
    en.className = "an-en";
    en.textContent = a.en;
    const zh = document.createElement("div");
    zh.className = "an-zh";
    zh.textContent = a.zh;
    el.append(kana, romaji, en, zh);
    grid.appendChild(el);
  }
}

document.getElementById("an-q")?.addEventListener("input", (e) => {
  anQuery = e.target.value;
  renderAnimals(anLang);
});

document.querySelectorAll("[data-lang-btn]").forEach((b) => {
  b.addEventListener("click", () => apply(b.dataset.langBtn));
});

const params = new URLSearchParams(location.search);
let initial = params.get("lang");
try {
  initial = initial || localStorage.getItem("inu.lang");
} catch {}
apply(["ja", "en", "zh"].includes(initial) ? initial : "ja");
