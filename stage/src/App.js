import React from 'react';
import './App.css';
import Accueil from './pages/Accueil';
import Etudiants from './pages/Etudiants';
import Employeurs from './pages/Employeurs';
import FAQ from './pages/FAQ';
import Stage from './pages/Stage';
import Footer from './components/footer';
import './components/Footer.css';

import MainNav from './components/navigation/MainNav';
import { BrowserRouter as Router, Route, Switch} from
"react-router-dom"

function App() {
  return (
    
    <div className='App'>
      <Router>
        
        <MainNav />
        <main>
          <Switch>
            <Route exact path="/accueil" >
              <Accueil />
            </Route>
            <Route path="/etudiants"> 
              <Etudiants /> 
            </Route>
            <Route path="/employeurs"> 
              <Employeurs /> 
            </Route>
            <Route path="/faq"> 
              <FAQ /> 
            </Route>
            <Route path="/stage"> 
              <Stage /> 
            </Route>

          </Switch>

          
          
        </main>
        
          <Footer/>
        
        
      </Router>
      
    </div>
    
    
  );
}

export default App;
