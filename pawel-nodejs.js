const http = require('http');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
hostname = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<html><head><title>Paweł Janczarek - sample program</title></head><body><b>Hello World</b></body></html>\n');
});

server.listen(port, hostname, () => {
  console.log(`Pawel: Server running at http://${hostname}:${port}/`);
});
