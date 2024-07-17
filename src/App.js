
import './App.css';
import React from 'react';
import { BrowserRouter, Switch , Route  } from 'react-router-dom';
import CardList from "./CardList/CardList";
import CardDetailsPage from "./pages/CardDetailsPage/CardDetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={CardList} />
              <Route path="/cards/:id" component={CardDetailsPage} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
