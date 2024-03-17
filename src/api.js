import axios from "axios";

const url = "https://api.unsplash.com/search/photos";

const searchImages = async (term) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: "Client-ID chfO2I4YSDqNBSVZBb0DbYdEDluUb-gPUVSG-cqnEBc",
    },
    params: {
      query: term,
    },
  });
  console.log(response);
  return response.data.results;
};

export default searchImages;
