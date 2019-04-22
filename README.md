# Urling
Zero dependency utility library to check if a url is available.

Use case example: wait for a local server to start on http://localhost:8080 before doing some stuff in CI/CD.
Rather then scheduling a long wait/sleep, checking on availability might speed up things.
### Installation

```
npm install urling
```

### Usage (with default options)
```js
const urling = require('urling');

urling('https://google.com')
.then((status) => {
	// ping success
	console.log('statusCode', status)
}).catch((rejection) => {
	// ping failure
})
```

### With custom options

- required [string] url: the url to check for availability
- optional [number] retry: amount of retries (default is 3)
- optional [number] interval: optional interval wait time (default is 5000 ms)
- optional [boolean] immediate: triggers before waiting (default is false)

```js
const urling = require('urling');

const options = {
	url: 'https://google.com',
	retry: 6,
	interval: 10000,
	immediate: true
}

urling(options)
.then((response) => {
	// ping success
}).catch((rejection) => {
	// ping failure
})
``` 
