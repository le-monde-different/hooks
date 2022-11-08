import React from "react";
import { Rating } from "react-simple-star-rating";
import { Card,Button } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <div style={{ margin: "auto"
}}>
      <Card
        className="movieCard"
        style={{
          width: "calc(85vw/3)",
          height: "750px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="movieCard">
          <Card.Img
            style={{ height: "calc(100vh/2)", width: "calc(85vw/3)" }}
            variant="top"
            src={movie.image}
          />
          <Card.Body>
            <Card.Title style={{ color: "#fff", fontWeight: "bold" }}>
              {movie.name}{" "}
            </Card.Title>
            <Rating initialValue={movie.rate} readonly={true} />
            <Card.Title style={{ color: "green", fontWeight: "bold" }}>
              {movie.year}{" "}
            </Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Card.Title style={{ color: "green", fontWeight: "bold" }}>
              {movie.type}{" "}
            </Card.Title>
          </Card.Body>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <nav>
          <Link to={`/Description/${movie.id}`} style={{textDecoration:'none'}}>
          <button className="btn btn-outline-info" style={{margin:10}}
          variant="succes" size="1g"> Description
          </button>
          </Link>
          </nav>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;