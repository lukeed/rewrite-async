const test = require('ava');
const fn = require('../');

test('async function () {}', t => {
	const out = 'async function () {}';
	const nxt = 'function* () {}';
	t.is(fn(out), nxt);
});

test('async function foo() {}', t => {
	const out = 'async function foo() {}';
	const nxt = 'function* foo() {}';
	t.is(fn(out), nxt);
});

test('async function foo () {}', t => {
	const out = 'async function foo () {}';
	const nxt = 'function* foo () {}';
	t.is(fn(out), nxt);
});

test('async function foo(one) {}', t => {
	const out = 'async function foo(one) {}';
	const nxt = 'function* foo(one) {}';
	t.is(fn(out), nxt);
});

test('async function foo (one) {}', t => {
	const out = 'async function foo (one) {}';
	const nxt = 'function* foo (one) {}';
	t.is(fn(out), nxt);
});

test('async function foo(one, two) {}', t => {
	const out = 'async function foo(one, two) {}';
	const nxt = 'function* foo(one, two) {}';
	t.is(fn(out), nxt);
});

test('async function foo (one, two) {}', t => {
	const out = 'async function foo (one, two) {}';
	const nxt = 'function* foo (one, two) {}';
	t.is(fn(out), nxt);
});

test('async function (one) {}', t => {
	const out = 'async function (one) {}';
	const nxt = 'function* (one) {}';
	t.is(fn(out), nxt);
});

test('async function(one) {}', t => {
	const out = 'async function(one) {}';
	const nxt = 'function*(one) {}';
	t.is(fn(out), nxt);
});

test('async () => {}', t => {
	const out = 'async () => {}';
	const nxt = 'function* () {}';
	t.is(fn(out), nxt);
});

test('async() => {}', t => {
	const out = 'async() => {}';
	const nxt = 'function*() {}';
	t.is(fn(out), nxt);
});

test('async (one, two) => {}', t => {
	const out = 'async (one, two) => {}';
	const nxt = 'function* (one, two) {}';
	t.is(fn(out), nxt);
});

test('async(one, two) => {}', t => {
	const out = 'async(one, two) => {}';
	const nxt = 'function*(one, two) {}';
	t.is(fn(out), nxt);
});

test('async (one) => {}', t => {
	const out = 'async (one) => {}';
	const nxt = 'function* (one) {}';
	t.is(fn(out), nxt);
});

test('async(one) => {}', t => {
	const out = 'async(one) => {}';
	const nxt = 'function*(one) {}';
	t.is(fn(out), nxt);
});

test('async one => {}', t => {
	const out = 'async one => {}';
	const nxt = 'function* (one) {}';
	t.is(fn(out), nxt);
});

test('async one => one', t => {
	const out = 'async one => one';
	const nxt = 'function* (one) {return one}';
	t.is(fn(out), nxt);
});

test('async(one) => one', t => {
	const out = 'async(one) => one';
	const nxt = 'function*(one) {return one}';
	t.is(fn(out), nxt);
});

test('async (one, two) => two', t => {
	const out = 'async (one, two) => two';
	const nxt = 'function* (one, two) {return two}';
	t.is(fn(out), nxt);
});

test('async(one, two) => two', t => {
	const out = 'async(one, two) => two';
	const nxt = 'function*(one, two) {return two}';
	t.is(fn(out), nxt);
});

test('async (one, two)=>two', t => {
	const out = 'async (one, two)=>two';
	const nxt = 'function* (one, two){return two}';
	t.is(fn(out), nxt);
});

test('async(one, two)=>two', t => {
	const out = 'async(one, two)=>two';
	const nxt = 'function*(one, two){return two}';
	t.is(fn(out), nxt);
});

test('var foo = async(one, two) => two', t => {
	const out = 'var foo = async(one, two) => two';
	const nxt = 'var foo = function*(one, two) {return two}';
	t.is(fn(out), nxt);
});

test('var foo=async(one, two) => two', t => {
	const out = 'var foo=async(one, two) => two';
	const nxt = 'var foo=function*(one, two) {return two}';
	t.is(fn(out), nxt);
});

test('var foo=async(one, two)=>two', t => {
	const out = 'var foo=async(one, two)=>two';
	const nxt = 'var foo=function*(one, two){return two}';
	t.is(fn(out), nxt);
});

test('var foo = async one => one', t => {
	const out = 'var foo = async one => one';
	const nxt = 'var foo = function* (one) {return one}';
	t.is(fn(out), nxt);
});

test('var foo = async () => {}', t => {
	const out = 'var foo = async () => {}';
	const nxt = 'var foo = function* () {}';
	t.is(fn(out), nxt);
});

test('var foo = async function() {}', t => {
	const out = 'var foo = async function() {}';
	const nxt = 'var foo = function*() {}';
	t.is(fn(out), nxt);
});

test('var foo = async function (one) {}', t => {
	const out = 'var foo = async function (one) {}';
	const nxt = 'var foo = function* (one) {}';
	t.is(fn(out), nxt);
});

test('var foo = async function() {', t => {
	const out = 'var foo = async function() {';
	const nxt = 'var foo = function*() {';
	t.is(fn(out), nxt);
});

test('var foo = async one => {', t => {
	const out = 'var foo = async one => {';
	const nxt = 'var foo = function* (one) {';
	t.is(fn(out), nxt);
});

test('var foo = async (one) => {', t => {
	const out = 'var foo = async (one) => {';
	const nxt = 'var foo = function* (one) {';
	t.is(fn(out), nxt);
});

test('var foo = async foo(one, two) {}', t => {
	const out = 'var foo = async foo(one, two) {}';
	const nxt = 'var foo = function* foo(one, two) {}';
	t.is(fn(out), nxt);
});

test('async foo(one, two) {', t => {
	const out = 'async foo(one, two) {';
	const nxt = 'function* foo(one, two) {';
	t.is(fn(out), nxt);
});

test('var foo = async one => await one()', t => {
	const out = 'var foo = async one => await one()';
	const nxt = 'var foo = function* (one) {return yield one()}';
	t.is(fn(out), nxt);
});

test('async foo (one, two) => {await one(two)}', t => {
	const out = 'async foo (one, two) => {await one(two)}';
	const nxt = 'function* foo (one, two) {yield one(two)}';
	t.is(fn(out), nxt);
});
