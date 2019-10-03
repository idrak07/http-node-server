var http = require('http');
var fs	= require('fs');

var requestHandler = function(request, response){
	
	console.log('this is from request Handler');
	

	if(request.url == "/home"){
		
		fs.createReadStream('index.html').pipe(response);

	}
	else if(request.url == "/home/student"){
		
		fs.createReadStream('student.html').pipe(response);

	}
	else if(request.url == "/home/faculty"){
		
		fs.createReadStream('faculty.html').pipe(response);

	}
	else if(request.url == "/home/result"){
		
		fs.createReadStream('result.html').pipe(response);

	}
	else{
		response.write('invalid request');
		response.end();
	}
}

var server = http.createServer(requestHandler);

server.listen(3000);
console.log('server started at 3000...');