import React, { Component } from 'react';
import axios from 'axios';

class Corona_Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Corona_res: []

        }
    }

    componentDidMount() {
        axios.get(`https://api.covid19api.com/country/Iran?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`)
            .then(res => {
                const Corona_res = res.data;
                this.setState({ Corona_res });
            }
        )
    }
    render() {
        return (
            <ul>
                { this.state.Corona_res.map(c => <li>{c.Deaths}</li>)}
                <p>{this.props.Country}</p>
            </ul>
        )
    }
}

export default Corona_Report;