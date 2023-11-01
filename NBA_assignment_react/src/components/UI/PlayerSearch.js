import React from "react";

function PlayerSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default PlayerSearch;





