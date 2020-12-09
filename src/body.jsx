import React from "react";
import _ from "lodash";
import DeleteButton from "./deleteButton";
import './App.css';

export default function AllMovie(props) {

　//新しく登録した順から見れるようにしたいのでmovieListsの配列を反転させる
    const reversedLists = props.movieLists.slice(0, props.movieLists.length);
    reversedLists.reverse();
//    console.log(props.movieLists);
//    console.log("反転後",reversedLists);

    return (    
    <div className="container">
        {
        reversedLists.map((element, index) => (
        <div className="movieCell" id={element.id}>
        <div className="movieCell-header" >
            <DeleteButton id={element.id} newMovieAdded={props.newMovieAdded}></DeleteButton>
            <div className="titleCell">
            {element.title.slice( 0, 42)}
            </div>
            </div>
            <iframe width="560" height="315"
            src={"https://www.youtube.com/embed/" + element.URL.slice(32)}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        ))}
    </div>
    );
}