import React from "react";
import s from "./Header.module.css";
import { IoMdPlay } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import PlayAllButton from "./PlayAllButton/PlayAllButton";
import AddAllButton from "./AddAllButton/AddAllButton";
import Grid from "@mui/material/Unstable_Grid2"; 




function Header() {
  return (
    <div className={s.header}>
      <Grid >
        <PlayAllButton />
      </Grid>
      <AddAllButton />

      <div className={s.trackNumber}>
        <button>
          <i>
            <PiArrowsDownUpBold />
          </i>
          Track Nu...
          <div class={s.vl}></div>
          <i>
            <MdOutlineArrowDropDown />
          </i>
        </button>
      </div>

      <div className={s.inputWrapper}>
        <FaSearch className={s.searchIcon} />
        <input type="search" placeholder="Filter" />
      </div>
    </div>
  );
}

export default Header;
