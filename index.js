const http = require('http');

const server = http.createServer((req, res) => res.end(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
  </head>
  <body>

    <h1>Hello, world</h1>

  </body>
</html>
`))

server.listen(8080);
