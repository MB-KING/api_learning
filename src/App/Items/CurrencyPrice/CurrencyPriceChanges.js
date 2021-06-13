// import react pkg for react project 
import React, { Component } from 'react';
//import axios pkg for api call
import axios from 'axios';

class CurrencyPriceChanges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Currencys: []

        }
    }
    ApiCall() {
        //call api from sana for give 5 price of currency
        axios.get(`https://api.accessban.com/v1/data/sana/json?limit=5`)
            .then(res => {
                const Currencys = res.data.sana.data;
                this.setState({ Currencys });
            }
            )

    }
    componentDidMount() {
        this.ApiCall()
        //use interval refreshing all 60 secend
        setInterval(() => {
            this.ApiCall()
        }, 60000);
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