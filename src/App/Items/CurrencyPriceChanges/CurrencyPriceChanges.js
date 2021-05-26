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
        axios.get(`https://api.accessban.com/v1/data/sana/json`)
            .then(res => {
                const Currencys = res.data.sana.data;
                this.setState({ Currencys });
            }
        )
    }
    render() {
        setInterval(() => {
            console.log("hi")
        }, 60000);
        return (
            <ul>
                { this.state.Currencys.map(Currency => <li>{Currency.title}{Currency.p}</li>)}
            </ul>
        )
    }
}
export default CurrencyPriceChanges;