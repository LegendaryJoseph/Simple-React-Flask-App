import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("/greetings")
    .then(res => res.text())
    .then(data => {
        setMessage(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {message ? message : "Loading..."}
        </p>
      </header>
    </div>
  );
}

export default App;
