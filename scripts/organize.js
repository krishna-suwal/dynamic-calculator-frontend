const cpy = require('cpy');

(async () => {
	await cpy(
		[
			__dirname + '/../build/static/js/main.js',
			__dirname + '/../build/static/js/main.js.map',
		],
		__dirname + '/../../assets/js');
	console.log( 'JS Files Distributed!' );

	await cpy(
		[
			__dirname + '/../build/static/css/main.css',
			__dirname + '/../build/static/css/main.css.map',
		],
		__dirname + '/../../assets/css');
	console.log( 'CSS Files Distributed!' );

	console.log( '\nFiles Distributed Successfully!' );
})();