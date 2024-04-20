import React from "react";
import './style.css'
import { useMusicPlayer } from "../../contexts/MusicPlayerContext/Context";

const Card = ({song}) => {

    const player = useMusicPlayer();
    const handleCardClick = () => {
        player.playerUrl = song.audio_url;
        player.setIsVisible("audio")
    }

    return <div className="card" onClick={handleCardClick}>
        <img className="img" src={song.thumbnail} width={'120px'} height={'120px'}/>
        <h3>{song.title}</h3>
        <p>{song.artist[0].name}</p>
    </div>
}


export default Card;