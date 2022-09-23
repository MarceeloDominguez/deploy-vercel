import axios from "axios";

export const getPostsRequests = async () =>
  await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
