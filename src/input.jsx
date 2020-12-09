import React from "react";
import _ from "lodash";
import axios from "axios";

export default function Input(props) {
    return (
    <div className="input-form">
        <input type="text" id="movieTitle" placeholder="Movie Title"></input>
        <input type="text" id="movieURL" placeholder="YouTube URL"></input>
        <button
        className="button"
        onClick={() => {
            const titleValue = document.getElementById("movieTitle").value;
            const urlValue = document.getElementById("movieURL").value;
            console.log(titleValue);
            console.log(urlValue);
            console.log(props.maxIndex);            
            axios.post(process.env.PORT + '/movies/', //herokuアップ時になんとかすること
                {
//                id: props.maxIndex,
                title: titleValue,
                URL: urlValue,
                })
                .then(function (response) {
                console.log(response.data);
                document.getElementById("movieTitle").value="";//formのリセット
                document.getElementById("movieURL").value="";//formのリセット    
                props.newMovieAdded(titleValue);
                props.maxIndexIncrement(props.maxIndex + 1);
                })
                .catch(function (error) {
                console.log("Posting error",error);
                });
                
            
        }}
        >
        Memorize
        </button>
    </div>
    );
}
