import axios from "axios";

const searchImages = async (term) => {
  const Response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID FSMQQYV9H2r__qlRkYoL11nc9RcG8HcK3WcwHvGYz4c",
    },
    params: {
      query: term,
    },
  });

  return Response.data.results;
};

export default searchImages;
