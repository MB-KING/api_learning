import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Posts_res: []

        }
    }

    componentDidMount() {
        axios.get(`http://digibazi-services.naringames.com:90/v1/posts?per_page=5&page=2`)
            .then(res => {
                const Posts_res = res.data.data;
                this.setState({ Posts_res });
            }
        )
    }
    render() {
        return (
            <ul>
                { this.state.Posts_res.map(Post => <li>{Post.title}</li>)}
            </ul>
        )
    }
}
 
export default Posts;