FROM alpine:latest

ARG PB_VERSION=0.17.3

RUN apk add --no-cache \
    unzip \
    ca-certificates

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# copy the local pb_migrations dir into the image
COPY ./setup/pb_migrations /pb/pb_migrations
COPY ./setup/pb_data /pb/pb_data

EXPOSE 8090

# start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090"]
