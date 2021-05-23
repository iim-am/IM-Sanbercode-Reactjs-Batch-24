import React, { useState, useContext } from "react";
import { DaftarBukuContext } from "./DaftarBukuContext";

const SearchBuku = () => {
  const [daftarBuku, setDaftarBuku] = useContext(DaftarBukuContext);
  const [input, setInput] = useState({ title: "" });

  const handleSearch = (event) => {
    event.preventDefault();

    if (input.title === "") {
      setDaftarBuku({ lists: null });
    } else {
      console.log(input.title);
      let newLists = daftarBuku.lists.filter((el) =>
        el.title.includes(input.title)
      );

      setDaftarBuku({ ...daftarBuku, lists: newLists });
    }
  };

  const handleChange = (event) => {
    setInput({ ...input, title: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input value={input.title} onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default SearchBuku;
