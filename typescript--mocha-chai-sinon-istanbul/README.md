# webpack + typescript + mocha + chai + sinon
template for my projects

## setup

install required(and optional) modules
```bash
$ npm install --save-dev webpack \        # build and compile runner
						 webpack-cli \    # cli for webpack
						 typescript \     # TS's transpiler  
						 ts-loader \      # webpack loader for typescript
						 ts-node \        # なんだっけ
						 mocha \          # test runner & structure
						 chai \           # assertion
						 sinon \          # test doubles(spy, double, mock, faker)
						 sinon-chai \     # utils for sinon & chai
						 chai-as-promised \ # utils for async/await for chai
						 rewire \         # for private method
						 @types/chai \
						 @types/mocha \
						 @types/sinon \
						 @types/sinon-chai \
						 @types/chai-as-promised \
						 @types/rewire
```

setup webpack & tsconfig.json(as you want)

## build js

check [here](https://github.com/vsanna/dd-webpack) for webpack configurations

```
$ npx webpack-cli --config webpack.dev.js
$ npm run build
```

## run test

```
$ TS_NODE_COMPILER_OPTIONS='{"module":"commonjs"}' ./node_modules/.bin/mocha -r ts-node/register "spec/**/*.ts"
```