import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

import searchImages from "./api";

export default function App() {
  // Passing function as prop to retrieve the search term from the SearchBar Component
  const [images, setImages] = useState([]);

  const getTerm = (term) => {
    console.log(`I am the App component and the term is ${term}`);

    //   Step-2: Get the images now!
    searchImages(term);
  };

  return (
    <div>
      <SearchBar getTerm={getTerm} />
      <ImageList images={images} />
    </div>
  );
}
