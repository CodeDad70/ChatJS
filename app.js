var app = require('http').createServer(response);
var fs = require('fs');

app.listen(3000);
console.log("App is running…");

function response(req, res) {
  fs.readFile(__dirname + '/index.html',
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Failed to load the file index.html');
      }
      res.writeHead(200);
      res.end(data);
    });
}