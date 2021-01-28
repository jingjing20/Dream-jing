let qs = '?q=javascript&num=10';

let searchQuery = new URLSearchParams(qs);

console.log(searchQuery.toString()); //jing-log     q=javascript&num=10
console.log(searchQuery.has('num')); //jing-log     true
console.log(searchQuery.get('num')); //jing-log     10
searchQuery.set('jing', 'baobei');
searchQuery.delete('num');
console.log(searchQuery.toString()); //jing-log     q=javascript&jing=baobei

for (let param of searchQuery) {
	console.log(param); //jing-log                  [ 'q', 'javascript' ][ 'jing', 'baobei' ]
}
