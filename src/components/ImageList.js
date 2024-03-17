import React from "react";
import Image from "./Image";

export default function ImageList({ images }) {
  if (images.length === 0) return;
  const renderImages = images.map((image) => (
    <Image
      {...image}
      key={image.id}
    />
  ));

  return <section className="images-gallery">{renderImages}</section>;
}
