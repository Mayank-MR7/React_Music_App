import React, { useEffect, useState } from "react";
import { useMusicPlayer } from "../../contexts/MusicPlayerContext/Context";
import axios from "axios";
import Card from "../../components/Card/Card";
import './style.css'

const Home = () => {
  const { setIsVisible } = useMusicPlayer();
  const [data , setData] = useState([]);

  useEffect(() => {
    async function callApi() {
      let headersList = {
        projectId: "I2uaz7omaxbe",
      };

      let reqOptions = {
        url: "https://academics.newtonschool.co/api/v1/music/song",
        method: "GET",
        headers: headersList,
      };

      let response = await axios.request(reqOptions);
      setData(response.data.data);
    }
    callApi();
  }, []);

  return (
    <div className="list">
      {data.map(song => {
        return <Card song={song}/>
      })}
    </div>
  );
};

export default Home;
