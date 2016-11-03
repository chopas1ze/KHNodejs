/**
 * http://usejsdoc.org/
 */


var http=require('http');
var url=require('url');
var fs=require('fs');

// http://127.0.0.1:3000/
//http://127.0.0.1:3000/otherPage
	
//웹 서버 생성
var server=http.createServer(function(request, response){
	var dirname=__dirname;
	
	console.log(request.url);
	var userpath=request.url;
	if(userpath=='/'){
		fs.readFile(dirname + '\\index.html',function(error, data){
			response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
			response.end(data);
		});
	}else if(userpath=='/otherPage'){
		fs.readFile(dirname + '\\otherPage.html',function(error, data){
			response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
			response.end(data);
		});
		};
});

//웹 서버 실행
server.listen(3000,function(){
	console.log('server running at http://127.0.0.1:3000');
});