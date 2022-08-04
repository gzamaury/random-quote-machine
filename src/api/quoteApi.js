import client from "./client";

const config = {
  headers: {
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_MY_EXPOSED_KEY,
  },
};

const availLangs = ["en", "es", "pt", "it", "de", "fr", "cs", "sk"];

function fetchRandomQuote({ locale }) {
  let endpoint = "https://quotes15.p.rapidapi.com/quotes/random/";
  const lang = locale.match(/^[a-z]{2}/) || [];

  if (availLangs.includes(lang[0])) {
    endpoint = `${endpoint}?language_code=${lang[0]}`;
  }

  return client.get(endpoint, config);
}

export default fetchRandomQuote;
