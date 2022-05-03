import React, {useState, useEffect} from "react";
import {useParams } from "react-router-dom";

export default function GreetingCat() {
  const { greeting } = useParams();
  
  const [randomCatImg, setRandomCatImg] = useState(null);
  const fetchRandomCat = async () => {
    setRandomCatImg("");
    const result = await fetch(`https://cataas.com/cat/says/${greeting}`,{cache: "no-cache"})
    const blob = await result.blob();
    setRandomCatImg(URL.createObjectURL(blob));
  };

  useEffect(() => {
    if (randomCatImg === null) {
      fetchRandomCat();
    }
  });

  return (
    <div>
      <header>
        <h3>Greet me</h3>
        {!greeting ? (
          <div>Needs a greeting</div>
        ) : (
          <div>
            <img src={randomCatImg} width="400px" alt="Cat" />
          </div>
        )}
      </header>
    </div>
  );
}