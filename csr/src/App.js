import React from 'react';
import './App.scss';
import Talks from './pages/talks';
import Talk from './pages/talk';
import Speaker from './pages/speaker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react';
import { Footer } from './components';

function App() {
  return (
    <Router>
      <Menu className="fixed">
        <Container className="App">
          <Menu.Item name="header" active={false}>
            Client Side Rendering
          </Menu.Item>
        </Container>
      </Menu>
      <Container className="App">
        <Switch>
          <Route path="/speaker/:id">
            <Speaker />
          </Route>
          <Route path="/talk/:id">
            <Talk />
          </Route>
          <Route path="/">
            <Talks></Talks>
          </Route>
        </Switch>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
