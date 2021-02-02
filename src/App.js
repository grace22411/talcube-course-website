import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Course from './pages/Course';
import {BrowserRouter as Router ,Switch , Route} from "react-router-dom"


function App() {
    return ( 
        <Router>
            <Switch>
                <Route path="/"  exact component={Home} />
                <Route path="/course"  component={Course} />
                <Route path="/pricing"   component={Pricing} />
                <Route path="/contact" component={Contact} />
            </Switch>
        
        </Router>
    );
}

export default App;