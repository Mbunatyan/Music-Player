import React from "react";
import s from "./TrackNumber.module.css"
import { PiArrowsDownUpBold } from "react-icons/pi";
import { MdOutlineArrowDropDown } from "react-icons/md";




function TrackNumber () {
   return (
     <span className={s.trackNumber}>
       <button className={s.trackButton}>
         <PiArrowsDownUpBold className={s.arrowUpDown} />
         Track Nu...
        <MdOutlineArrowDropDown />
       </button>
     </span>
   );
}


export default TrackNumber;