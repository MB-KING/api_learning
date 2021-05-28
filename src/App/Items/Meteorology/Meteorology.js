import React, { Component } from 'react';

class Meteorology extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    HandelClick = () => {
        this.props.history.push('/Meteorology_Report')
    }
    render() {
        return (
            <React.Fragment>
                <form >
                    <input type="text" />
                    <button onClick={this.HandelClick}>send</button>
                </form>
            </React.Fragment>
        );
    }
}

export default Meteorology;