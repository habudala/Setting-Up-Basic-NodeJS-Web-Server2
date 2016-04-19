var http = require("http");
var fs = require("fs");

// 404 reponse 
function fourOfour (response) {
	response.writeHead(404, {"Content-Type":"text/html"});
	response.write("<h1>404 Unfortunately we couldn't find the page you were looking for...</h1>")
	response.end();
}

// handle user request
function onRequest(request,response) {
	if(request.method === "GET" && request.url === "/") {
		response.writeHead(200, {"Content-Type":"text/html"});
		fs.createReadStream("./index.html").pipe(response);
	}else {
		fourOfour(response);
	}
}

http.createServer(onRequest).listen(8000);
console.log("Your Server is Now Running...")