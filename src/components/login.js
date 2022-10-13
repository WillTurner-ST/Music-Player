import React from "react";
import {Container} from 'react-bootstrap'; 
import "../App.css"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=4a1fb6bb6ddb4fe98e9b3de4774a29dc&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing";


  export default function login() {
  return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
                Login With Spotify
            </a>
         </Container>
    );
}
