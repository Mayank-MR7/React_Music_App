import React, { useEffect, useState } from "react";
import "./style.css";
import Nudge from "./SignupNudge";
import { useMusicPlayer } from "./Context";

const Player = ({ url, type }) => {
  const player = useMusicPlayer();
  const [wishlisted, setWishlisted] = useState(false);
  const handleWishlist = () =>{
    setWishlisted(!wishlisted)
    
  }

  useEffect(() => {
    if(wishlisted){
      const item = player.wishlistedItem.find(item => item.id);
    }else{

    }
  },[wishlisted])
  return (
    <div className="player">
      {type === "audio" && ( <div className="audio_player">
        <audio controls>
          <source src={player.playerUrl || ""} type="audio/mpeg"></source>
          Your browser does not supoort the audio element.
        </audio>
        <i className={"fa-heart fa-2xl " + (wishlisted ? "fa-solid" : "fa-regular")} style={wishlisted ? {color: "red"} : {}} onClick={handleWishlist}></i>
        </div>
      )}

      {type === "nudge" && <Nudge/> }


    </div>
  );
};

export default Player;
