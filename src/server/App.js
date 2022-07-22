import React from "react";
import  express  from 'express';
import { renderToString } from 'react-dom/server'
import Home from "../container/Home";

const app = express();
app.get('/', function(req,res){
    const content = renderToString(<Home/>);
    res.send(`
        <html>
            <head>
                <title> SSR demo </title>
            </head>
            <body>
                Hello World ${content} !
                <script src="/index.js"></script>
            </body>
        </html>
    `);
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});