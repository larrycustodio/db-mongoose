const server = require('./app');
const PORT = '8080';

server.listen(PORT, () => {
    console.log('Running on localhost:'+ PORT + '!');
})