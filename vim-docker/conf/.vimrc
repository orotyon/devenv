source $VIMRUNTIME/defaults.vim
set number
set cursorline
set hlsearch

"https://github.com/junegunn/vim-plug
call plug#begin()
Plug 'prabirshrestha/vim-lsp'
Plug 'mattn/vim-lsp-settings'
Plug 'prabirshrestha/asyncomplete.vim'
Plug 'prabirshrestha/asyncomplete-lsp.vim'

call plug#end()
