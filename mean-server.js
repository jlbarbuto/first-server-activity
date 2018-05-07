var http = require("http");

http.createServer(function(request, response){
    response.end("Maybe you should go to the gym. Or do something worthwile today...");
}).listen(7500, function(){
    console.log("Something mean worked");
});