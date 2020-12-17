const API = process.env.API;
const apikey = process.env.API_KEY;

const arrayToObj = (obj, [key, value]) => ({
  ...obj,
  [key.replace(/^\d+[.] /g, "")]: value,
});

const parserItem = (item) => Object.entries(item).reduce(arrayToObj, {});
const parser = ({ bestMatches = [] }) => bestMatches.map(parserItem);

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
    .then(parser)
    .then(res.json);
