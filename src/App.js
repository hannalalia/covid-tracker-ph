import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Cases from './components/Cases/Cases';
import Facilities from './components/Facilities/Facilities';
import FacilitiesDetails from './components/Facilities/FacilitiesDetails';
function App() {
  return (
    <div className="App"> 
      <Router>
      <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/"> 
            <Dashboard/>
          </Route>
          {/* <Route exact path="/cases">  
            <Cases></Cases>     
          </Route> */}
          <Route exact path="/facilities">  
            <Facilities></Facilities>     
          </Route>
          <Route exact path="/facilities/:hfhudcode">  
            <FacilitiesDetails></FacilitiesDetails>     
          </Route>
        </Switch>
      <Footer></Footer>
      </Router>
    
    </div>
  );
}

export default App;
