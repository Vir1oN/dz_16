import React, {Component} from 'react';
import './post.css';

class Post extends Component {


    render() {
        let {post, pin} = this.props;

        return (
            <div className={'postBlock'}>
                <p>User#{post.userId}: {post.title}</p>
                <p>{post.body}</p>
                <button className={'pinButton'} onClick={() => pin(post.id)}>Pin</button>
                <hr/>
            </div>
        );
    }
}

export default Post;