import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Greet from './greet';
import GreetClass from './greetClass';

const props=<h1 className='text'>This is Written in React ;)</h1>;


console.log(props);

function App(){
    return <div className="App">
        <Greet/>
        <GreetClass/>
    </div>
}

export default App; //Here App is
