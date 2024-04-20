import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useMusicPlayer } from "./Context";

const Nudge = ({ url }) => {

    const nudge = useMusicPlayer();
    const navigate = useNavigate();
    const handleClick=()=>{
      navigate("/SignUp");
      nudge.setIsVisible("");
    }

  return (
    <div className="nudge">
      <img
        src="https://newton-project-resume-backend.s3.amazonaws.com/thumbnail/64cf907d47ae38c3e33a189a.jpg"
        alt="thumbnail"
        width="40px"
        height="40px"
      ></img>
      <p>Sign Up Here !!!</p>
      <button className="signup" onClick={handleClick}>Sign Up</button>
    </div> 
  );
};

export default Nudge;
