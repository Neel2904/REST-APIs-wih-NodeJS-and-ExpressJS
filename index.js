const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter')

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);

app.get('/dishes/:dishId',(req, res, next)=>{
    res.end("this will send details of dish: "+req.params.dishId);
});
app.post('/dishes/:dishId',(req, res, next)=>{
    res.end("POST operation is not supported on /dish/"+req.params.dishId);
});
app.put('/dishes/:dishId',(req, res, next)=>{
    res.write("Updating the dish: "+req.params.dishId);
    res.end(" will update the dish:"+req.params.dishId+"with details "+req.params.description);
});
app.delete('/dishes/:dishId',(req, res, next)=>{
    res.end("deleting dish: "+req.params.dishId);
});

app.use(express.static(__dirname+'/public'))

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is express server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, ()=> {
    console.log(`server running bruhh`);
});
