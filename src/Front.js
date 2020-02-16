import React from "react";

import Header from './components/header';
import Footer from './components/footer';
import MainBaner from './components/main-baner';
import TopCard from './components/top-card';
import FilterItem from './components/filter-item';
import DestItem from './components/destination-item';

const FrontPage = () => (
<div>
  <Header />
  <main className="main">

    <MainBaner />

    <section className="section-padding wrapp wrapp-padding">
      <h3 className="section-h3">Popular filters</h3>
      <p className="filter-section_descr">find most inspirable beach options</p>
      <div className="filters-block">
        <FilterItem imgUrl="img/slider2_1.png" title="White sand &amp; crystal water" />
        <FilterItem imgUrl="img/slider2_2.png" title="Kids-friendly" />
        <FilterItem imgUrl="img/slider2_3.png" title="Relax" />
        <FilterItem imgUrl="img/slider2_4.png" title="Natural shadow" />
        <FilterItem imgUrl="img/slider2_5.png" title="Watersports" />
        <FilterItem imgUrl="img/slider2_4.png" title="Natural shadow" />
        <FilterItem imgUrl="img/slider2_1.png" title="White sand &amp; crystal water" />
      </div>
    </section>
    <section className="section-padding wrapp wrapp-padding">
      <h3 className="section-h3">Popular destinations</h3>
      <p className="galley-section_descr">view most preferred destionations</p>
      <div className="gallery">
        <div className="gallery-block">
          <DestItem title="White sand &amp; crystal water" imgUrl="img/gallery1.png" city="Majorca" country="SPAIN" num="280" />
          <DestItem title="White sand &amp; crystal water" imgUrl="img/gallery2.png" city="Majorca" country="SPAIN" num="280" />
          <DestItem title="White sand &amp; crystal water" imgUrl="img/gallery3.png" city="Majorca" country="SPAIN" num="280" />
          <DestItem title="White sand &amp; crystal water" imgUrl="img/gallery1.png" city="Majorca" country="SPAIN" num="280" />
          <DestItem title="White sand &amp; crystal water" imgUrl="img/gallery2.png" city="Majorca" country="SPAIN" num="280" />
          <DestItem title="White sand &amp; crystal water" imgUrl="img/gallery3.png" city="Majorca" country="SPAIN" num="280" />
          <DestItem title="White sand &amp; crystal water" imgUrl="img/gallery3.png" city="Majorca" country="SPAIN" num="280" />
          <DestItem title="White sand &amp; crystal water" imgUrl="img/gallery3.png" city="Majorca" country="SPAIN" num="280" />
        </div>
        <div class="gallary_sitebar">Add block</div>
      </div>


      <button class="gallery-btn">Show all popular destinations</button >

    </section>

  </main>
  {/* /.main */}
  <Footer />
</div>
);

export default FrontPage;
