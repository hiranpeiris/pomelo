const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Add 3 seconds delay to transactions api
server.use('/transactions', function(req, res, next) {
  setTimeout(next, 3000);
});

server.use(middlewares);
server.use(router);
server.listen(3004, () => {
  console.log('Mock server is running at http://localhost:3004');
});
