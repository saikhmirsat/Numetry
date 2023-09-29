import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Allroutes from './Routes/Allroutes';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
    </div>
  );
}

export default App;
