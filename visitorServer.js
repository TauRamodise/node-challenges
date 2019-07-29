const http = require('http');
const fs = require('fs')
// import visitor from 'visitor';
const path = require('path');

fail.mkdir(path.join)
//

const port = 3000

http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('server is running');
        res.end();
    
}).listen(port)




