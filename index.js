const server = require('./server/bin/www');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
.then(() => {
    const middleware = server.middleware;
    middleware.get('*', (req, res) => {
        console.log('*****', req);
        return handle(req, res)
    });
    server.start();
});
