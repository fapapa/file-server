const net = require('net');
const server = net.createServer();

server.on('connection', (client) => {
  client.write('Connected!');
  client.setEncoding('utf8');

  client.on('data', (data) => {
    if (data.match(/^iCanHaz: /)) {
      const filename = data.match(/^iCanHaz: (.*)$/)[1];
      client.write(`Oh, so you want ${filename}, eh?`);
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
