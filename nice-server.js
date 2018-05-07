var http = require("http");

http.createServer(function(request, response){
    response.end("You're looking very lovely today. Treat yourself to a refreshing beverage.");
}).listen(7000, function(){
    console.log("Something nice worked");
});