// import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Title from './Title/Title';
import POPOSList from './POPOSList/POPOSList';
import About from './About/About'
import POPOSDetails from './POPOSDetails/POPOSDetails'
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList}/>
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={POPOSDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
