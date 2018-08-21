import React from "react"
import "./ScoreCard.css"

const ScoreCard = props => (
    <nav class="navbar">
    <div class="container-fluid">
      <ul class="nav navbar-nav navbar">
        <li><span>Click the Chiclet!</span></li>
      </ul>
      <ul class="nav navbar-nav navbar">
        <li><span>{props.message}</span></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><span>Score: {props.score} - Top Score: {props.topScore}</span></li>
      </ul>
    </div>
  </nav>
);

export default ScoreCard;
