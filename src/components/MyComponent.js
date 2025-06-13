import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {


    render() {
        const age = 50;
        const myInfor = ['a', 'b', 'v']
        return (
            <div>
                <UserInfo></UserInfo>
                <br></br>
                <br></br>
                <DisplayInfor name='hung' age={age} myInfor={myInfor}></DisplayInfor>
            </div>

        );
    }
}

export default MyComponent;