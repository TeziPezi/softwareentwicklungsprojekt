import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full text-center py-2"
      style={{
        backgroundImage: "url('https://www.thaimassage-lippstadt.com/assets/img/footer_bg.png')",
        backgroundRepeat: "repeat",
        backgroundPosition: "0 0",
        backgroundClip: "border-box",
        backgroundOrigin: "padding-box",
        backgroundAttachment: "scroll",
        backgroundColor: "transparent",
        boxSizing: "border-box",
        color: "#fff",
        fontFamily: 'tahoma, "Times New Roman", verdana, helvetica, arial, sans-serif',
        fontSize: "14px",
        lineHeight: "20px",
        height: "70px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      {/* Links */}
      <div className="space-x-2">
        <Link className="text-white" href="/">Home</Link>
        <span>|</span>
        <Link className="text-white" href="/ueber-uns">Über uns</Link>
        <span>|</span>
        <Link className="text-white" href="/massagen">Massage</Link>
        <span>|</span>
        <Link className="text-white" href="faq">Wirkung und FAQ</Link>
        <span>|</span>
        <Link className="text-white" href="/kontakt">Kontakt</Link>
        <span>|</span>
        <Link className="text-white" href="/impressum">Impressum</Link>
        <span>|</span>
        <Link className="text-white" href="/agb">AGB</Link>
      </div>

      {/* Copyright */}
      <div className="mt-1 text-white text-sm">
        Copyright © 2025 Nawarat Traditionelle Thai Massage & Wellness. All rights reserved. By{" "}
        <a style={{ color: "#FFF" }} href="https://www.siam-webdesign.com/">Siam-webdesign</a>
      </div>
    </footer>
  );
}
