const net = require('net');

const conn = net.createConnection({
  host: 'localhost',
  port: 3000
});

conn.setEncoding('utf8');

conn.on('data', (data) => {
  console.log('Server says:', data);
});

conn.on('connect', () => {
  conn.write('I will eventually want to ask you for a file');
});
