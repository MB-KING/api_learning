// import react pkg for react project 
import React, { Component } from 'react';
//import axios pkg for api call
import axios from 'axios';
//import chart.js pkg (line chart) for paint chart after give data
import {Line} from 'react-chartjs-2';


class Corona_Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Corona_res: [],
            chartDate : ''
        }

    }

    componentDidMount() {
        const api_url = `https://api.covid19api.com/country/${this.props.location.state.Country_push}?from=${this.props.location.state.date_from_push}T00:00:00Z&to=${this.props.location.state.date_to_push}T00:00:00Z`
        const empDate = [];
        const empDeaths = [];
        //call corona api for give date and deaths 
        axios.get(api_url)
            .then(res => {
                const Corona_res = res.data;
                for (const dataObj of Corona_res ){
                    empDate.push(String(dataObj.Date))
                    empDeaths.push(parseInt(dataObj.Deaths))
                }
                //import date to the chartjs tag 
                const chartDate = {
                    labels: empDate,
                    datasets: [
                        {
                            label: 'Rainfall',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: empDeaths
                        }
                    ]
                }
                this.setState({ Corona_res ,chartDate});

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
                    data={this.state.chartDate}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
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