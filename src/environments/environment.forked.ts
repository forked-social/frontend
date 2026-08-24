// Fork production environment.
//
// This is the ONE network the fork targets by default: the standalone
// forked.social chain (mainnet-style, FS1... public keys).
//
// Wired as the production build:
//   - angular.json "production" fileReplacement uses src/environments/environment.prod.ts,
//     and frontend/Dockerfile copies this file over environment.prod.ts via
//     `--build-arg environment=forked` (the default).

// Runtime overrides: index.html loads /env-config.js (a plain asset) before
// the Angular bundle; it defines window.__FORKED_RUNTIME_ENV__. In containers
// run.sh regenerates that file at startup from environment variables. Unset
// values fall back to the compiled defaults below (feature stays disabled).
const runtimeEnv: { [key: string]: string } =
  (typeof window !== "undefined" && (window as any).__FORKED_RUNTIME_ENV__) || {};

export const environment = {
  production: true,
  uploadImageHostname: "node.forked.social",
  verificationEndpointHostname: "https://node.forked.social",
  apiInternalHostname: "https://forked.social",
  // Web-push VAPID public key (base64url), supplied at runtime via
  // WEBPUSH_VAPID_PUBLIC_KEY (see /env-config.js above). Empty = browser push
  // subscriptions disabled (see global-vars.service.ts).
  webPushServerVapidPublicKey: runtimeEnv.webPushVapidPublicKey || "",
  uploadVideoHostname: "media.forked.social",
  identityURL: "https://identity.forked.social",
  supportEmail: "support@forked.social",
  dd: {
    apiKey: "",
    jsPath: "",
    ajaxListenerPath: "",
    endpoint: "",
  },
  amplitude: {
    key: "",
    domain: "",
  },
  heap: {
    appId: "",
  },
  hotjar: {
    hjid: "",
  },
  node: {
    // Mirrors backend get-app-state seed node registry ID 1.
    id: 1,
    name: "Forked Social",
    url: "https://node.forked.social",
    // TODO(rebrand): swap for a dedicated fork asset dir when fork branding assets exist.
    logoAssetDir: "/assets/diamond/",
  },
  // Buy/swap provider config intentionally blank: heroswap/megaswap/openfund/setu
  // all settle against the OLD DeSo network and must not be reachable.
  megaswapURL: "",
  megaswapAPI: "",
  megaswapAffiliateAddress: "",
  openfundURL: "",
  setuAPI: "",
  // Founder-root app-owner key of the fork (replaces upstream DIAMOND_APP_PUBLIC_KEY).
  appOwnerPublicKey: "FS13vrbSsSrefiNeoJK5uHMKgCwzJJ3NMCFdEKpui7qPX4X7xSLSko",
};
