import React, { Component } from 'react';

class User extends Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                </table>
                <tbody>
                    {this.props.data === undefined ? <div></div> :
                        this.props.data.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </div>
        );
    }
}

export default User;