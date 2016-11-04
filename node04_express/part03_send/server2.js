/**
 * http://usejsdoc.org/
 */

//모듈 추출
var express=require('express');

//서버 생성
var app=express();

//app.메서드(경로,콜백함수);
app.get('/',function(req,res){
	var html="<html><body>test</body></html>";
	res.send(html);
	
});//end app.get()//////////

//서버실행
app.listen(3000,function(){
	console.log('Server Running at http://127.0.0.1:3000');
});


