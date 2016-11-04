/**
 * http://usejsdoc.org/
 */

/*
 * 전역설치 방법 npm install -g jade
 * 			 npm link jade(위의 설치후 프로그램을 찾을수 없다고 하면 링크까지 걸어줘야한다.  사용할 프로젝트에서 link을 걸어준다)
 * 
 *  지역설치 방법 npm install jade
 * 
 */

var http=require('http');
var url=require('url');
var fs=require('fs');
//기본 모듈이 아니고 설치한 모듈
var jade=require('jade');
var querystring=require('querystring');

var server=http.createServer(function(req,res){
	var urlObj=url.parse(req.url,true);
//	var urlObj=url.parse(req.url);
	
	if(urlObj.pathname=="/"){
		fs.readFile('part02_jade/page1.jade','UTF-8',function(error,data){
			res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
			//jade페이지를 HTML페이지로 바꾸어 제공하는 코드가 된다.
			res.end(jade.render(data));
		});
	}else if(urlObj.pathname=="/memInsert"){
		var fname=urlObj.query.fname;
		//var parsed=querystring.parse(urlObj.query);
		//var fname=parsed.fname;
		
		fs.readFile('part02_jade/page2.jade','UTF-8',function(error,data){
			res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
			res.end(jade.render(data,{fname:fname}));
		});
		
	}
});//end server///////////

server.listen(3000,function(){
	console.log('Server Running at the http://127.0.0.1:3000');
});
