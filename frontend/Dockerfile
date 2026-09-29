FROM node:20-alpine AS build

WORKDIR /app

COPY package.json .
RUN corepack enable && corepack prepare yarn@1.22.22 --activate \
    && yarn install --non-interactive

COPY . .
ARG REACT_APP_BACKEND_URL=
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
RUN yarn build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
