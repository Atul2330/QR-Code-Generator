import './App.css';
import Input from './Components/Input/Input';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from './Components/Result/Result';


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img src="./qr.png" alt='QR' className='App-logo'/>
      </header>
      <div className="App-components">
          <Router>
            <Routes>
              <Route path="/" element={<Input/>}/>
              <Route path="/result" element={<Result/>}/>
            </Routes>
          </Router>
      </div>      
    </div>
  );
}

export default App;
