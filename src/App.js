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
                <Route path="/"  exact component={Home} />
                <Route path="/course"  component={Courses} />
                <Route path="/pricing"   component={Pricing} />
                <Route path="/contact" component={Contact} />
            </Switch>
        
        </Router>
    );
}

export default App;