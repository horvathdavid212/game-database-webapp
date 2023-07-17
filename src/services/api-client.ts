import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5cb1cf93f48544039a84a18e129ef039",
  },
});
