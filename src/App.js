import logo from './logo.svg';
import logoCircle from './logo_circle_transparent.png';
import logoTitle from './logo_title_transparent.png';
import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import AllMovies from "./body.jsx";
import Input from "./input.jsx";

function App() {
  const url = process.env.PORT + "/movies/";
  const [movieLists, setMovieLists] = useState([]);
  const [maxIndex, setMaxIndex] = useState(0);//リストのindexを計算。DBのidが直ったら不要になる
  const [newMovie, setNewMovie] = useState();//新しいmovieが登録されると再描画する

  function newMovieAdded (movie){
    setNewMovie(movie);
  }
  function maxIndexIncrement(indexNumber){
    setMaxIndex(indexNumber);
  }

  useEffect(
    () => {
      axios.get(url).then(res => {
        //    console.log(res.data);
            const dataSet = res.data;
            let idArray=[];
            for (let data of dataSet){
              idArray.push(data.id);
            }
            console.log("idの配列",idArray);
            setMaxIndex(idArray[idArray.length-1]+1);//リストのindexを計算。DBのidが直ったら不要になる
            setMovieLists(dataSet);
            console.log("state情報",movieLists);
            console.log(maxIndex);
          }
          );
    },[newMovie]
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoCircle} className="App-logo" alt="logo" />
        <img src={logoTitle} className="App-logo-title" alt="logo" />
          <Input newMovieAdded={newMovieAdded} maxIndex={maxIndex} url={url} maxIndexIncrement={maxIndexIncrement } />
          <AllMovies newMovieAdded={newMovieAdded} movieLists={movieLists}/>
          <p></p>
      </header>
    </div>
  );
}

export default App;
