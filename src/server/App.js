import React from "react";
import  express  from 'express';
import { renderToString } from 'react-dom/server'
import Home from "../container/Home";
const cheerio = require('cheerio');

const app = express();
app.get('/', function(req,res){
    const content = renderToString(<Home/>);
    // const c = cheerio.load("__SERVER_HTML_TEMPLATE__");
    // c('root').append('<body>Hello World ${content} !</body>');
    // const html = c.html();
    // res.send(html);
    
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>SSR Demo</title>
      <script defer src="app.bundle.js"></script></head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
    `);
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});