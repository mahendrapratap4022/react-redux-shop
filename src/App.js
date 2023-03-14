import Header from './container/Header';
import ProductListing from './container/ProductListing';
import ProductDetail from './container/ProductDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './container/Form';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <br />
        <br />
        <br />
        <Switch>
          <Route exact path='/' component={ProductListing} />
          <Route path='/product/:id' component={ProductDetail} />
          <Route path="/form" element={<Form/>}/>
          <Route>404 Not Fount!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
