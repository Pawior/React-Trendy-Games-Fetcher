import react from "react";
// Styling an Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
const GameDetail = ({ pathId }) => {
  const history = useHistory();
  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    document.body.style.overflow = "auto";
    history.push("/");
    console.log(element);
    // if (element.classList.contains("shadow")) {
    //   document.body.style.overflow = "auto";
    //   history.push("/");
    // }
  };

  const { game, screen, isLoading } = useSelector((state) => state.detail);
  console.log(screen);
  console.log(screen.results);
  // if (screen.results != undefined) {
  // if (1 == 1) {
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            {/* <div className="detail"> */}
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>
                  {" "}
                  {game.name}{" "}
                </motion.h3>
                <p> Rating: {game.rating}</p>
              </div>
              <Info>
                <h3> Platforms</h3>
                <Platforms>
                  {game.platforms &&
                    game.platforms.map((platform) => (
                      <h3 key={platform.platform.id}>
                        {platform.platform.name}
                      </h3>
                    ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt="image"
              />
            </Media>
            <Description>
              <p>{game.description_raw} </p>
            </Description>
            <div className="gallery">
              {screen.results &&
                screen.results.map((screen) => (
                  <img
                    src={smallImage(screen.image, 1280)}
                    key={screen.id}
                    alt="image"
                  />
                ))}
            </div>
            {/* </div> */}
          </Detail>
        </CardShadow>
      )}
    </>
  );
  // } else return null;
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  /* z-index: 10; */
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 8rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 1;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
