import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: '1', name: 'hung', age: '21' },
            { id: '2', name: 'foe', age: '33' }
        ]
    }

    handleAddNewUser = (userOb) => {
        console.log(userOb);
        this.setState({
            listUser: [userOb, ... this.state.listUser]
        })
    }


    render() {

        return (
            <div>
                <AddUserInfo
                    handleAddNewUser={this.handleAddNewUser}
                ></AddUserInfo>
                <br></br>
                <br></br>
                <DisplayInfor

                    listUser={this.state.listUser}
                ></DisplayInfor>
            </div>

        );
    }
}

export default MyComponent;