// import react pkg for react project 
import React, { Component } from 'react';

class Corona extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Country: 'iran',
            DateFrom: '2020-05-01',
            DateTo: '2020-05-30'
        }
    }
    //push data and user to the corona report page 
    HandelClick = () => {
        this.props.history.push({
            pathname: '/Corona_Report',
            state: {
                Country_push: this.state.Country,
                date_from_push: this.state.DateFrom,
                date_to_push: this.state.DateTo
            }
        })
    }
    // set prevent to defullt for not refreshing page in submit 
    HandelSubmit = (event) => {
        event.preventDefault()

    }
    // put countery name to state 
    HandelCountryInputChange = (event) => {
        this.setState({
            Country: event.target.value,

        })

    }
    //put data from in the state

    HandelDateFromInputChange = (event) => {
        this.setState({
            DateFrom: event.target.value,

        })

    }
    //put data to in the state
    HandelDateToInputChange = (event) => {
        this.setState({
            DateTo: event.target.value

        })

    }

    render() {
        return (
            <React.Fragment>
                {/* give data in form from user and submited*/}
                <form onSubmit={this.HandelSubmit}>
                    <li>
                        <label htmlFor="">name:</label>
                        <input type="text" value={this.state.Country} onChange={this.HandelCountryInputChange} />
                    </li>
                    <li>
                        <label htmlFor="">date from :</label>

                        <input type="text" value={this.state.DateFrom} onChange={this.HandelDateFromInputChange} />
                    </li>
                    <li>
                        <label htmlFor="">date to :</label>

                        <input type="text" value={this.state.DateTo} onChange={this.HandelDateToInputChange} />
                    </li>
                    <li>

                        <button type='submit' onClick={this.HandelClick} >send</button>
                    </li>
                </form>
            </React.Fragment>
        );
    }
}
export default Corona;