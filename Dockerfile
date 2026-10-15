# Build stage: Hugo generates static files (Coder theme needs >= 0.124)
FROM ghcr.io/gohugoio/hugo:v0.157.0 AS build
WORKDIR /build

COPY . .

# Init theme submodule (needed when building from fresh clone)
RUN git submodule update --init --recursive 2>/dev/null || true

# Run as root so hugo can create .hugo_build.lock (image defaults to non-root)
USER root
RUN hugo --minify --destination /tmp/public

# Serve stage: nginx serves static files
FROM nginx:alpine
COPY --from=build /tmp/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
