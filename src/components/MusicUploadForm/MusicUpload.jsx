import React from "react";
import s from "./MusicUpload.module.css"
import { MdOutlineCloudUpload } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { useState, useRef, useContext } from "react";
import { SongContext } from "../../App";

function MusicUploadForm () {

    const {setSongs } = useContext(SongContext)
    const [selectedFile, setSelectedFile] = useState(null)
    const [uploadProgress, setUploadProgress] = useState(0)

  
    const filePicker = useRef(null);
    const handlePick = () => {
      filePicker.current.click();
    };


    const uploadHandler = (event) => {
       const file = event.target.files[0];
       setSelectedFile(file);
       console.log(`${file.name}`);
    }
    
    const handleUpload = () => {
        console.log("Upload");

     setUploadProgress(0);
    const intervalId = setInterval(() => {
      setUploadProgress((prevProgress) => prevProgress + 10);
      if (uploadProgress === 100) {
        clearInterval(intervalId);

        setSongs((prevSongs) => [...prevSongs, createSongFromUploadedFile()]);
      }
    }, 500);
};
  
  const createSongFromUploadedFile = () => {
    const newSong = {
    };
    return newSong;
}
    
return (
    <div>
        <div className={s.uploadForm}>
          <div className={s.chooseFile}>
           <button className={s.pickFile} onClick={handlePick}>Pick File</button>
            <input
              className={s.hidden}
              type="file"
              ref={filePicker}
              accept=".mp3, .wav"
              onChange={uploadHandler}
            />
            {selectedFile && <p>Selected File: {selectedFile.name}</p>}

            <button className={s.uploadButton} disabled={!selectedFile} onClick={handleUpload}>
              <i className={s.icon}>
                <MdOutlineCloudUpload />
              </i>
               {uploadProgress < 100 ? `Uploading ... ${uploadProgress}%` : 'Upload'}
               
            </button>
          </div>
          <div className={s.fileTypeInfo}>
            <p className={s.infoAboutFile}>
              <i>
                <FaInfoCircle />
              </i>
              Supported files
            </p>
            <p className={s.fileType}> .mp3 OR .wav </p>
          </div>
        </div>
    </div>
    )
}
    
 export default MusicUploadForm