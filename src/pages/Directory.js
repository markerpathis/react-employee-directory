import React from "react";
import { useState, useEffect } from "react";
import DirectoryContainer from "../components/DirectoryTable";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import DirectoryTable from "../components/DirectoryTable";

function Directory() {
  return (
    <div>
      <Header />
      <Searchbar />
      <DirectoryTable />
    </div>
  );
}
export default Directory;
