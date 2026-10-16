# inu.vaked.dev — a static site behind any container host (Coolify, plain Docker).
FROM nginx:alpine

# The site is plain files; no build step.
COPY index.html styles.css app.js animals.js robots.txt llms.txt sitemap.xml /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY .well-known /usr/share/nginx/html/.well-known

# Cache static assets briefly; the HTML revalidates.
RUN printf 'server {\n\
  listen 80;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
  location = /index.html { add_header Cache-Control "no-cache"; }\n\
  location ~* \\.(svg|css|js)$ { add_header Cache-Control "public, max-age=300"; }\n\
  location / { try_files $uri $uri/ =404; }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
