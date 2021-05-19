import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";


import CoronaReport from './App/Items/CoronaReport/CoronaReport.js'
import CurrencyPriceChanges from './App/Items/CurrencyPriceChanges/CurrencyPriceChanges.js'
import Meteorology from './App/Items/Meteorology/Meteorology.js'
import Posts from './App/Items/Posts/Posts.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="CoronaReport">CoronaReport</Link>
            </li>
            <li>
              <Link to="CurrencyPriceChanges">CurrencyPriceChanges</Link>
            </li>
            <li>
              <Link to="CoronaReport">CoronaReport</Link>
            </li>
            <li>
              <Link to="Posts">Posts</Link>
            </li>
          </ul>


          <Switch>
            <Route exact path={"/"} />
            <Route path={"/CoronaReport"} component={CoronaReport} />
            <Route path={"/CurrencyPriceChanges"} component={CurrencyPriceChanges} />
            <Route path={"/Meteorology"} component={Meteorology} />
            <Route path={"/Posts"} component={Posts} />
          </Switch>



        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;