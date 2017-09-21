var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')

var convert = require('./infix_to_postfix');
var circuit = require('./circuit');

var baseDirectory = __dirname   // or whatever base directory you want

var port = 3001

http.createServer(function (request, response) {
   try {
     var requestUrl = url.parse(request.url)

     // need to use path.normalize so people can't access directories underneath baseDirectory


     var fsPath = baseDirectory+path.normalize(requestUrl.pathname)

     

     if (request.url[1] === '=') {

        var postfix = "";

        var exp = request.url.substring(2);

        exp = exp.replace(/1/g,"&"); // replace all 1s

        exp = exp.replace(/2/g,"^"); // replace all 2s

        exp = exp.replace(/3/g,"~"); // replace all 3s

        console.log(exp);


        postfix = convert._to_postfix(exp)

        let bool_values = [true,false/*,true,false*/];

        var c = circuit.contruct_circuit(postfix,bool_values);

        console.log(postfix)

        response.end(JSON.stringify(c))

        
     }
     else{
            if (request.url == "/") {
                fsPath = "index.html";
            }
         var fileStream = fs.createReadStream(fsPath)
         fileStream.pipe(response)
         fileStream.on('open', function() {
             response.writeHead(200)
         })
         fileStream.on('error',function(e) {
             response.writeHead(404)     // assume the file doesn't exist
             response.end()
         })
        
       }
   } catch(e) {
     response.writeHead(500)
     response.end()     // end the response so browsers don't hang
     console.log(e.stack)
   }
}).listen(port)