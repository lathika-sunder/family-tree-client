import React from "react";
import "./HomePage.css";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import { TypeAnimation } from "react-type-animation";
import { Parallax, Background } from "react-parallax";
import HeaderComp from "../../components/HeaderComp/HeaderComp";

import QuoteComp from "../../components/QuoteComp/QuoteComp";
import FamilyTreeComp from "../../components/FamilyTreeComp/FamilyTreeComp";
const HomePage = () => {
  return (
    <div className="home">
      <HeaderComp />
      <div className="carousel-comp">
        <CarouselComp />
      </div>
      <QuoteComp
        text="Families are like branches on a tree, we grow in different directions yet our roots remain as one."
        author=""
      />

      <div className="family-tree">
        <FamilyTreeComp />
      </div>
    </div>
  );
};

export default HomePage;
