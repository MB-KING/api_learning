import React, { Component } from 'react';
import axios from 'axios';

class CurrencyPriceChanges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Currencys: []

        }
    }

    componentDidMount() {
        axios.get(`https://api.accessban.com/v1/data/sana/json?limit=5`)
        .then(res => {
            const Currencys = res.data.sana.data;
            this.setState({ Currencys });
        }
        )
        setInterval(() => {
            axios.get()
        }, 60000);
    }
    render() {
        return (
            <ul>
                { this.state.Currencys.map(Currency => <li key={Currency.title}> نام ارز  :{Currency.title} قیمت :{Currency.p}</li>)}
            </ul>
        )
    }
}
export default CurrencyPriceChanges;