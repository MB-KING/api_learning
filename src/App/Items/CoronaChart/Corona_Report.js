import React, { Component } from 'react';
import axios from 'axios';

class Corona_Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Corona_res: []

        }

    }

    componentDidMount(probs) {
        axios.get(`https://api.covid19api.com/country/${this.props.location.state.keshvar}?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`)
            .then(res => {
                const Corona_res = res.data;
                this.setState({ Corona_res });
            }
            )
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.state.Corona_res.map(c => <li>{c.Deaths}</li>)}
                    <p>{this.props.c1}</p>
                </ul>
            </React.Fragment>
        )
    }
}

export default Corona_Report;