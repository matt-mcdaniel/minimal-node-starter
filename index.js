const html = `
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
`;

const server = require('http')
    .createServer((request, response) => response.end(html))
    .listen(8080);
