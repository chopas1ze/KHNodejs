/**
 * 
 */

var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");

var server = http.createServer(function(req, resp) {

	if (req.url == "/") {
		fs.readFile("part06_method/main2.html", function(err, data) {
			resp.writeHead(200, {
				"Content-Type" : "text/html;charset=UTF-8"
			});
			resp.end(data);
		});

	} else if (req.url.startsWith("/list")) {

		// var paer = url.parse(req.url);
		// console.log(paer);
		
//		var parsed = querystring.parse(url.parse(req.url).query);
		var parsed = url.parse(req.url, true).query;

		resp.writeHead(200, {
			"Content-Type" : "text/html;charset=UTF-8"
		});
		resp.end("<div><p>" + parsed.data_a + "</p><p>" + parsed.data_b
				+ "</p></div>");

	}

});

server.listen(3000, function() {
	console.log("server running at http://127.0.0.1:3000");
});
