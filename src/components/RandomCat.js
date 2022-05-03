import React, { useState, useEffect } from "react";

export default function RandomCat() {
  const [randomCatImg, setRandomCatImg] = useState(null);

  const fetchRandomCat = async () => {
    setRandomCatImg("");
    const result = await fetch(`https://api.thecatapi.com/v1/images/search`,{cache: "no-cache"})
    const obj = await result.json();
    setRandomCatImg(obj[0].url);
  };

  useEffect(() => {
    if (randomCatImg === null) {
      fetchRandomCat();
    }
  });

  return (
    <div>
      <header>
        <h3>Cat of the day</h3>
        <div>
          <button onClick={() => fetchRandomCat()}>New Cat</button>
        </div>
        {randomCatImg !== "" ? (
          <div>
            <img src={randomCatImg} width="400px" alt="Cat" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}