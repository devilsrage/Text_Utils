import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState('light');
  const toggleMode = (cls) => {
    removeClasses();
    document.body.classList.add('blg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#03346E';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  };

  const removeClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />} />
            <Route exact path="/about" element={<About mode = {mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
