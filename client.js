const net = require('net');
const fs = require('fs');
const desiredFilename = process.argv[2];

const conn = net.createConnection({
  host: 'localhost',
  port: 3000
});

conn.setEncoding('utf8');

conn.on('data', () => {
  const fileStream = fs.createWriteStream(`./saved/${desiredFilename}`);
  conn.pipe(fileStream);
});

conn.on('connect', () => {
  conn.write(`iCanHaz: ${desiredFilename}`);
});
