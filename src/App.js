import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Courses from './pages/Courses';
import 'antd/dist/antd.css';
import {BrowserRouter as Router ,Switch , Route} from "react-router-dom"


function App() {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/"  exact component={Home} />
                <Route exact path="/course"  component={Courses} />
                <Route exact path="/pricing"   component={Pricing} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        
        </Router>
    );
}

export default App;