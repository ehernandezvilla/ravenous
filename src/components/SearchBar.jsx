import React, { useState } from "react";
import styles from "../assets/SearchBar.module.css";

function SearchBar() {
  return (
    <div>
      <div className={styles.searchBar}>
        <h1 className={styles.searchTitle}>ravenous</h1>
        <div className={styles.inputBar}>
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
        </div>
        <button>Lets Go</button>
      </div>
    </div>
  );
}

export default SearchBar;