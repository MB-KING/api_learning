import React, { Component } from 'react';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';



class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Categories: [],
            Posts: [],
            Totalpages: '',
            current_page: '',
            post_per_page: '5',
            page: '1',
            input_Categorie: ''
        }
    }
    componentDidMount() {

        axios.get(`http://digibazi-services.naringames.com:90/v1/categories?per_page=500`)
            .then(res => {
                const Categories = res.data.data;
                this.setState({ Categories });
            }
            );
        axios.get(`http://digibazi-services.naringames.com:90/v1/posts?per_page=${this.state.post_per_page}&page=${this.state.page}`)
            .then(res => {
                const Posts = res.data.data;
                const meta = res.data.meta;
                const Totalpages = meta.pagination.total_pages;
                const current_page = meta.pagination.current_page;
                this.setState({ Posts, Totalpages, current_page });


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
                const meta = res.data.meta;
                const Totalpages = meta.pagination.total_pages;
                const current_page = meta.pagination.current_page;
                this.setState({ Posts, Totalpages, current_page });


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
        //console.log("page = " + this.state.page)
    }
    HandelInputChange2 = (event) => {
        this.setState({
            input_Categorie: event.target.value,

        })

    }

    handlePageChange = (event) => {
        console.log("page :" + event.target.innerText);
        this.setState({
            page: event.target.innerText,
        });
        axios.get(`http://digibazi-services.naringames.com:90/v1/posts?per_page=${this.state.post_per_page}&page=${this.state.page}`)
            .then(res => {
                const Posts = res.data.data;
                const meta = res.data.meta;
                const Totalpages = meta.pagination.total_pages;
                const current_page = meta.pagination.current_page;
                this.setState({ Posts, Totalpages, current_page });


            }
            )

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
                    {/*
                    <p>{this.state.post_per_page}</p>
                    <p>{this.state.page}</p>
                    <p>{this.state.input_Categorie}</p>
                    */}
                </form>






                <Pagination
                    variant="outlined"

                    onChange={this.handlePageChange}
                    count={this.state.Totalpages}

                    siblingCount={0}
                    boundaryCount={10}
                    page={this.state.page}
                />






                <ul>
                    {this.state.Posts.map(Post => <li key={Post.id}>
                        <li>{Post.title}</li>
                        <li>{Post.short_content}</li>

                        <li><img src={Post.media[0].url} alt="post pic" /></li>
                    </li>)}

                </ul>

            </React.Fragment>
        )
    }
}

export default Posts;