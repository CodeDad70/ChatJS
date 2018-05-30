var app = require('http').createServer(response);
app.listen(3000);
console.log("App running…");
function response(req, res) {
 res.writeHead(200);
 res.end("Hi, your server is working!");
}
