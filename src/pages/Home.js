import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail.js";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Game from "../components/Game";
import { useLocation } from "react-router-dom";

//Components and pages

const Home = () => {
  //FETCH_GAMES
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(location.pathname);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get that data back!
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  const { game, screen } = useSelector((state) => state.detail);

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {" "}
          {pathId && <GameDetail pathId={pathId} />}{" "}
        </AnimatePresence>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming &&
            upcoming.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {upcoming &&
            popular.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {upcoming &&
            newGames.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
