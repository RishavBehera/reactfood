
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from './components/About';
import Chef from './components/Chef';
import Testimonials from './components/Testimonials';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
    

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/about" component={About}/>
        <Route path='/Menu' component={Menu}/>
        <Route path="/Chef" component={Chef}/>
        <Route path="/Testimonials" component={Testimonials}/>
      </Switch>

      
    </div>
  );
}

export default App;
