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
        axios.get(`/weather/?city=${this.props.location.state.city_push}`)
            .then(res => {
                //console.log(res);
                const Meteorologys_res = res.data.result;
                this.setState({ Meteorologys_res });
            }
            )

    }
    render(props) {
        //console.log(this.state.Meteorologys_res)
        return (
            <ul>
                <li>{this.state.Meteorologys_res.استان}</li>
                <li>{this.state.Meteorologys_res.دما}</li>
                <li>{this.props.location.state.city_push}</li>

            </ul>
        )
    }
}

export default Meteorology_Report;