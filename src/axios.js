import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// https://api.themoviedb.org/3/trending/all/week?api_key=d38b64f72a3fcff4412d1314054bb200&language=en-US
//https://api.themoviedb.org/3/movie/511679/videos
//https://api.themoviedb.org/3/movie/57817ab4c3a36813870024b7/videos?api_key=d38b64f72a3fcff4412d1314054bb200&language=en-US
