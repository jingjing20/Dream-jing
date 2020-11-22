/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const table = Array(26).fill(0);
    const n = s.length;

    for (let i = 0; i < n; i++) {
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
    }

    for (let i = 0; i < n; i++) {
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
        if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) return false;
    }
    return true;
}