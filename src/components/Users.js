import React from 'react';
import { connect} from 'react-redux';
import {fetchUsers} from '../actions';

class Users extends React.Component{

    componentDidMount(){
        this.props.fetchUsers();
        console.log(this.props.users);
    }

    renderUsers() {
        const {users} = this.props;
        return users.map(user => {
            return (
                    <tr>
                        <td data-label='id'>{user.id}</td>
                        <td data-label="name">{user.name}</td>
                        <td data-label="email">{user.email}</td>
                        <td data-label="website">{user.website}</td>
                        <td data-label="company">{user.company.name}</td>
                    </tr>
            )
        })
    }

    render() {
        return (
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody>
                   {this.renderUsers()} 
                </tbody>
            </table>
        )
    }
}


const mapStateToProps = (state) => {
    return {users: state.users};
}
export default connect(mapStateToProps, {fetchUsers})(Users);