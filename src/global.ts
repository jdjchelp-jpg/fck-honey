import { listen, version } from "./core";

if (typeof window !== "undefined") {
  window.couponShield = window.couponShield || {};
  window.couponShield.listen = listen;
  window.couponShield.version = version;
}

declare global {
  interface Window {
    couponShield?: {
      listen?: typeof listen;
      version?: string;
    };
  }
}
