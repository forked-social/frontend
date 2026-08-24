#!/bin/sh

# Generate the runtime environment file served at /env-config.js. index.html
# loads it before the Angular bundle, which merges
# window.__FORKED_RUNTIME_ENV__ over the compiled environment defaults (see
# src/environments/environment.ts). An unset variable yields an empty string,
# which keeps browser push subscriptions disabled.
json_str() {
  # Strip characters that could break out of the double-quoted JS string.
  printf '%s' "${1}" | tr -d '"\\\r\n'
}

cat > /frontend/env-config.js <<EOF
// Generated at container startup by run.sh; do not edit. Set the container
// environment variable WEBPUSH_VAPID_PUBLIC_KEY.
window.__FORKED_RUNTIME_ENV__ = {
  webPushVapidPublicKey: "$(json_str "${WEBPUSH_VAPID_PUBLIC_KEY:-}")"
};
EOF

echo "Loading Caddy config from file: ${CADDY_FILE}"

caddy run --config ${CADDY_FILE}
