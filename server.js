const net = require('net');
const fs = require('fs');
const server = net.createServer();

server.on('connection', (client) => {
  client.setEncoding('utf8');

  client.on('data', (data) => {
    if (data.match(/^iCanHaz: /)) {
      const filename = data.match(/^iCanHaz: (.*)$/)[1];
      const fileStream = fs.createReadStream(filename);
      fileStream.pipe(client);

      fileStream.on('error', (err) => {
        client.write(`nah: ${err}\n`);
        client.end();
      });

      fileStream.on('close', () => {
        client.end();
      });
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
