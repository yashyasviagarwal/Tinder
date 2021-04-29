import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-mern-app.herokuapp.com",
});

export default instance;
