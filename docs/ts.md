# typescript

[TypeScript](https://www.typescriptlang.org/)

[JEST](https://jestjs.io/ja/)

## setup
install and initialize
```sh
npm init -y
npm install -D typescript ts-jest @jest/globals @types/jest
```
add `package.json`
```json
{
  "scripts": {
    "test": "jest"
  }
}
```
setting of jest
[Installation](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation/#jest-config-file)

```sh
npx ts-jest config:init
```

## how to use
```sh
npm test
npm test filename
npm t
npm t f
```
