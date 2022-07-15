import client from "./client";

const config = {
  headers: {
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_MY_EXPOSED_KEY,
  },
};

function fetchRandomQuote() {
  return client.get("https://quotes15.p.rapidapi.com/quotes/random/", config);
}

export default fetchRandomQuote;
