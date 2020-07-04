import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css"
import Nav from "./components/Nav"
import Home from "./pages/Home"

import G from "./pages/Government"
import GA from "./pages/Government-A"
import GB from "./pages/Government-B"
import GC from "./pages/Government-C"

import H from "./pages/History"
import HA from "./pages/History-A"
import HB from "./pages/History-B"
import HC from "./pages/History-C"

import C from "./pages/Civics"
import CA from "./pages/Civics-A"
import CB from "./pages/Civics-B"
import CC from "./pages/Civics-C"

import F from "./pages/Full"



document.addEventListener("touchstart", function(){}, true)
function App() {
  return (
    <div className="App">
      
      <Router>
      <Nav/>
        <div className="container">
          <Switch>
            <Route exact path="/government/A/quiz" component={GA}/>
            <Route exact path="/government/B/quiz" component={GB}/>
            <Route exact path="/government/C/quiz" component={GC}/>
            <Route exact path="/government/quiz" component={G}/>
            <Route exact path="/history/A/quiz" component={HA}/>
            <Route exact path="/history/B/quiz" component={HB}/>
            <Route exact path="/history/C/quiz" component={HC}/>
            <Route exact path="/history/quiz" component={H}/>
            <Route exact path="/civics/A/quiz" component={CA}/>
            <Route exact path="/civics/B/quiz" component={CB}/>
            <Route exact path="/civics/C/quiz" component={CC}/>
            <Route exact path="/civics/quiz" component={C}/>
            <Route exact path="/quiz" component={F}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
