import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import './scss/styles.css';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <Router>
        <div>
          <NavLinks />

          <div className="views">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/admin" component={Admin} />
              <Route path="login" component={Login} />
              <Route render={() => <h1>404 Error</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

function NavLinks () {
  return (
    <div className="links">
      <NavLink exact to="/" className="link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" className="link">
        About
      </NavLink>
      <NavLink to="/contact" className="link">
        Contact Us
      </NavLink>
      <NavLink to="/admin" className="link">
        Admin
      </NavLink>
    </div>
  )
}

const Home = () => <h1>Home Component</h1>
const About = () => <h1>About Component</h1>

const Contact = props => (
  <div>
    <h1>Contact Component</h1>

    <div className="links">
      <NavLink to={`${props.match.url}/india`} className="link">
        India Office
      </NavLink>
      <NavLink to={`${props.match.url}/us`} className="link">
        Us Office
      </NavLink>
    </div>
    <Switch>
      <Route
        exact
        path={props.match.url}
        render={() => <h4>Please select an office.</h4>}
      />
      <Route
        path={`${props.match.url}/:location(india|us)`}
        component={ContactInfo}
      />
      <Route render={() => <h2>No office found.</h2>} />
    </Switch>
  </div>
)

const ContactIndia = () => <h1>Contact India</h1>
const ContactUs = () => <h1>Contact Us</h1>
const ContactInfo = props => (
  <h1>Welcome to {props.match.params.location} office.</h1>
)

const Admin = () => <h1>Admin Component</h1>
const Login = () => <h1>Login Component</h1>

ReactDOM.render(<App />, document.getElementById('app'))
