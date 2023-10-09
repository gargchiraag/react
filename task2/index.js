import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
    render(){
        return "Hey There this is my first component of React using class";
    }
}
function FunctionComponent(props){
    return (<>
    <h2>Hello World!!!</h2>
    <HelloWorld/>
    <p>Hey {props.name} How are you? hope you are doing good!!!</p>
    </>)
}
const dom=document.getElementById("root");
const root=ReactDOM.createRoot(dom);
root.render(<FunctionComponent name="Chiraag Garg" />)