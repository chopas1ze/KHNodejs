/**
 * 
 */

var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, resp) {

	if (req.method == "GET") {
		fs.readFile("part06_method/main.html", function(err, data) {
			resp.writeHead(200, {
				"Content-Type" : "text/html;charset=UTF-8"
			});
			resp.end(data);
		});

	} else if (req.method == "POST") {
		var res = "";
		req.on("data", function(data) {
			// data 이벤트가 발생이 되면 res변수에 parameter값을 추가한다.
			res = data;
		});
		
		req.on("end", function() {
			console.log(typeof(res));
			resp.writeHead(200, {
				"Content-Type" : "text/html;charset=UTF-8"
			});
			resp.end(res);
		});
		
	}

});

server.listen(3000, function() {
	console.log("server running at http://127.0.0.1:3000");
});
