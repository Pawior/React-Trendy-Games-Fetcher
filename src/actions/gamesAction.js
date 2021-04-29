import axios from "axios";
import { popularGamesURL, upcomingGames, newGames, apiKey } from "../api";

// Action Creators
export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularGamesURL(), {
    headers: {
      Authorization: apiKey,
    },
  });
  const newGamesData = await axios.get(newGames(), {
    headers: {
      Authorization: apiKey,
    },
  });
  const upcomingData = await axios.get(upcomingGames(), {
    headers: {
      Authorization: apiKey,
    },
  });

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};
export default loadGames;
