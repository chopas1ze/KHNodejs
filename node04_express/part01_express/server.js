/**
 * http://usejsdoc.org/
 */

/*
 * 웹서버 : http모듈, express모듈
 * express프레임워크 : TJHolowaychuk이 만든 경량 웹 프레임워크로써 node.js의 기본 모듈인
 * http모듈에 여러 기능을 추가해 웹 서버 작성을 할 수 있도록 제공해주는 프레임워크이다.
 */

//전역설치 방법
//npm install -g express
//npm link express

//지역설치 방법
//npm install express

//모듈 추출
var express=require('express');

//express 서버 생성
var app=express();

//app.method(경로,콜백함수);
app.get('/',function(req,res){
	res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
	res.end('<p>express test</p>');
});

//웹서버 실행
app.listen(3000,function(){
	console.log('Server Running at http://127.0.0.1:3000');
});




