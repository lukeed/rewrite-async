'use strict';

const fn = 'function*';
const asyncOrAsyncFunc = /async((\s)?function)?/gi;

const btwGeneratorAndArrow = /function\*(.+?)=>/gi;
const enforceParenthesis = (m, p) => (/\(/.test(p) && /\)/.test(p)) ? m : m.replace(p, ` (${p.trim()}) `);

const afterArrow = /=>(.+)/gi;
const enforceBrackets = (_, p) => (p = p.trim()) && /{/.test(p) ? p : `{return ${p}}`;

module.exports = str =>
	str
	.replace('await', 'yield')
	.replace(asyncOrAsyncFunc, fn)
	.replace(btwGeneratorAndArrow, enforceParenthesis)
	.replace(afterArrow, enforceBrackets);
