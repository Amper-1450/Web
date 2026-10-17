import { createServer } from 'node:http';

const routes = {
    '/':  () => ({message: 'Welcome to campus evennts!'}),
    '/time': () => ({now: new Date().toISOString()}),
};

const server = createServer((req,res) => {
    const handler = routes[req.url];
    res.writeHead(handler ? 200:404,  {'Content-Type': 'application/json'});
    res.end(JSON.stringify(handler ? handler() : {error: 'Not found'}));
});

server.listen(3000, ()=> {
    console.log('Server is running on http://localhost:3000');
});