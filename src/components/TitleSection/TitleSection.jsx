import React from "react"
import s from "./TitleSection.module.css"

function TitleSection() {
    return (
      <div className={s.titleForm}>
        <div className={s.playIcons}></div>
        <div className={s.songName}>
          Song Name
        </div>
        <form type="text" className={s.artistName}>
          Artist Name
        </form>
        <form type="text" className={s.track}>
          Track
        </form>
        <div className={s.likeIcons}></div>
      </div>
    );
}

export default TitleSection 