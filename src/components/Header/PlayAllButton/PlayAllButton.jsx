import React from "react";
import s from "./PlayAllButton.module.css";
import { IoMdPlay } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";




function PlayAllButton() {
  
  const playAll = () => {
    console.log("Play All");
  }
  
  return (
    <div className={s.playAllButton}>
      <button onClick={playAll}>
        <i>
          <IoMdPlay />
        </i>
        Play All
        <div class={s.vl}></div>
        <i>
          <MdOutlineArrowDropDown />
        </i>
      </button>
    </div>
  );
}

export default PlayAllButton;