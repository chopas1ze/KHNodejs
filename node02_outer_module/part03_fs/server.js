/**
 * http://usejsdoc.org/
 */


var http=require('http');
//파일 시스템 모듈
var fs=require('fs');

var server=http.createServer(function(request, response){
	
	var dirname = __dirname;
	console.log(dirname);
	
	//파일을 읽어왔을때 에러가 발생했을때 error정보를 담을 변수   data는 파일을 저장하는 변수 
	fs.readFile(dirname + '\\index.html',function(error, data){
		if(error !==null){
			console.log(error);
			//클라이언트에 응답할때 String으로 리턴해야 하므로
			//error객체를 문자열로 변환
			response.end(JSON.stringify(error));
		}else{
			response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
			response.end(data);
		}
	});
	
});

server.listen(3000,function(){
	console.log('server running at http://127.0.0.1:3000');
});