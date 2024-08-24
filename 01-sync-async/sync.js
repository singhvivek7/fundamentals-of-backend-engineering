const fs = require('fs');

console.log('1');

const res = fs.readFileSync('test.txt', 'utf8');
console.log('🚀 ~ res:', res);

console.log('2');
