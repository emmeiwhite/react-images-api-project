import axios from "axios";

const url = "https://api.unsplash.com/search/photos";

const searchImages = async () => {
  const response = await axios.get(url, {
    headers: {
      Authorization: "Client-ID chfO2I4YSDqNBSVZBb0DbYdEDluUb-gPUVSG-cqnEBc",
    },
    params: {
      query: "cars",
    },
  });
  console.log(response);
  return response;
};

export default searchImages;
