import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Ellipse1 from "../images/Ellipse1.png";
import Ellipse2 from "../images/Ellipse2.png";
import Ellipse3 from "../images/Ellipse3.png";
import Ellipse4 from "../images/Ellipse4.png";
import loading_bound from "../images/loading_bound.svg";

export const Home = ({ message, text }) => {
  const [show, setShow] = useState(true);
  useEffect(() => console.log("Effect"), []);
  return (
    <div className="header-container">
      <div className="wrapper">
        <header>
          <div className="body-text">
            <h1>DUPME</h1>
            <h2>ADVENTURE</h2>
            <button onClick={() => setShow(!show)}>{text}</button>
            {/* <img src={character === 'pyne' ? pyne : character === 'prim' ? prim : char}> */}

            {show ? <Link to="/enter">START</Link> : <></>}
          </div>
          <div className="loading">
            <img className="loading_bound" src={loading_bound} alt="" />
            <img className="loading_fill" />
          </div>
          <div className="bg-comp">
            <img className="ellipse1" src={Ellipse1} />
            <img className="ellipse2" src={Ellipse2} />
            <img className="ellipse3" src={Ellipse3} />
            <img className="ellipse4" src={Ellipse4} />
          </div>
        </header>
      </div>
    </div>
  );
};
