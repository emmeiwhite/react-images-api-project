import React, { useState } from "react";

export default function SearchBar({ getTerm }) {
  // Controlled Form Input
  const [term, setTerm] = useState("");

  // 1. handleInput
  const handleInput = (e) => {
    setTerm(e.target.value);
  };

  // 2. handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!term) return;

    getTerm(term);
    setTerm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="term"
          onChange={handleInput}
          value={term}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
