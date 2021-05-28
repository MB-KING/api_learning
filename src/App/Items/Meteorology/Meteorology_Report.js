import React, { Component } from 'react';
import axios from 'axios';

class Meteorology_Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Meteorologys_res: []

        }
    }

    componentDidMount() {
        axios.get(`https://api.codebazan.ir/weather`)
            .then(res => {
                console.log(res);
                const Meteorologys_res = res;
                this.setState({ Meteorologys_res });
                console.log()
            }
        )
    }
    render() {
        return (
            <ul>
                { this.state.Meteorologys_res.map(Meteorology => <li>{Meteorology.title}{Meteorology.p}</li>)}
            </ul>
        )
    }
}
 
export default Meteorology_Report;