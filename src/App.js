import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RegistrationForm from './pages/RegistrationForm'
import Thanks from './pages/Thanks'
import './styles/App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={RegistrationForm} />
        <Route path='/thanks' component={Thanks} />
      </Switch>
    </Router>
  )
}

export default App
