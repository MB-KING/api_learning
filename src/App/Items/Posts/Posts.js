// import react pkg for react project 
import React, { Component } from 'react';
//import axios pkg for api call
import axios from 'axios';
//import material ul pkg (lab/pagination) for pagination posts 
import Pagination from '@material-ui/lab/Pagination';
//import alertify for error 
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Categories: [],
            Posts: [],
            TotalPages: '',
            PostPerPage: '5',
            Page: '1',
            //InputCategorie: ''
        }
    }
    PostApiCall(Page) {

        const ApiUrl = `http://digibazi-services.naringames.com:90/v1/posts?per_page=${this.state.PostPerPage}&page=${Page}`
        axios.get(ApiUrl)
            .then(res => {
                //console.log(res)
                const Posts = res.data.data;
                const meta = res.data.meta;
                const TotalPages = meta.pagination.total_pages;
                this.setState({ Posts, TotalPages });
            })
            .catch(err => {
                const error = err.response;
                console.log(error.data)
                //console.log(error.data.error.per_page)

                if (error.data.code === 422){
                    alertify.alert('Error' , "error : " + error.data.error.per_page);
                }
                else if(error.data.message === "Server Error"){
                    alertify.alert('Error' , "error : " + error.data.message);
                }
                else{
                    alertify.alert('Error' , "error : " + err.message);
                }

            }
        )

    }
    componentDidMount() {

        //axios.get(`http://digibazi-services.naringames.com:90/v1/categories?per_page=500`)
        //    .then(res => {
        //        const Categories = res.data.data;
        //        this.setState({ Categories });
        //    }
        //);


        //call post api for give posts as digibazi api 
        this.PostApiCall()

    }

    HandelSubmit = (event) => {
        event.preventDefault()
        this.PostApiCall()

    }
    //HandelClick = () => {
    //this.PostApiCall ()
    //}


    //set user input to the PostPerPage in the state
    HandelInputChange = (event) => {
        this.setState({
            PostPerPage: event.target.value,
        })
    }


    //HandelInputChange1 = (event) => {
    //    this.setState({
    //        page: event.target.value,
    //    })
    //}
    //HandelInputChange2 = (event) => {
    //    this.setState({
    //        InputCategorie: event.target.value,
    //    })
    //}


    //set the pagination value to the page in the state and call api 
    handlePageChange = (event) => {
        this.setState({
            Page: event.target.innerText,
        });
        this.PostApiCall(parseInt(event.target.innerText))
    }

    render() {
        return (
            <React.Fragment>
                {/* give input form user  */}
                <form onSubmit={this.HandelSubmit}  >
                    <li>
                        <label htmlFor="">post per page :</label>
                        <input type="text" value={this.state.PostPerPage} onChange={this.HandelInputChange} />
                    </li>
                    {/*
                    <li>
                        <label htmlFor="">page :</label>
                        <input type="text" value={this.state.page} onChange={this.HandelInputChange1} />
                    </li>
                    <li>
                        <select onChange={this.HandelInputChange2}>
                            {this.state.Categories.map(Categorie => <option value={Categorie.name}>{Categorie.name}</option>)}
                        </select>
                    </li>
                */}
                    <li>
                        <button type='submit' onClick={this.HandelClick} >send</button>
                    </li>
                </form>

                {/* pagination by material ui pkg  */}
                <Pagination
                    value={parseInt(this.state.Page)}
                    variant="outlined"
                    onChange={this.handlePageChange}
                    count={parseInt(this.state.TotalPages)}
                    Page={parseInt(this.state.Page)}
                    defaultPage={parseInt(this.state.Page)}
                    boundaryCount={5}
                />

                {/* show posts */}
                <ul>
                    {this.state.Posts.map(Post =>
                        <li key={Post.id}>
                            <p>{Post.title}</p>
                            <p>{Post.short_content}</p>
                            <p><img src={Post.media[0].url} alt="post pic" /></p>
                        </li>
                    )}
                </ul>

            </React.Fragment>
        )
    }
}

export default Posts;