// import react pkg for react project 
import React, { Component } from 'react';
//import axios pkg for api call
import axios from 'axios';
//import material ul pkg (lab/pagination) for pagination posts 
import Pagination from '@material-ui/lab/Pagination';



class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Categories: [],
            Posts: [],
            TotalPages: '',
            CurrentPage: '',
            PostPerPage: '5',
            page: '1',
            input_Categorie: ''
        }
    }
    apicall (page){
        
        const ApiUrl = `http://digibazi-services.naringames.com:90/v1/posts?per_page=${this.state.PostPerPage}&page=${page}`
        console.log(ApiUrl)
        axios.get(ApiUrl)
            .then(res => {
                const Posts = res.data.data;
                const meta = res.data.meta;
                const TotalPages = meta.pagination.total_pages;
                const CurrentPage = meta.pagination.CurrentPage;
                this.setState({ Posts, TotalPages, CurrentPage });
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
        this.apicall ()

    }
    
    HandelSubmit = (event) => {
        event.preventDefault()
        this.apicall ()

    }
    //HandelClick = () => {
        //this.apicall ()
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
    //        input_Categorie: event.target.value,
    //    })
    //}


    //set the pagination value to the page in the state and call api 
    handlePageChange = (event) => {
        event.preventDefault()

        console.log("----------------------------")
        console.log('event :'+event.target.innerText,)
        console.log('page in event :'+this.state.page,)
        
        this.setState({
            page: event.target.innerText,
        });



        this.apicall (parseInt(event.target.innerText))
    }
    
    render() {
        console.log('page in event after set state :'+this.state.page,)


        console.log("total pages : "+this.state.TotalPages)
        console.log("page : "+this.state.page)
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
                    variant="outlined"
                    onChange={this.handlePageChange}
                    count={parseInt(this.state.TotalPages)}
                    page={parseInt(this.state.page)}
                    defaultPage={parseInt(this.state.page)} 
                    boundaryCount={2}
                />

                {/* show posts */}
                <ul>
                    {this.state.Posts.map(Post =>
                        <ul key={Post.id}>
                            <li key={Post.id}>{Post.title}</li>
                            <li key={Post.id}>{Post.short_content}</li>
                            <li key={Post.id}><img src={Post.media[0].url} alt="post pic" /></li>
                        </ul>
                    )}
                </ul>

            </React.Fragment>
        )
    }
}

export default Posts;