import React from "react";

export default function Image({ id, urls, alt_description }) {
  const { full } = urls;
  return (
    <img
      src={full}
      alt={alt_description}
    />
  );
}
