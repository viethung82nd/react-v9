import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { listUser } = this.props;
        return (
            <div>
                {listUser.map((user) => {
                    if (+user.age > 18) {
                        return (
                            <div key={user.id} className="red">
                                MY name is {user.name}
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
}

export default DisplayInfor;