// import react pkg for react project 

import React, { Component } from 'react';
//import axios pkg for api call

import axios from 'axios';

class Meteorology_Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Meteorologys_res: []

        }
    }
    //for fix the api call (cors err) set the proxy in the package,json file 

    componentDidMount() {
        //call api for give meteorology data 
        axios.get(`/weather/?city=${this.props.location.state.city_push}`)
            .then(res => {
                //console.log(res);
                const Meteorologys_res = res.data.result;
                this.setState({ Meteorologys_res });
            }
            )

    }
    render() {
        //console.log(this.state.Meteorologys_res)
        return (
            <React.Fragment>
                {/*show api data in the page  */}
                <ul>
                    <li>{this.state.Meteorologys_res.استان}</li>
                    <li>{this.state.Meteorologys_res.دما}</li>
                    <li>{this.props.location.state.city_push}</li>

                </ul>
            </React.Fragment>
        )
    }
}

export default Meteorology_Report;