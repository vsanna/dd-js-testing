# webpack + typescript + ava + sinon
template for my projects

## setup

install required(and optional) modules
```bash
$ npm install --save-dev webpack \        # build and compile runner
			 webpack-cli \    # cli for webpack
			 typescript \     # TS's transpiler  
			 ts-loader \      # webpack loader for typescript
			 ts-node \        # execute and provide REPL for typescript on node.js
			 ava \	          # testing framework
			 sinon \          # test doubles(spy, double, mock, faker)
			 nyc \            # CLI of istanbul (test coverage)
			 uglifyjs-webpack-plugin \
			 @types/sinon
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
$ npx ava
```
