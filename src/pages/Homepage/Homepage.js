import React from "react";
import "../../styles/homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Hey, there, fella! Welcome to the Odin Bros. Bazaar~~!</h1>
      <div className="homepage-gallery">
        <p className="para-1">
          Welcome to the Mushroom Kingdom's most magical shop - the Odin Bros.
          Bazaar! Here, we offer the finest selection of mushrooms, fire
          flowers, pow blocks, sleepy sheep, and much more to enhance your
          journey through the Mushroom Kingdom.
          <br></br>
          <br></br>
          If you're looking to gain some extra strength or restore your health,
          our collection of Mushrooms and Syrups are guaranteed to do the trick.
          We also carry a variety of fire flowers, perfect for taking out pesky
          enemies or lighting the way in dark dungeons.
        </p>
        <img
          src={require("../../img/homepage-display-1.png")}
          alt="paper-mario-ttyd"
          className="img-1"
        ></img>
        <p className="para-2">
          Need to clear a path through a tough level? Our pow blocks will do
          just the trick! And when you're ready to take a quick nap or sneak
          past some foes, our sleepy sheep are the perfect solution.
          <br></br>
          <br></br>
          So come on down to the Odin Bros. Bazaar today and stock up on all the
          power-ups you need to save the Mushroom Kingdom! Our friendly and
          knowledgeable staff are here to help you find exactly what you need to
          succeed in your quest. Let's-a go!
        </p>
        <img
          src={require("../../img/homepage-display-2.png")}
          alt="paper-mario-ttyd"
          className="img-2"
        ></img>
      </div>
    </div>
  );
};

export default Homepage;
