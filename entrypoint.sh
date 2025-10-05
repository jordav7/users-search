#!/bin/sh

# Generar env.js con la variable API_URL pasada al contenedor
cat <<EOF > /usr/share/nginx/html/env.js
window.ENV = {
  API_URL: "${API_URL}"
};
EOF

# Ejecutar nginx
exec "$@"
