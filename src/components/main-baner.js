import React, { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Button, Modal } from 'react-bootstrap';

import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import TopCard from './top-card';

const MainBaner = () => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
  <section className="main__baner">
  <div className="main__baner-bg flex_columm_center">
    <div className="main__baner-find">
      <h2 className="main__baner-title">
        Find your<br />
        perfect beach
      </h2>
      <p className="main__baner-find_txt">
        in
        <span className="main__baner-find_region">mediterranean</span> region
      </p>
      <input type="text" placeholder="Location or beach name" className="main__baner-find_inpt" />
      <button className="main__baner-find_btn">Search</button>
    </div>
    {/* /.main__baner-find */}
    <div className="main__baner-slider flex_row_center wrapp wrapp-padding">
      <ul className="main__baner-share">
        <li className="baner-share-item">
          Share your experience with all beach lovers!
        </li>
        <li className="baner-share-item">
          <button onClick={() => {handleShow(); setModalTitle('Publish a photo');}} className="baner-share_link">
            <FontAwesomeIcon icon={faInstagram} />&nbsp;
            Publish a photo
          </button>
        </li>
        <li className="baner-share-item">
          <button onClick={() => {handleShow(); setModalTitle('Add a review');}} className="baner-share_link">
            <FontAwesomeIcon icon={faEdit} />&nbsp;
            Add a review
          </button>
        </li>
      </ul>
      {/* /.main__baner-share */}
      <div className="main__baner-views">
        <h4 className="h4">You recently viewed</h4>
        <div className="main__baner-carusel">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={5}
            visibleSlides={3}
          >
          <ButtonBack className="main__baner-carusel-prev">
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </ButtonBack>
          <ButtonNext className="main__baner-carusel-next">
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </ButtonNext>
          <Slider>
            <TopCard index={0} city="Majorca" country="SPAIN" descr="Cala Mitjaha" rating="Excellent" numReviews="20" bal="8.5" priv="White sand, natural shadow, snorkling" />
            <TopCard index={1} city="Majorca" country="SPAIN" descr="Cala Mitjaha" rating="Excellent" numReviews="20" bal="8.5" priv="White sand, natural shadow, snorkling" />
            <TopCard index={2} city="Majorca" country="SPAIN" descr="Cala Mitjaha" rating="Excellent" numReviews="20" bal="8.5" priv="White sand, natural shadow, snorkling" />
            <TopCard index={3} city="Majorca" country="SPAIN" descr="Cala Mitjaha" rating="Excellent" numReviews="20" bal="8.5" priv="White sand, natural shadow, snorkling" />
            <TopCard index={4} city="Majorca" country="SPAIN" descr="Cala Mitjaha" rating="Excellent" numReviews="20" bal="8.5" priv="White sand, natural shadow, snorkling" />
          </Slider>
          </CarouselProvider>
      </div>
      </div>
    </div>
  </div>
  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Content in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

  </section>
)};

export default MainBaner;
