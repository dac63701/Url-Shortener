import { useState } from 'react'
import './App.css';

import { Auth } from './Components/Auth';
import { UrlList } from './Components/UrlList';
import { CreateShortLink } from './Components/CreateShortLink'; 

import Cookies from 'universal-cookie'
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
      <h1>There is something There</h1>
      <CreateShortLink />
      <UrlList />
    </div>
  );
}

export default App;
