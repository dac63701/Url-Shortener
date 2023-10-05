import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

import { hash } from './hash'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [data, setData] = useState();

  useEffect( () => {
    async function fetchData() {
      cookies.set("auth-token", "idktesting");
      console.log(hash(cookies.get("auth-token")));
      await fetch("/getLinks", {
        method: "GET",
        headers: new Headers({
          "Authorization": "Bearer " + hash(cookies.get("auth-token")),
          "Content-Type": "application/json"
        })
      })
        .then((res) => res.json())
        .then((data) => setData(data.links));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
