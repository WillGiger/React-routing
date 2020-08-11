import React from 'react';
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";
import Featured from "./Featured";

import {
  HashRouter,
    Route,
    Switch
} from "react-router-dom";
import NotFound from "./NotFound";

const App = () => (
    <HashRouter basename="/course-directory">
      <div className="container">
          <Header/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" render={()=><About title='About' />}/>
              <Route exact path="/teachers" component={Teachers}/>
              <Route path="/teachers/:topic/:name" component={Featured} />
              <Route path="/courses" component={Courses}/>
              <Route component={NotFound}/>
          </Switch>
      </div>
    </HashRouter>

);

export default App;