import React from "react";

class DisplayInfor extends React.Component {
    render() {

        return (
            <div>
                name: {this.props.name}
                <br></br>
                age: {this.props.age}
            </div>
        );
    }
}

export default DisplayInfor;