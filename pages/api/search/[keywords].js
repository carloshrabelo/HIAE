const API = process.env.API;
const apikey = process.env.API_KEY;

const url = (keywords) => {
  const params = new URLSearchParams({
    function: "SYMBOL_SEARCH",
    keywords,
    apikey,
  });

  return `${API}/query?${params.toString()}`;
};

const parser = (result) => result.bestMatches;

export default ({ query: { keywords } }, res) =>
  fetch(url(keywords))
    .then((response) => response.json())
    .then(parser)
    .then(res.json);
