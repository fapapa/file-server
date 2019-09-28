const net = require('net');
const server = net.createServer();

server.on('connection', (client) => {
  client.write('Connected!');
  client.setEncoding('utf8');

  client.on('data', (data) => {
    console.log('Client says:', data);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
