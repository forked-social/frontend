// Default runtime environment for the frontend app.
//
// index.html loads this BEFORE the Angular bundle so that
// window.__FORKED_RUNTIME_ENV__ is available when the environment module
// evaluates (see src/environments/environment.ts).
//
// In containers run.sh REGENERATES this file at startup from the
// WEBPUSH_VAPID_PUBLIC_KEY environment variable. An empty value keeps browser
// push subscriptions disabled.
//
// Local dev: set a value here, or define window.__FORKED_RUNTIME_ENV__ in an
// index.html override before this script loads.
window.__FORKED_RUNTIME_ENV__ = window.__FORKED_RUNTIME_ENV__ || {
  webPushVapidPublicKey: '',
};
