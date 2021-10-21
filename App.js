import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login';
import {getTokenfromUrl} from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import player from "./player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
 

  useEffect(() => {
    const hash = getTokenfromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){
      setToken(_token)

      

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
       console.log("HI", user);

      
       
      })
    }

    console.log("I Have A TOKEN =>", token);

  },  []);

  return (
    <div className="app">{token ? 
          <player/>
          : <Login/>
        
       
      }
   
    </div>
  );
}

export default App;
