const axios = require("axios");
let a = {
  name: "ESTO",
  releaseDate: "2019-06-11",
  actors: "ES",
  genre: "UNA",
  director: "PRUEBA",
  screenwriter: "XD",
};
const test = async () => {
  const data = await axios
    .post("http://localhost:1234/api/movies/create", a)
    .catch((err) => console.log(err));
  return data;
};

test();
