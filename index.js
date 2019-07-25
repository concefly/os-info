#!/usr/bin/env node

const os = require('os');

function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function getInfoStr() {
  return [
    // cpu
    ['cpu', os.cpus().length],
    // mem
    ['totalMemory', bytesToSize(os.totalmem())],
    // network
    ['hostname', os.hostname()],
  ]
    .map(couple => couple.map(item => JSON.stringify(item, null, 2)).join(': '))
    .join('\n');
}

console.log(getInfoStr());
