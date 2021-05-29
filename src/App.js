import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";


import Corona from './App/Items/CoronaChart/Corona.js'
import Corona_Report from './App/Items/CoronaChart/Corona_Report.js'

import CurrencyPriceChanges from './App/Items/CurrencyPrice/CurrencyPriceChanges.js'

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
              <Link to="Corona">CoronaReport</Link>
            </li>
            <li>
              <Link to="Posts">Posts</Link>
            </li>
          </ul>


          <Switch>
            <Route exact path={"/"} />
            <Route path={"/Corona"} component={Corona} />
            <Route path={"/CurrencyPriceChanges"} component={CurrencyPriceChanges} />
            <Route path={"/Meteorology"} component={Meteorology} />
            <Route path={"/Meteorology_Report"} component={Meteorology_Report} />
            <Route path={"/Posts"} component={Posts} />
            <Route path={"/Corona_Report"} component={Corona_Report} />
            <Route path={"/Meteorology_Report"} component={Meteorology_Report} />

          </Switch>



        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;