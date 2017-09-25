FROM node:8-alpine as client
WORKDIR /build/client
COPY ./client/package.json ./client/yarn.lock ./
RUN yarn
COPY client .
ENV NODE_ENV=production
RUN yarn run build

FROM node:8-alpine
WORKDIR /build/server
COPY ./server/package.json ./server/yarn.lock ./
RUN yarn
COPY ./server .
COPY --from=client /build/client/build ./public
ENV NODE_ENV=production
CMD yarn start
