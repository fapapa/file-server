const net = require('net');
const desiredFilename = process.argv[2];

const conn = net.createConnection({
  host: 'localhost',
  port: 3000
});

conn.setEncoding('utf8');

conn.on('data', (data) => {
  console.log('Server says:', data);
});

conn.on('connect', () => {
  conn.write(`Yo. I want ${desiredFilename}`);
});
