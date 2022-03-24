import React from "react";
import useStorage from "../../hooks/UseStorage";

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    console.log(progress, url);

    return (
        <div className="progressBar">Progress {progress}%</div>
    )

}

export default ProgressBar;