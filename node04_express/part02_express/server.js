/**
 * http://usejsdoc.org/
 */

var http=require('http');
var express=require('express');

//http모듈과 express모듈 연동처리

//웹서버 생성
var app=express();

app.get('/',function(req,res){
	res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
	res.end('<p>express test2</p>');
});


http.createServer(app).listen(3000,function(){
	console.log('Server Running at http://127.0.0.1:3000');
});