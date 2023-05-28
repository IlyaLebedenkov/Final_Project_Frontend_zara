import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carts from './components/Carts';
import MainPage from './components/MainPage';
import About from './components/About';

function App() {
  return (
      <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/Carts" element={<Carts/>}/>
              <Route path="/ProductList" element={<ProductList/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
          </div>
      </Router>
  );
}


function NotFound() {
  const error = '404 pages not found';
  return (
    <div className="App">
      <h1 class="pt-5 pb-5" style={{fontSize:'100px',marginTop:'15%',fontWeight:'bold'}}>{error}</h1>
    </div>    
  );
}
export default App;
