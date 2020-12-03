import React, {Component} from 'react';
import Post from "./Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.toDisplayPinned = false;
        this.state = {posts: [], pinnedPost: {}};
    }

    async componentDidMount() {
        let postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await postsResponse.json();
        this.setState({posts: posts})
    }

    pinPost = (id) =>
    {
        this.toDisplayPinned = true;
        let postToPin = this.state.posts.find(post => post.id === id);
        this.setState({pinnedPost: postToPin});
    }

    render() {
        return (
            <div>
                { this.toDisplayPinned ? <h1><Post post = {this.state.pinnedPost} key = {this.state.pinnedPost.id}/> </h1> : '' }
                { this.state.posts.map((post) => <Post post = {post} pin = {this.pinPost} key = {post.id}/>) }
            </div>
        );
    }
}

export default Posts;