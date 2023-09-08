import './App.css';
import Login from "./Components/Login/Login"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Playground from './Components/Playground/Playground';

function App() {
  return (
    <BrowserRouter basename='/'>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path='/Playground' element ={<Playground/>} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
