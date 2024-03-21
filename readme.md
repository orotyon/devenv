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
- python3

  [typescript readme](docs/ts.md)

### tools
#### python
- [online-judge-tools](https://github.com/online-judge-tools/oj)

#### nodejs
- [atcoder-cli](https://github.com/Tatamo/atcoder-cli)

## how to use
```sh
# build and run
docker-compose up -d

# dwon and remove
docker-compose down --rmi all

# attach container
docker exec -it vim bash
```
