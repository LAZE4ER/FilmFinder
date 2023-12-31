import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const SearchMovies = ({ onSearch }) => {
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }
  const [query, setQuery] = useState("");
  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        className="Search-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search Movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="SearchButton">
        <BsSearch color="white" fontSize="19px" />
        <span className="SearchButtonText">Search</span>
      </button>
    </form>
  );
};
export default SearchMovies;
