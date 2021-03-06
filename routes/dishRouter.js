const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next)=>{
    res.end("this will send all dishes");
})
.post((req, res, next)=>{
    res.end("will add the dish:"+ req.body.name+ " with details "+req.body.description);
})
.put((req, res, next)=>{
    res.statusCode = 403;
    res.end("PUT request not supported on dishes")
})
.delete((req, res, next)=>{
    res.end("deleting all dishes");
});

module.exports = dishRouter;
