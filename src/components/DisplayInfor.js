import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { listUser } = this.props;
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            MY name is {user.name}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DisplayInfor;