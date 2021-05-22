import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";


import CoronaReport from './App/Items/CoronaReport/Corona.js'
import CoronaReport_Report from './App/Items/CoronaReport/Corona_Report.js'

import CurrencyPriceChanges from './App/Items/CurrencyPriceChanges/CurrencyPriceChanges.js'

import Meteorology from './App/Items/Meteorology/Meteorology.js'
import Meteorology_Report from './App/Items/Meteorology/Meteorology_Report.js'


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
              <Link to="Meteorology">Meteorology</Link>
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
            <Route path={"/Meteorology_Report"} component={Meteorology_Report} />
            <Route path={"/Posts"} component={Posts} />
            <Route path={"/CoronaReport_Report"} component={CoronaReport_Report} />
            <Route path={"/Meteorology_Report"} component={Meteorology_Report} />

          </Switch>



        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;