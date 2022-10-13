import React, { useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({accessToken, trackUri}) {

  const [play, setPlay] = React.useState(false)

  useEffect(() => setPlay(true), [trackUri])

    if (!accessToken) return null
  return (<SpotifyPlayer 
    token={accessToken}
    showSaveIcon
    callback={state =>{
    if (!state.isPlaying)setPlay(false)
    }}
    play={true}
    uris={trackUri ? [trackUri] : []}
  />
  
  )
}
