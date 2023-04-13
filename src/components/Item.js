import React from "react";

const Item = ({ filePath, name }) => {
  return (
    <div>
      <img src={filePath} alt={name}></img>
      <li>{name}</li>
    </div>
  );
};

export default Item;
