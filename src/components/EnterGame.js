import React, { useEffect } from "react";
import Ellipse1 from "../images/Ellipse1.png";
import Ellipse4 from "../images/Ellipse4.png";
import Ellipse_orange from "../images/Ellipse_orange.svg";
import Rectangle_blue from "../images/Rectangle_blue.svg";

export const EnterGame = () => {
  return (
    <div className="header-container">
      <div className="wrapper2">
        <header>
          <div className="body-text">
            <h3>DUPME</h3>
            <h4>ADVENTURE</h4>
            <div className="name" style={{ zIndex: 1 }}>
              <input
                type="text"
                className="input"
                id="name"
                placeholder="Name"
                required=""
              />
              <label for="name" className="label">
                Name
              </label>
            </div>

            <button className="b" type="button" style={{ zIndex: 1 }}>
              Pick character
            </button>
            <button className="c" type="button" style={{ zIndex: 1 }}>
              Let's go
            </button>
          </div>

          <div className="bg-comp">
            <img className="ellipse1" src={Ellipse1} />
            <img className="ellipse4" src={Ellipse4} />
            <img
              className="ellipse_orange"
              src={Ellipse_orange}
              style={{ zIndex: 1 }}
            />
            <img className="rectangle_blue" src={Rectangle_blue} />
          </div>
        </header>
      </div>
    </div>
  );
};
