// import react pkg for react project 
import React, { Component } from 'react';
//import axios pkg for api call
import axios from 'axios';
//import chart.js pkg (line chart) for paint chart after give data
import {Line} from 'react-chartjs-2';
//import alertify for error 
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';


class Corona_Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CoronaResponse: [],
            ChartDate : ''
        }

    }

    componentDidMount() {
        const api_url = `https://api.covid19api.com/country/${this.props.location.state.Country_push}?from=${this.props.location.state.date_from_push}T00:00:00Z&to=${this.props.location.state.date_to_push}T00:00:00Z`
        const empDate = [];
        const empDeaths = [];
        //call corona api for give date and deaths 
        axios.get(api_url)
            .then(res => {
                const CoronaResponse = res.data;
                for (const dataObj of CoronaResponse ){
                    empDate.push(String(dataObj.Date))
                    empDeaths.push(parseInt(dataObj.Deaths))
                }
                //import date to the chartjs tag 
                const ChartDate = {
                    labels: empDate,
                    datasets: [
                        {
                            label: 'Rainfall',
                            fill: true,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: empDeaths
                        }
                    ]
                }
                this.setState({ CoronaResponse ,ChartDate});

            })
            .catch(err => {
                const error = err.response;
                //console.log(error.status)
                if(error.status === 404 ){

                    alertify.alert('Error',  "error : "+ error.data.message +" "+ error.status);
                }
                else{
                    alertify.alert('Error',  "error : "+ err.message);
                }
            }

        )
        //console.log(api_url)
    }
    render() {
        //console.log(this.props.location.state.Country_push);
        //console.log(this.props.location.state.date_from_push);
        //console.log(this.props.location.state.date_to_push);
        return (
            <React.Fragment>
                {/* paint chart  */}
                <Line
                    data={this.state.ChartDate}
                    options={{
                        title: {
                            display: true,
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </React.Fragment>
        )
    }
}

export default Corona_Report;