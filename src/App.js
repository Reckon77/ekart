import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart'
import Login from './components/login'
import Register from './components/register'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/header'
function App() {
  return (
    <Router> 
      <Header/>
      <Routes>
        <Route path="/" element={<Cart/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={ <Register/>}/>
      </Routes>
   </Router>
   
  );
}

export default App;
