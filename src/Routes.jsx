import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Botanics from './Pages/Botanics';
import Dashboard from './Pages/Dashboard'
import Todo from './Pages/Todo';
import Weather from './Pages/Weather';

function Routes() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <Layout {...props}>
            <switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/Dashboard" exact component={Dashboard} />
              <Route path="/Todo" exact component={Todo} />
              <Route path="/Weather" exact component={Weather} />
              <Route path="/Botanics" exact component={Botanics} />
            </switch>
          </Layout>
        )}
      ></Route>
    </BrowserRouter>
  );
}

export default Routes