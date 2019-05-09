var express = require('express');
var app = express();

var bodyParser = require('body-parser');

const JSON = require('circular-json');

var port=1235;

//console.dir(app);
console.log("helooo "+__dirname);

app.use(express.static(__dirname));

app.use(bodyParser());

var nameArray = [];


app.post('/',function(req, res, next){

    //res.send('Hello World!');

    //res.sendFile(__dirname+"/index.html");

    res.sendFile(__dirname+"/index.html");

});




app.get('/show',function(req, res, next){
    res.sendFile(__dirname+"/show.html");
});

app.get('/delete',function(req, res, next){
    res.sendFile(__dirname+"/delete.html");
});

app.get('/update',function(req, res, next){
    res.sendFile(__dirname+"/update.html");
});




app.get('/test', function(req, res, next){

    console.log("Moved to test1");
   // res.write("10");
    next();
});

app.get('/test', function(req, res, next){

    console.log("Moved to test 2");


    setTimeout(function () {
        console.log('timeout completed'); 
        //res.write(" Done waiting");
        res.send(" Done sending");
    }, 5000); 



});




// app.get('/add',function(req, res, next){
//     res.send('Received new GET REquest!');

// }); //Only for demo

// app.post('/add',function(req, res, next){

//     //res.send(JSON.stringify(req));
    

//     nameArray.push(req.body.fname);
//     res.send("Hi "+nameArray);
    
    
    
//     //res.send('Received new POST Request!');


// });



app.route('/add')
    .get(function(req, res, next){
        //res.send('Received new GET REquest!');
        res.sendFile(__dirname+"/add.html");
    })
    .post(function(req, res, next){

        //res.send(JSON.stringify(req));
        nameArray.push(req.body.fname);
        res.send("Hi "+nameArray);
        
        //res.send('Received new POST Request!');
    
    
    });


app.listen(port, function(){

        console.log("Server started on port "+port);
});