import React from "react";
import ReactDOM  from "react-dom";

const basic_element = (
    
    <div  id='wrapper'>
        <h1>hello world</h1>
    </div>
    
);

//react components must be capitalized
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked : false};
    }

    render() {
        return basic_element;   
    }
}


ReactDOM.render(<MyComponent/>, document.getElementById('app'));