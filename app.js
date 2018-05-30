var app = require('http').createServer(response);
app.listen(3000);
console.log("This App is running...");
function response(req, res) {
  res.writeHead(200);
  res.end("Boom chalak lak ");
}