import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import AutoIncrement from 'pages/AutoIncrement';

const App = () => (
  <Router>
    <div className="page">
      <Header/>
      <main className="page__wrapper">
        <div className="container page__main">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/auto-increment" component={AutoIncrement}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </main>
      <Footer/>
    </div>
  </Router>
);

export default App;
