import React, {Component} from 'react';
import Itemlist from './components/Itemlist';
import Home from './components/Home';
import Nav from './components/Nav';
import One from './components/productdetails/one';
import Tuneone from './tunningcomponents/one';
import Two from './components/productdetails/two';
import Tunetwo from './tunningcomponents/two';
import Three from './components/productdetails/three';
import Tunethree from './tunningcomponents/three';
import Four from './components/productdetails/four';
import Tunefour from './tunningcomponents/four';
import Five from './components/productdetails/five';
import Six from './components/productdetails/six';
import Seven from './components/productdetails/seven';
import Eight from './components/productdetails/eight';
import Nine from './components/productdetails/nine';
import Ten from './components/productdetails/ten';
import Eleven from './components/productdetails/eleven';
import Twelve from './components/productdetails/twelve';
import Thirteen from './components/productdetails/thirteen';
import Fourteen from './components/productdetails/fourteen';
import Fifteen from './components/productdetails/fifteen';
import Sixteen from './components/productdetails/sixteen';
import Seventeen from './components/productdetails/seventeen';
import Nineteen from './components/productdetails/nineteen';
import Eighteen from './components/productdetails/eighteen';
import Twenty from './components/productdetails/twenty';
import Tunefive from './tunningcomponents/five';
import Tunesix from './tunningcomponents/six';
import Tuneseven from './tunningcomponents/seven';
import Tuneeight from './tunningcomponents/eight';
import Tunenine from './tunningcomponents/nine';
import Tuneten from './tunningcomponents/ten';
import Tuneeleven from './tunningcomponents/leven';
import Tunetwelve from './tunningcomponents/twelve';
import Tunethirteen from './tunningcomponents/thirteen';
import Tunefourteen from './tunningcomponents/fourteen';
import Tunefifteen from './tunningcomponents/fifteen';
import Tunesixteen from './tunningcomponents/sixteen';
import Tuneseventeen from './tunningcomponents/seventeen';
import Tuneeighteen from './tunningcomponents/eighteen';
import Tunenineteen from './tunningcomponents/nineteen';
import Tunetwenty from './tunningcomponents/twenty';

import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Nav/>
            <Route path='/itemlist' component={Itemlist}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/one' component={One}/>
            <Route exact path='/tunningcomponents/one' component={Tuneone}/>
            <Route exact path='/two' component={Two}/>
            <Route exact path='/tunningcomponents/two' component={Tunetwo}/>
            <Route exact path='/three' component={Three}/>
            <Route exact path='/tunningcomponents/three' component={Tunethree}/>
            <Route exact path='/four' component={Four}/>
            <Route exact path='/tunningcomponents/four' component={Tunefour}/>
            <Route exact path='/five' component={Five}/>
            <Route exact path='/six' component={Six}/>
            <Route exact path='/seven' component={Seven}/>
            <Route exact path='/eight' component={Eight}/>
            <Route exact path='/nine' component={Nine}/>
            <Route exact path='/leven' component={Eleven}/>
            <Route exact path='/twelve' component={Twelve}/>
            <Route exact path='/thirteen' component={Thirteen}/>
            <Route exact path='/fourteen' component={Fourteen}/>
            <Route exact path='/fifteen' component={Fifteen}/>
            <Route exact path='/sixteen' component={Sixteen}/>
            <Route exact path='/seventeen' component={Seventeen}/>
            <Route exact path='/eighteen' component={Eighteen}/>
            <Route exact path='/ninteen' component={Nineteen}/>
            <Route exact path='/twenty' component={Twenty}/>
            <Route exact path='/tunningcomponents/five' component={Tunefive}/>
            <Route exact path='/tunningcomponents/six' component={Tunesix}/>
            <Route exact path='/tunningcomponents/seven' component={Tuneseven}/>
            <Route exact path='/tunningcomponents/eight' component={Tuneeight}/>
            <Route exact path='/tunningcomponents/nine' component={Tunenine}/>
            <Route exact path='/tunningcomponents/ten' component={Tuneten}/>
            <Route exact path='/tunningcomponents/leven' component={Tuneeleven}/>
            <Route exact path='/tunningcomponents/twelve' component={Tunetwelve}/>
            <Route exact path='/tunningcomponents/thirteen' component={Tunethirteen}/>
            <Route exact path='/tunningcomponents/fourteen' component={Tunefourteen}/>
            <Route exact path='/tunningcomponents/fifteen' component={Tunefifteen}/>
            <Route exact path='/tunningcomponents/sixteen' component={Tunesixteen}/>
            <Route exact path='/tunningcomponents/seventeen' component={Tuneseventeen}/>
            <Route exact path='/tunningcomponents/eighteen' component={Tuneeighteen}/>
            <Route exact path='/tunningcomponents/nineteen' component={Tunenineteen}/>
            <Route exact path='/tunningcomponents/twenty' component={Tunetwenty}/>

          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}
export default App
