import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'hung',
        age: '21'
    };

    handleClick = () => {
        console.log('name: ', this.state.name);
    }

    render() {
        return (
            <div>
                My First Component
                name: {this.state.name}
                <button onClick={this.handleClick}>click me</button>
            </div>

        );
    }
}

export default MyComponent;