import React, { useContext } from "react";

const initialState = {
    isVisble : "nudge",
    playerVisible : true,
    playerUrl : "" ,
    wishlistedItem: [],
    setWishlistedItems : () => {},
    setIsVisible: () => {},
    user: {}
    
};

export const MusicContext = React.createContext(initialState);

export const useMusicPlayer = () => {
    return useContext(MusicContext);
}