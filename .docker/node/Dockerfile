FROM node:18.12-alpine

ARG USER
ARG GROUP

WORKDIR /src/app

COPY . .

RUN apk update && \
    apk upgrade

RUN addgroup -g 1001 ${GROUP}
RUN adduser -u 1001 -G ${GROUP} -s /bin/sh -D ${USER}

EXPOSE 5173

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["node"]