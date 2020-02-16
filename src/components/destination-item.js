import React from "react";

const DestItem = ({ imgUrl, title, num, city, country }) => (
  <div className="gallery-item">
    <div className="gallery-item_block-img"> 
      <img src={imgUrl} alt={title} className="galery-item-img" />
    </div>
    <ul className="gallery_descr-list">
      <li className="gallery_descr-item">
        <span className="gallery_descr-sity">{city}</span>,
        <span className="gallery_descr-country">{country}</span>
      </li>
      <li className="gallery_descr-item_day">
        <span className="gallery_descr-days">{num}</span>
        beaches</li>
      <li className="gallery_descr-item_natur">
        <span className="gallery-descr-natur">{title}</span></li>
    </ul>
  </div>
);

export default DestItem;
