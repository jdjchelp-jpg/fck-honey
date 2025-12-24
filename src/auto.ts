import { listen, version } from "./core";

function buildAutoModalHtml(vendor: string): string {
  const query = encodeURIComponent(
    "Why is the " + vendor + " browser extension shady, and how can i uninstall it?"
  );
  const helpUrl = "http://chatgpt.com/?q=" + query;
  return (
    '<style>' +
    ".coupon-shield-modal, .coupon-shield-modal *{box-sizing:border-box;margin:0;padding:0;border:0;font:inherit;color:inherit;text-decoration:none;}" +
    ".coupon-shield-modal{font-family:Georgia, 'Times New Roman', serif;line-height:1.4;color:#0b1b2b;}" +
    ".coupon-shield-modal h2{font-size:18px;line-height:1.4;padding:12px 0}" +
    ".coupon-shield-modal strong{font-weight:800;}" +
    ".coupon-shield-modal-link{display:flex;align-items:center;justify-content:center;text-align:center;min-height:52px;padding:10px 12px;background:#e6eef7;color:#045de6;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px;border-radius:6px;flex:1 1 240px;font-weight:800;}" +
    "</style>" +
    '<div class="modal coupon-shield-modal" role="dialog" aria-modal="true" aria-labelledby="honey-modal-title">' +
    '<h2 id="honey-modal-title">' +
    '<span style="font-weight:400;">You may not proceed shopping with the </span><br />' +
    "<strong>" +
    vendor +
    '</strong><span style="font-weight:400;"> Extension enabled</span>' +
    "</h2>" +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 12px 0;align-items:stretch;">' +
    '<a href="' +
    helpUrl +
    '" target="_blank" rel="noopener noreferrer" class="coupon-shield-modal-link">Please disable it to continue shopping</a>' +
    '<a href="https://www.youtube.com/watch?v=wwB3FmbcC88" target="_blank" rel="noopener noreferrer" class="coupon-shield-modal-link">Here is why 🎥</a>' +
    "</div></div>"
  );
}

if (typeof window !== "undefined") {
  window.couponShield = window.couponShield || {};
  window.couponShield.listen = listen;
  window.couponShield.version = version;

  window.couponShieldHandle = window.couponShield.listen((warn, vendor) => {
    const vendorName = vendor || "honey";
    const vendorLabel = vendorName.charAt(0).toUpperCase() + vendorName.slice(1);
    warn(buildAutoModalHtml(vendorLabel));
  });
}

declare global {
  interface Window {
    couponShield?: {
      listen?: typeof listen;
      version?: string;
    };
    couponShieldHandle?: ReturnType<typeof listen>;
  }
}
