const axios = require("axios");

let testObject = {};

const localtest = async () => {
  const data = await axios
    .get("http://localhost:1234/api/movies/getAllMovies", testObject)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  return data;
};

localtest();
