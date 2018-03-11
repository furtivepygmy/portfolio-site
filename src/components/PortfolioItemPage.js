import React from "react";
import { Link } from "react-router-dom";

const prevItem = id => {
  id--;
  return `/portfolio/${id}`;
};

const nextItem = id => {
  id++;
  return `/portfolio/${id}`;
};

const PortfolioItem = props => (
  <div>
    <h1>A thing I've done</h1>
    <p>Portfolio item with id of {props.match.params.id}</p>
    {props.match.params.id > 1 && (
      <Link to={prevItem(props.match.params.id)}>Prev</Link>
    )}
    <Link to="/portfolio">Go Back</Link>
    {props.match.params.id < 3 && (
      <Link to={nextItem(props.match.params.id)}>Next</Link>
    )}
  </div>
);

export default PortfolioItem;
