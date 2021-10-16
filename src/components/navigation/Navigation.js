import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import BookList from '../bookList/BookList';
import Categories from '../categories/Categories';
import './Navigation.css';

function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-links">
            <h1 className="logo">
              <Link to="/">Bookstore CMS</Link>
            </h1>
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
            <BookList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;
