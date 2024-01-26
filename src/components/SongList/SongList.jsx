import React, { useContext } from "react";
import SongRow from "./SongRow/SongRow";
import { SongContext } from "../../App";

function SongList ()  {
    const { songs } = useContext(SongContext);
    return (
       <div>
        {
            songs.map((song) => {
                return ( 
                    <SongRow key={song.track} song={song}/>
                );
            })
        }
       </div>
    )
}

export default SongList;

