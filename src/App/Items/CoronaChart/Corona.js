// import react pkg for react project 
import React, { Component } from 'react';

class Corona extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Country: 'iran',
            date_from: '2020-05-01',
            date_to: '2020-05-30'
        }
    }
    //push data and user to the corona report page 
    HandelClick = () => {
        this.props.history.push({
            pathname: '/Corona_Report',
            state: {
                Country_push: this.state.Country,
                date_from_push: this.state.date_from,
                date_to_push: this.state.date_to
            }
        })
    }
    // set prevent to defullt for not refreshing page in submit 
    HandelSubmit = (event) => {
        event.preventDefault()

    }
    // put countery name to state 
    HandelInputChange = (event) => {
        this.setState({
            Country: event.target.value,

        })

    }
    //put data from in the state

    HandelInputChange1 = (event) => {
        this.setState({
            date_from: event.target.value,

        })

    }
    //put data to in the state
    HandelInputChange2 = (event) => {
        this.setState({
            date_to: event.target.value

        })

    }

    render() {
        return (
            <React.Fragment>
                {/* give data in form from user and submited*/}
                <form onSubmit={this.HandelSubmit}>
                    <li>
                        <label htmlFor="">name:</label>
                        <input type="text" value={this.state.Country} onChange={this.HandelInputChange} />
                    </li>
                    <li>
                        <label htmlFor="">date from :</label>

                        <input type="text" value={this.state.date_from} onChange={this.HandelInputChange1} />
                    </li>
                    <li>
                        <label htmlFor="">date to :</label>

                        <input type="text" value={this.state.date_to} onChange={this.HandelInputChange2} />
                    </li>
                    <li>

                        <button type='submit' onClick={this.HandelClick} >send</button>
                    </li>
                    <p>{this.state.Country}</p>
                </form>
            </React.Fragment>
        );
    }
}
export default Corona;