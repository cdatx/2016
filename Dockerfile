FROM alpine:3.2

RUN apk add --update && \
    apk add bash nodejs && \
    rm /var/cache/apk/*

ADD . /cdatx

WORKDIR /cdatx

RUN npm install

CMD npm run watch
