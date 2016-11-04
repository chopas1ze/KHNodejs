/**
 * http://usejsdoc.org/
 */

//모듈 추출(로딩)
var http=require('http');
var fs=require('fs');
var socketio=require('socket.io');

//서버 생성
var server=http.createServer();
//서버에 소켓을 연결한다.
var io=socketio.listen(server);


//이벤트 등록할때는 on 메소드사용
//응답 이벤트가 발생하면...
server.on('request',function(req,res){
	fs.readFile('chat.html',function(error,data){
		//res.writeHead(200,{'Content-Type': 'text/html;charset=UTF-8'});
		res.end(data);
				
	});
});//end server.on('request')//////////

//클라이언트가 채팅을 하기위해 소켓연결을 하면
io.sockets.on('connection',function(socket){
	//on()이벤트 등록
	//클라이언트가 메세지를 보내면
	socket.on('message',function(data){
		//emit() 강제적으로 이벤트 발생
		//서버에서 다시 클라이언트에게 메세지를 보낸다.
		io.sockets.emit('message',data);
	});
});


server.listen(3000,function(){
	console.log('Server Running at http://127.0.0.1:3000');
});