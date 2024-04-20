import React, { useState } from "react";
import { MusicContext } from "./Context";
import Player from "./Player";

const Provider = ({ children }) => {
  const [element, setElement] = useState("nudge");
  const [user, setUser] = useState({});
  const [wishlistedItems, setWishlistedItems] = useState([]);

  return (
    <MusicContext.Provider
      value={{
        playerVisible: element,
        setIsVisible: setElement,
        playerUrl: "",
        user,
        setUser,
        wishlistedItems,
        setWishlistedItems
      }}
    >
      {children}
      {element && <Player type={element} />}
    </MusicContext.Provider>
  );
};

export default Provider;
