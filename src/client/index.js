import React from "react";
import ReactDom from 'react-dom' 
import Home from "../container/Home";

const App = function() {
    return (
        <Home/>
    );
}

ReactDom.render(<App/>, document.getElementById('root'));
