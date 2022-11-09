import React from "react";

const Cards = (props) => {
  return (
    <>
      
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="" />
          <div className="card_info">
            <span className="card_category">
              <h3 className="card_title">{props.title}</h3>
              <a href="" target="_blank">
                <button>WatCH Now</button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
