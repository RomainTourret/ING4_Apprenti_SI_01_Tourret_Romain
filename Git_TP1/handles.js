// Import a module
const url = require('url')
const qs = require('querystring')

const serverHandle = function (req, res) {
  const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)

  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (path === '/hello' && 'name' in params) {
    
    if(params['name'] == 'Romain'){
      //http://localhost:8080/hello?name=Romain
      res.write('Hello Romain ! Glad to see you are back once more for god knows what.')
    }
    else{
      //http://localhost:8080/hello?name=whateveryouwantmetobe 
      res.write('Hello ' + params['name'])
    }
  } 
  else {
    //http://localhost:8080/hello?age=13
    res.write('Error 404 : Perhaps the archives are incomplete.')
  }
  
  res.end();
}

module.exports = {
  serverHandle: serverHandle
}