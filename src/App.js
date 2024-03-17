import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

import searchImages from "./api";

export default function App() {
  // Passing function as prop to retrieve the search term from the SearchBar Component
  const [images, setImages] = useState([]);

  const getTerm = async (term) => {
    console.log(`I am the App component and the term is ${term}`);

    //   Step-2: Get the images now!
    const response = await searchImages(term);
    console.log(response);

    setImages(response);
    // This will re-render the component and ImageList will pass the updated images to the ImageList component
  };

  return (
    <div>
      <SearchBar getTerm={getTerm} />
      <ImageList images={images} />
    </div>
  );
}
