import React from 'react';
import './loader.css';

function Loader() {
  return React.createElement("div", {
    className: "loader-wrapper"
  }, React.createElement("div", null, "Loading ... "));
}

export default Loader;