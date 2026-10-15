import QRCode from "qrcode";
import { writeFileSync } from "node:fs";

const subject = "おさんぽ予約 / Dog walk booking";
const body =
  "こんにちは、予約をお願いします。\n\nお名前:\n場所:\n犬・猫・馬の名前と種類:\n希望の日時:\n希望のコース:\n\nありがとうございます！";
const url = `mailto:inu@8b.is?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const svg = await QRCode.toString(url, {
  type: "svg",
  errorCorrectionLevel: "M",
  margin: 2,
  width: 640,
  color: { dark: "#070312", light: "#ffffff" },
});
writeFileSync("assets/qr.svg", svg);
console.log("wrote assets/qr.svg for", url.slice(0, 48) + "…");
