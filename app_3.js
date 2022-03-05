//the HTTP module introduction
const HTTP = require('http');

const create_server = HTTP.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('this is our homepage');
    }

    if(req.url==='/aboutUs'){
        res.end('this is our about page ');
    }
      // if page does not exists
      res.end(`
        <h1>ooops</h1>
        <p> page does not exist </p>
      `);
})

// create_server.listen(5000);


//setting the json file everything to the default is npm init -y(everything is set to the default )


//using the lodash package or module 

const lodash = require('lodash');

const items = [2,[3,[4,5]]];

const newitems = lodash.flattenDeep(items);

console.log(newitems);

// to run the git 
//git commit -m "first commit"