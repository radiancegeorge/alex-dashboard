import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EnterPassword from './components/enter password/EnterPassword';
import PersonalDetail from './components/PersonalDetail';
import Education from './components/Education';
import Application from './components/Applications';
import Training from './components/Training';
import Expertise from './components/Expertise';
import Memberships from './components/Memberships';
import Hobbies from './components/Hobbies';
import Languages from './components/Languages';
import Reference from './components/Reference';
import Skills from './components/Skills';
import Manuscript from './components/Manuscripts';
import Experience from './components/Experience';
import Summary from './components/Summary';
import Contact from './components/Contact';


function App() {
  document.title = 'Alex Nwoko'
  const [navWidth, setNavWidth] = useState()

  document.body.style.overflowX = 'hidden';
  window.addEventListener('load', ()=>{
    const navElem = document.querySelector('header nav');
    const navWidth = navElem.clientWidth;
    setNavWidth (navWidth + 40)
  })
  
  return (
    <div className = 'main-wrap'>
      <Router>
        <Header />
        <Switch>
          <Route path = '/login'>
            <EnterPassword />
          </Route>
        </Switch>
        <Switch>
            <Route exact path ='/'>
              <PersonalDetail marginLeft = {navWidth}/>
            </Route>
            <Route path = '/education'>
              <Education marginLeft={navWidth}/>
            </Route>
            <Route path = '/applications'>
              <Application marginLeft={navWidth}/>
            </Route>
            <Route path = '/certification'>
              <Training marginLeft={navWidth}/>
            </Route>
            <Route path = '/expertise'>
              <Expertise marginLeft={navWidth}/>
            </Route>
            <Route path = '/memberships'>
              <Memberships marginLeft={navWidth}/>
            </Route>
            <Route path = '/hobbies'>
              <Hobbies marginLeft={navWidth}/>
            </Route>
            <Route path = '/languages'>
              <Languages marginLeft={navWidth}/>
            </Route>
            <Route path = '/reference'>
              <Reference marginLeft={navWidth}/>
            </Route>
            <Route path = '/skills'>
              <Skills marginLeft={navWidth}/>
            </Route>
            <Route path = '/manuscripts'>
              <Manuscript marginLeft={navWidth}/>
            </Route>
            <Route path = '/experience'>
              <Experience marginLeft={navWidth}/>
            </Route>
            <Route path = '/summary'>
              <Summary marginLeft={navWidth}/>
            </Route>
            <Route path = '/contact'>
              <Contact marginLeft={navWidth}/>
            </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
