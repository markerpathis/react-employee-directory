import React from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import DirectoryTable from "../components/DirectoryTable";
import { useState } from "react";

function Directory() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Header />
      <Searchbar setSearch={setSearch} />
      <DirectoryTable search={search} />
    </div>
  );
}
export default Directory;
