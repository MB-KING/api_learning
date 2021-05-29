import React, { Component } from 'react';

class Corona extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Country : ''
        }
    }
    HandelClick = () => {
        this.props.history.push('/Corona_Report')
    }
    HandelSubmit = (event) => {
        event.preventDefault()

    }
    HandelInputChange = (event) => {
        this.setState({
            Country : event.target.value
        })

    }

    render() {
        console.log(this.state.Country)
        return (
            <form onSubmit={this.HandelSubmit}>
                <input type="text" value={this.state.Country} onChange={this.HandelInputChange} />
                <button type='submit' onClick={this.HandelClick} >send</button>
                <p>{this.state.Country}</p>
            </form>

        );
    }
}

export  default Corona ;