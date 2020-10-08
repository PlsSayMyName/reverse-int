module.exports = function reverse (n) {
	let stringNum = n.toString();

	if(stringNum.includes('-')) {
		return stringNum.substr(1).split('').reverse().join('');
	} else {
			return stringNum.split('').reverse().join('');
    }
}
