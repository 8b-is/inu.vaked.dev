# inu.vaked.dev — 犬 · 猫 · 馬

A neighbourhood animal-care service by **Peter Lodri**: dog walking, cat
visits, and horse care. Trilingual — Japanese (default), English, 中文 — with
a QR code that books by email, and a 73-animal Japanese field guide.

Live: <https://inu.vaked.dev> (Cloudflare Pages project `inu-vaked-dev`).

## what's here

| path | what |
|------|------|
| `index.html` | the page (JA default; EN + 中文 via the language switch) |
| `app.js` | i18n dictionary, the language switch, and the field-guide renderer |
| `animals.js` | 73 animal names — kana, romaji, English, 中文, grouped |
| `styles.css` | sun · moon · milky way (the zeno palette) |
| `assets/hero.svg` | the hero (犬・猫・馬 against a golden sun), drawn with the `agy` CLI |
| `assets/qr.svg` | the booking QR — encodes a prefilled email to inu@8b.is |
| `scripts/gen-qr.mjs` | regenerates that QR (`node scripts/gen-qr.mjs`) |

## deploy

```bash
wrangler pages deploy . --project-name inu-vaked-dev --branch main
```

`node_modules/` and the scripts are excluded from the upload via
`.assetsignore`. The custom domain needs a `inu` CNAME →
`inu-vaked-dev.pages.dev` (proxied) in the `vaked.dev` zone.

## prices (JPY)

- Solo walk, one dog — from ¥1,200 (30 min) / ¥2,000 (60 min)
- Pack walk, 2–3 dogs — ¥1,500 first dog, ¥900 each extra (60 min)
- Cat visit — from ¥1,500 · Horse care — from ¥4,500 (60 min)
- Monthly pass — 20 walks ¥18,000 · first meet & greet free

*犬 · 猫 · 馬 · made with love for mom & dad · 8b.is <3*
