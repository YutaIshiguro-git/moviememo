import React from "react";
import _ from "lodash";
import axios from "axios";
import './App.css';

export default function DeleteButton(props) {
    console.log(props.id);
    return (
        <div className="button-container">
        <button
        className="button-title"
        onClick={() => {
        axios.delete(process.env.PORT + props.id)
            .then(res => {
                console.log(res.data)
                props.newMovieAdded(props.id);
            })
            .catch(response => console.log(response)) 
        }}
        >
        Remove
        </button>
        </div>
    );
}
