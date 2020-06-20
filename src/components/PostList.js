import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import User from './User'
import Modal from './Modal';

class PostList extends React.Component {

    state ={
        show: false
    };

    showModal = e => {
         this.setState({
            show: !this.state.show
         });
    };
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        
        const {posts} = this.props;
        return posts.map (post => {
            return (
            <div className ='item card section' key={post.id}>
                <div className='content'>
                    <User userId={post.userId}/>
                    <button id="centered-toggle-button" className='myButton toggle-button' onClick={e => this.showModal() }>Edit</button>
                </div>
                <div className='info'>
                    <h2>{post.title}</h2>   
                    <p>{post.body}</p>
                </div>
                <Modal onClose={this.showModal} show={this.state.show}> My modal</Modal>
            </div> 
            )
        })
    }

    render() {
        
        return <div className='ui cards'>{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return {posts: state.posts};
}
export default connect(
    mapStateToProps, 
    {fetchPosts: fetchPosts}
    )(PostList);