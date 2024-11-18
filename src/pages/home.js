import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Connect 4!</h1>
      <p className="home-description">
        Test your strategy and skills in this exciting two-player game. Use
        powers like the anvil and racecar to outsmart your opponent and be the
        first to connect your tokens!
      </p>
      <button className="home-button" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
};

export default Home;
