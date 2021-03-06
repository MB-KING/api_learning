// import react pkg for react project 
import React, { Component } from 'react';
//import axios pkg for api call
import axios from 'axios';
//import alertify for error 
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

class CurrencyPriceChanges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Currencys: []

        }
    }
    IntervalApi = 0;

    ApiCall() {
        //call api from sana for give 5 price of currency
        axios.get(`https://api.accessban.com/v1/data/sana/json?limit=5`)
            .then(res => {
                const Currencys = res.data.sana.data;
                this.setState({ Currencys });
            })
            .catch(err => {
                alertify.alert('Error', "error text : " + err);
            }

        )

    }
    componentDidMount() {
        this.ApiCall()
        //use interval refreshing all 60 secend
    }
    IntervalApi = setInterval(() => {
        this.ApiCall()
    }, 60000);

    componentWillUnmount() {
        clearInterval(this.IntervalApi)
    }
    render() {

        return (
            <React.Fragment>

                {/*show currency price changes */}
                <ul>
                    {this.state.Currencys.map(Currency => <li key={Currency.title}> نام ارز  :{Currency.title} قیمت :{Currency.p}</li>)}
                </ul>
            </React.Fragment>
        )
    }
}
export default CurrencyPriceChanges;