import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'hung',
        age: '21'
    };


    handleClick(event) {
        console.log('name: ', this.state.name);

        this.setState({
            name: 'hhhaaa'
        })
    }

    render() {
        return (
            <div>
                My First Component
                name: {this.state.name}
                <button onClick={(event) => { this.handleClick(event) }}>click me</button>
            </div>

        );
    }
}

export default MyComponent;