import React from 'react';
import './App.css';
import Accueil from './pages/Accueil';
import Etudiants from './pages/Etudiants';
import Employeurs from './pages/Employeurs';
import FAQ from './pages/FAQ';
import Stage from './pages/Stage';

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
            <Route exact path="/" >
              <Accueil />
            </Route>
          <Route path="/etudiants" component={Etudiants} />
          <Route path="/employeurs" component={Employeurs} />
          <Route path="/faq" component={FAQ} />
          <Route path="/stage" component={Stage} />

          </Switch>

          
          
        </main>
        

      </Router>

    </div>
    
  );
}

export default App;
