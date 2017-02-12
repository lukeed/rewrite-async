# rewrite-async [![Build Status](https://travis-ci.org/lukeed/rewrite-async.svg?branch=master)](https://travis-ci.org/lukeed/rewrite-async)

> Rewrite async functions as generators; via RegExp;

Unlike [`async-to-gen`](), this does not register a runtime. Instead, the "transpiling" occurs only as needed.

Also, this is _only_ executes a **string conversion**! You will have to look to other modules in order to execute the returned string.

> **Note:** Although `eval()` will work, it's generally (and strongly) not recommended.

## Install

```
$ npm install --save rewrite-async
```


## Usage

```js
const rewriteAsync = require('rewrite-async');

rewriteAsync('async function (one, two) {}');
//=> 'function* (one, two) {}'

rewriteAsync('var foo = async (req, res) => {}');
//=> 'var foo = function* (one, two) {}'

rewriteAsync('async one => await foo(one)');
//=> 'function* (one) {return yield foo(one)}'
```


## API

### rewriteAsync(input)

#### input

Type: `string`

A function's contents (via `.toString()`) or any `utf-8` string that contains function definitions.


## License

MIT © [Luke Edwards](https://lukeed.com)
