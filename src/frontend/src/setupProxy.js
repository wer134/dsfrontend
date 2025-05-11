src/main/frontend/src/setupProxy.js

const {createProxyMiddleware } = require('http-proxy-middleware');

modul.exports = function(app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target : 'https://wer134.github.io/dsfrontend/',
			changeOrigin: true,
		})
	)
}
