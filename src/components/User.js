import React from 'react';
import { connect} from 'react-redux';
import {fetchUser} from '../actions';
import Avatar from 'react-avatar';

class User extends React.Component{
    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }
    render(){
        const user = this.props.users.find(user => user.id === this.props.userId)
        if (!user) {
            return null;
        }
        return  (
            <div>
                <Avatar name={user.name} round= {true} size='40px'/>
                <div>{user.name}</div>
            </div>
            
        ) 
    }
}

const mapStateToProps = (state) => {
    return {users: state.users};
}
export default connect(mapStateToProps, {fetchUser})(User);