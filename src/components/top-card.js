import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

const TopCard = ({ city, country, descr, rating, numReviews, bal, priv, index }) => (
  <Slide index={index}>
    <div className="main__baner-views__card">
  <div className="card__block-img">
    <div className="card__img_icon">
      <FontAwesomeIcon icon={faBookmark} />
    </div>
    <CarouselProvider
      naturalSlideWidth={10}
      naturalSlideHeight={10}
      totalSlides={3}
      visibleSlides={1}
    >
      <Slider>
        <Slide index={0}>
          <img src="img/baner_sl1.png" alt="sl1" className="card__img" />
        </Slide>
        <Slide index={1}>
          <img src="img/baner_sl2.png" alt="sl1" className="card__img" />
        </Slide>
        <Slide index={2}>
          <img src="img/baner_sl3.png" alt="sl1" className="card__img" />
        </Slide>
      </Slider>
      <DotGroup />
    </CarouselProvider>
  </div>
  <div className="card__descr_block">
    <div className="card__descr_item">
      <ul className="card__descr__list">
        <li className="card-descr_location"> 
          <span className="card-descr_country">{country}</span>,
          <span className="card-descr_sity">{city}</span>
        </li>
        <li className="card-descr_place">
          {descr}
        </li>
        <li className="card-descr_resort">
          Alcudia <span className="card-descr-distance">2 km</span>
        </li>
      </ul>
      {/* /.card__descr_list */}
      <div className="card-descr_rating">
        <div className="rating-descr">
          <p className="rating-item mar-pad_0">{rating}</p>
          <p className="rating-views mar-pad_0">
            <span className="rating-views-item mar-pad_0">{numReviews}</span>
            reviews</p>
        </div> {/*/rating-descr*/}
        <div className="rating-bal mar-pad_0">{bal}</div> 
      </div> {/* /.card-descr_rating */}
    </div> {/*/card__descr_item*/}
    <p className="card-descr_privileges">{priv}</p>
  </div> {/*/card__descr_block*/}
</div>
</Slide>

);

export default TopCard;
