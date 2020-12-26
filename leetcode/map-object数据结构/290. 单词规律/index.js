/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
	let word_ch = new Map();
	let ch_word = new Map();
	let words = s.split(' ');
	if (pattern.length !== words.length) {
		return false;
	}
	for (const [i, word] of words.entries()) {
		const ch = pattern[i];
		if ((word_ch.has(word) && word_ch.get(word) !== ch) || (ch_word.has(ch) && ch_word.get(ch) !== word)) {
			return false;
		}
		word_ch.set(word, ch);
		ch_word.set(ch, word);
	}
	return true;
};

let pattern = 'abba',
	str = 'dog cat cat dog';

console.log(wordPattern(pattern, str)); //jing-log
