const fs = require('fs').promises;

const text = 'This is a test - and it should be stored in a file!';

fs.writeFile('appFiles/node-message.txt',text).then(() => {
    console.log('Wrote file!');
});