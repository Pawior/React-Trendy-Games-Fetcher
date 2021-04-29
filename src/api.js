const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else return month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else return day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
export const apiKey = () => "2c9273f8f95048719f4129a88930e1aa";
// Popular
const popular_games = `games?key=${apiKey()}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${apiKey()}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${apiKey()}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGames = () => `${base_url}${upcoming_games}`;
export const newGames = () => `${base_url}${new_games}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${apiKey()}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${apiKey()}`;

// 2c9273f8f95048719f4129a88930e1aa
