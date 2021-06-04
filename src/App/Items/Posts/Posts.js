import React, { Component } from 'react';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';



class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Categories: [],
            Posts: [],
            post_per_page: '5',
            page: '2',
            input_Categorie: ''
        }
    }

    componentDidMount() {

        axios.get(`http://digibazi-services.naringames.com:90/v1/categories`)
            .then(res => {
                const Categories = res.data.data;
                this.setState({ Categories });
            }
        );
        axios.get(`http://digibazi-services.naringames.com:90/v1/posts?per_page=${this.state.post_per_page}&page=${this.state.page}`)
        .then(res => {
            const Posts = res.data.data;
            this.setState({ Posts });
            console.log(Posts)

            
        }
    )


    }
    HandelSubmit = (event) => {
        event.preventDefault()

    }
    HandelClick = () => {
        axios.get(`http://digibazi-services.naringames.com:90/v1/posts?per_page=${this.state.post_per_page}&page=${this.state.page}`)
            .then(res => {
                const Posts = res.data.data;
                this.setState({ Posts });
                console.log(Posts)

                
            }
        )

    }
    HandelInputChange = (event) => {
        this.setState({
            post_per_page: event.target.value,

        })

    }
    HandelInputChange1 = (event) => {
        this.setState({
            page: event.target.value,

        })

    }
    HandelInputChange2 = (event) => {
        this.setState({
            input_Categorie: event.target.value,

        })

    }





    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.HandelSubmit}>
                    <li>
                        <label htmlFor="">post per page :</label>

                        <input type="text" value={this.state.post_per_page} onChange={this.HandelInputChange} />
                    </li>
                    <li>
                        <label htmlFor="">page :</label>

                        <input type="text" value={this.state.page} onChange={this.HandelInputChange1} />
                    </li>
                    <li>
                        <select onChange={this.HandelInputChange2}>
                            {this.state.Categories.map(Categorie => <option value={Categorie.name}>{Categorie.name}</option>)}
                        </select>
                    </li>
                    <li>
                        <button type='submit' onClick={this.HandelClick} >send</button>
                    </li>

                    <p>{this.state.post_per_page}</p>
                    <p>{this.state.page}</p>
                    <p>{this.state.input_Categorie}</p>
                </form>
                <Pagination value={this.state.page} onChange={this.HandelInputChange1}
                count={10} 
                page={this.state.page} 
                />

                <ul>
                {this.state.Posts.map(Post => <li key={Post.id}>
                    <li>{Post.title}</li>
                    <li>{Post.short_content}</li>
                    <li><img src={Post.media[0].url} alt="post pic"/></li>
                </li>)}

                </ul>

            </React.Fragment>
        )
    }
}

export default Posts;