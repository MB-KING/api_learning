import React, { Component } from 'react';

class Meteorology extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Country: ''
        }
    }
    HandelClick = () => {
        this.props.history.push({
            pathname: '/Meteorology_Report',
            state: { city_push: this.state.Country }
        })
    }
    HandelSubmit = (event) => {
        event.preventDefault()

    }
    HandelInputChange = (event) => {
        this.setState({
            Country: event.target.value
        })

    }

    render() {
        return (
            <form onSubmit={this.HandelSubmit}>
                <input type="text" value={this.state.Country} onChange={this.HandelInputChange} />
                <button type='submit' onClick={this.HandelClick} >send</button>
                <p>{this.state.Country}</p>
            </form>

        );
    }
}

export default Meteorology;