var http = require("http");

var PORT = 7500;

function handleRequest(request, response){
    response.end("Maybe you should go to the gym. Or do something worthwile today... ");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Something mean worked");
});