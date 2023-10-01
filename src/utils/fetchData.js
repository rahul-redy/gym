export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "28a9cbde06msh24cac9b2488673dp187feajsn4c4c2739a087",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7a900ce709mshec16b602caa8660p102ec0jsnd036c97f6c80",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
