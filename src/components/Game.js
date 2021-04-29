import React from "react";
// Styling an Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  // Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = (e) => {
    dispatch(loadDetail(id));
    document.body.style.overflow = "hidden";
  };
  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}> {name} </motion.h3>
        <p> {released}</p>
        {image && (
          <motion.img
            layoutId={`image${stringPathId}`}
            src={smallImage(image, 640)}
            alt={name}
          />
        )}
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 5%;
  z-index: 0;
  pointer-events: svg;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
