const urling = require('./lib/index');

console.log('___',urling);

urling('https://google.com').then(() => {
	console.log(arguments);
});
