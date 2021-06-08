// import react pkg for react project 
import React, { Component } from 'react';

class Meteorology extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Citys: ''
        }
    }
    //push data and user to the meteorology report page 

    HandelClick = () => {
        this.props.history.push({
            pathname: '/Meteorology_Report',
            state: { CityInput: this.state.Citys }
        })
    }
    // set prevent to defullt for not refreshing page in submit 

    HandelSubmit = (event) => {
        event.preventDefault()

    }
    // put countery name to state 

    HandelInputChange = (event) => {
        this.setState({
            Citys: event.target.value
        })

    }

    render() {
        return (
            <React.Fragment>
                {/* form from give input as user  */}
                <form onSubmit={this.HandelSubmit}>
                    <input type="text" value={this.state.Citys} onChange={this.HandelInputChange} />
                    <button type='submit' onClick={this.HandelClick} >send</button>
                    <p>{this.state.Citys}</p>
                </form>

            </React.Fragment>
        );
    }
}

export default Meteorology;