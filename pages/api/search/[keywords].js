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

export default ({ query: { keywords } }, res) =>
  fetch(url(keywords))
    .then((response) => response.json())
    .then(res.json);
