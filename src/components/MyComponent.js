import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: '1', name: 'hung', age: '21' },
            { id: '2', name: 'foe', age: '33' }
        ]
    }


    render() {

        return (
            <div>
                <UserInfo></UserInfo>
                <br></br>
                <br></br>
                <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
            </div>

        );
    }
}

export default MyComponent;