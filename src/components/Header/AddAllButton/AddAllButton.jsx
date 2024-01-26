import React from "react";
import s from "./AddAllButton.module.css";
import { FaPlus } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";



function AddAllButton () {

    const addAll = () => {
        console.log("Add All Song")
    }

    return (
      
      <div className={s.addAllButton}>
        <button onClick={addAll}> 
          <i>
            <FaPlus />
          </i>
          Add All
          <div class={s.vl}></div>
          <i>
            <MdOutlineArrowDropDown />
          </i>
        </button>
      </div>
    );
}

export default AddAllButton;