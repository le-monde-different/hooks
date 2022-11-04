import React from "react";
import { Rating } from "react-simple-star-rating";
import "./style.css";

const Filter = ({ newRate, handelSearch }) => {
  // console.log('rendering Filter', newRate, "and", handelSearch)

  return (
    <div>
      <input
        placeholder="SEARCH .."
        style={{
          margin: "auto",
          width: "260px",
          height: "62px",
          backgroundColor: "white",
          border: "none",
          borderRadius: "10px",
          color: "#000",
          fontSize: "1.1em",
          fontWeight: "bold",
        }}
        className="input"
        type="text"
        onChange={(e) => handelSearch(e.target.value)}
      ></input>

     
      <Rating
        onClick={(rate) => {
          newRate(rate);
        }}
      />
    </div>
  );
};
export default Filter;