import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'hung',
        age: '21'
    };


    handleOnChange = (event) => {
        this.setState({
            name: event.target.value,
            age: 89
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                My First Component
                name: {this.state.name},
                age: {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnChange(event)}
                    ></input>
                    <button>submit</button>
                </form>
            </div>

        );
    }
}

export default UserInfo;