const text = 'This is a test - and it should be stored in a file!';

const encoder = new TextEncoder(); //Object thta convert our text to bytes
const data = encoder.encode(text);

Deno.writeFile('appFiles/message.txt', data).then(() => {
    console.log('Wrote to file!');  
});