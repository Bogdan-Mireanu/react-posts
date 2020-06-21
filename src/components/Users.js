import React from 'react';
import './Users.css';
import { connect} from 'react-redux';
import {fetchUsers} from '../actions';

class Users extends React.Component{

    componentDidMount(){
        this.props.fetchUsers();
    }

    renderUsers() {
        const {users} = this.props;
        return users.map(user => {
            return (
                    <tr key={user.id}>
                        <td data-label='id'>{user.id}</td>
                        <td data-label="name">{user.name}</td>
                        <td data-label="email" className='none'>{user.email}</td>
                        <td data-label="website" className='none'>{user.website}</td>
                        <td data-label="company" className='none'>{user.company.name}</td>
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
                        <th className='none'>Email</th>
                        <th className='none'>Website</th>
                        <th className='none'>Company Name</th>
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