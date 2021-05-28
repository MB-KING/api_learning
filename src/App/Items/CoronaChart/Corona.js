import React, { Component } from 'react';

class Corona extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    HandelClick = () => {
        this.props.history.push('/Corona_Report')
    }
    render() {
        return (
            <form >
                <input type="text" />
                <button onClick={this.HandelClick}>send</button>
            </form>

        );
    }
}

export default Corona;