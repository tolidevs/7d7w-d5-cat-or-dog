import React, { useState, useEffect } from 'react';
import './App.css';
import catIcon from './pictures/cat.png'
import dogIcon from './pictures/dog.png'
import treat from './pictures/snack.png'
import meadow from './pictures/meadow.png'
import Cat from './Cat'
import Dog from './Dog'
import Picture from './Picture'


function App() {
  const [score, setScore] = useState(null)
  const [choice, setChoice] = useState(null)
  const [result, setResult] = useState({ result: null, url: null })
  const [updated, setUpdated] = useState(false)

  const getPicture = () => {
    let num = Math.round(Math.random())

    if (num === 0) {
      Dog.getDog()
        .then(dog => {
          setResult({ result: "dog", url: dog.url })
        })
        .then(() => revealPic())
    } else {
      Cat.getCat()
        .then(cat => {
          setResult({ result: "cat", url: cat.file })
        })
        .then(() => revealPic())
    }
  }

  const revealPic = () => {
    const grass = document.querySelector(".grass")
    setTimeout(() => grass.classList.add("reveal"), 500)
    setTimeout(() => setUpdated(true), 1500)
    setTimeout(() => grass.classList.remove("reveal"), 4000)
    setTimeout(() => {
      setResult({ result: null, url: null })
      setChoice(null)
      setScore(null)
      setUpdated(false)
    }, 8000)
  }

  useEffect(() => {
    ( result.result === choice ) ? setScore("win") : setScore("lose")
  }, [result]);

  return (
    <div className="App">
      <div className="headers">
        <h1>Puppy or Pussy?</h1>
        <h2>Guess what's hiding in the bush, is it a kitty or a pooch?</h2>
      </div>
        <div className="buttons">
          <img
            className="button"
            src={catIcon}
            alt="cat button"
            onClick={() => {
              setScore(null)
              setChoice("cat")
              getPicture()
            }}></img>
              or   
          <img
            className="button"
            src={dogIcon}
            alt="dog button"
            onClick={() => {
              setScore(null)
              setChoice("dog")
              getPicture()
            }}></img>
        </div>
      <div className="results-div">
        { updated && (
          score === 'win' ? (
          <>
            <h2>Yes! It's a {choice}! You win! Have a treat!</h2>
            <img src={treat} alt="treat icon"></img>
           </>
        ) : (
          <h2>Wrong! It's a {result.result}, no treat for you!</h2>
            ) 
        )}
      </div>
      <div className="picture-container">
        {result.url ? <Picture classes={"pic animal"} url={result.url} altText={"animal"} /> : <div id="empty-div" ></div>}
        <Picture classes={"pic grass"} url={meadow} altText={"grass"} />
      </div>
      
    </div>
  );
}

export default App;
