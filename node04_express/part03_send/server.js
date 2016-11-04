/**
 * http://usejsdoc.org/
 */

//모듈 추출
var express=require('express');

//서버 생성
var app=express();

app.get('/',function(req,res){
	var output=[];
	for(var i = 0; i<3; i++){
		output.push({count:1,name:'name-'+i});
	}
	
	
										
	//res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
	 							// text/plain  문자열 그대로 처리하겠다는 뜻
	//res.writeHead(200,{'Content-Type':'text/plain;charset=UTF-8'});
	
	//res.end(JSON.stringify(output));  //객체를 문자열로 바꿔주는 작업
	
	//res.send()메서드는 매개변수의 자료형에 따라 적절한 형태로 응답한다.
	res.send(200,output);
	
	
});//end app.get()//////////

//서버실행
app.listen(3000,function(){
	console.log('Server Running at http://127.0.0.1:3000');
});

