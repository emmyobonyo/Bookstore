import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from '../homePage/Home';
import Categories from '../categories/Categories';

function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <h3>
              <Link to="/">Bookstore CMS</Link>
            </h3>
            <ul>
              <li>
                <Link to="/">BOOKS</Link>
              </li>
              <Link to="/categories">CATEGORIES</Link>
            </ul>
          </div>
          <div>
            <i className="fas fa-user-circle" />
          </div>
        </nav>
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;
