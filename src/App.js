import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import catIcon from './pictures/cat.png'
import dogIcon from './pictures/dog.png'
import treat from './pictures/snack.png'
import Cat from './Cat'
import Dog from './Dog'


function App() {
  const [score, setScore] = useState(null)
  const [choice, setChoice] = useState(null)
  const [result, setResult] = useState({ result: null, url: null })

  // const getCat = () => {
  //   fetch('https://aws.random.cat/meow')
  //     .then(resp => resp.json())
  // }

  // const getDog = () => {
  //   fetch('https://random.dog/woof.json')
  //     .then(resp => resp.json())
  // }

  const getPicture = () => {
    let num = Math.round(Math.random())

    if (num === 0) {
      Dog.getDog()
        .then(dog => {
          setResult({ result: "dog", url: dog.url })
          choice === "dog" ? setScore("win") : setScore("lose")
        })
    } else {
      Cat.getCat()
        .then(cat => {
          setResult({ result: "cat", url: cat.file })
          choice === "cat" ? setScore("win") : setScore("lose")
        })
    }
  }

  let picture = result.url

  return (
    <div className="App">
      <h1>Cat or Dog?</h1>
      <h2>Guess what's hiding in the grass, is it a cat or a dog?</h2>
      <h2>Win a treat for every one you guess right</h2>
      <div className="buttons">
        <img src={catIcon}
          alt="cat button"
          onClick={() => {
            setScore(null)
            setChoice("cat")
            getPicture()
        }}></img>
        <img src={dogIcon}
          alt="dog button"
          onClick={() => {
            setScore(null)
            setChoice("dog")
            getPicture()
          }}></img>
      </div>
      <div className="picture-container">
        {result.url ? <image className="pic" src={picture}></image> : "???"}
      </div>
      <div className="results-div">
        {score === "win" ? (
          <>
            <h2>Yes! it's a {choice}! You win! Have a treat!</h2>
            <img src={treat} alt="treat icon"></img>
           </>
        ) : (
          <h2>Sorry, it's a {result.result}, not a {choice} you lose!</h2>
        ) }
      </div>
    </div>
  );
}

export default App;
