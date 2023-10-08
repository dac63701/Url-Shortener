import { useState } from 'react'
import './App.css';

import { Auth } from './Components/Auth';

import Cookies from 'universal-cookie'
import { UrlList } from './Components/UrlList';
const cookies = new Cookies()

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

  if (!isAuth) {
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }

  return (
    <div className="App">
      <UrlList />
    </div>
  );
}

export default App;
