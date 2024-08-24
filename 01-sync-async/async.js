const fs = require('fs');

console.log('1');

fs.readFile('test.txt', (err, data) => {
  if (err) {
    console.log('🚀 ~ err:', err);
  }
  console.log('🚀 ~ data:', data.toString());
});

console.log('2');
