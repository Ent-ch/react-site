import React from "react";

const FilterItem = ({ imgUrl, title }) => (
  <div className="filter-item">
    <div className="filter-item_block-img"> 
      <img src={imgUrl} alt={1} className="filter-item-img" />
    </div>
    <p className="filter-item-descr">{title}</p>
  </div>
);

export default FilterItem;
