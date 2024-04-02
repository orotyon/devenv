from alpine:latest
RUN apk add vim bash curl git openjdk17 nodejs npm python3 python3-dev py3-pip
RUN pip3 install online-judge-tools
RUN npm install -g atcoder-cli
RUN curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
COPY conf/.bashrc /root/.bashrc
COPY conf/.vimrc /root/.vimrc
