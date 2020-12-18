const API = process.env.API;
const apikey = process.env.API_KEY;

const arrayToObj = (obj, [key, value]) => ({
  ...obj,
  [key.replace(/^\d+[.] /g, "")]:
    key !== "date" ? value * 1 : new Date(value).getTime(),
});

const parserItem = ([date, data]) =>
  Object.entries({ date, ...data }).reduce(arrayToObj, {});

const parser = (response = {}) =>
  Object.entries(response["Time Series (Daily)"] || {}).map(parserItem);

const url = (symbol) => {
  const params = new URLSearchParams({
    function: "TIME_SERIES_DAILY",
    outputsize: "full",
    symbol,
    apikey,
  });

  return `${API}/query?${params.toString()}`;
};

export default ({ query: { keywords } }, res) =>
  fetch(url(keywords))
    .then((response) => response.json())
    .then(parser)
    .then(res.json);
