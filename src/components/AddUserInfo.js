import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: 'hung',
        age: '21'
    };


    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
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
                        name="name"
                        onChange={(event) => this.handleOnChange(event)}
                    ></input>

                    <input type="text"
                        value={this.state.age}
                        name='age'
                        onChange={(event) => this.handleOnChange(event)}
                    ></input>
                    <button>submit</button>
                </form>
            </div>

        );
    }
}

export default AddUserInfo;