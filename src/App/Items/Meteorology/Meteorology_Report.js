// import react pkg for react project 

import React, { Component } from 'react';
//import axios pkg for api call

import axios from 'axios';

//import alertify for error 
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

class Meteorology_Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MeteorologysResponse: []

        }
    }
    //for fix the api call (cors err) set the proxy in the package,json file 

    componentDidMount() {
        //call api for give meteorology data 
        axios.get(`/weather/?city=${this.props.location.state.CityInput}`)
            .then(res => {
                //console.log(res);
                const MeteorologysResponse = res.data.result;
                this.setState({ MeteorologysResponse });
            })
            .catch(err => {
                alertify.alert('Error', "error text : " + err);
            }

        )

    }
    render() {
        //console.log(this.state.MeteorologysResponse)
        return (
            <React.Fragment>
                {/*show api data in the page  */}
                <ul>
                    <li>city name : {this.props.location.state.CityInput}</li>
                    <li>State name : {this.state.MeteorologysResponse.استان}</li>
                    <li>Temperature : {this.state.MeteorologysResponse.دما}</li>

                </ul>
            </React.Fragment>
        )
    }
}

export default Meteorology_Report;