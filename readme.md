# Development Environment by vim

## image
[alpine:latest](https://hub.docker.com/_/alpine)


## installed
### basic
- vim
- bash
- curl
- git

### language
- openjdk17
- nodejs
  [nodejs readme](docs/ts.md)

## how to use
```sh
# build and run
docker-compose up -d

# dwon and remove
docker-compose down --rmi all

# attach container
docker exec -it vim bash
```
