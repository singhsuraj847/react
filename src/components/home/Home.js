import React, { useState, useRef, useEffect } from "react";
import Radium from "radium";
import { motion } from "framer-motion";
import {
  HomeSection,
  HomeWrapper,
  HomeContent,
  Overlay,
  Info,
  Button,
  SlideControl,
  Icon,
} from "./Home.style.js";

import Card from "./Card";

const Home = ({ slides, home }) => {
  const [current, setCurrent] = useState(0);
  const [imgWidth, setImageWidth] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);
  const [card, setCard] = useState([]);
  let new_cards = [];

  const RenderCard = () => {
    new_cards = [];
    let middle = Math.floor(length / 2);
    let new_x = 0;
    let new_y = 0;
    let new_zIndex = 0;
    let new_scale = 1;
    let center = {
      x: parseFloat(home.style.width) / 2,
      y: parseFloat(home.style.height) / 2,
    };
    for (let i = 0; i < length; i++) {
      // if (i < middle) {
      //   new_x = center.x - 300 * (middle - i);
      //   new_y = center.y;

      //   new_x = new_x + 0.333 * 300 * (middle - i);
      //   new_zIndex = i;

      //   // scale the cards
      //   new_scale = Math.pow(0.95, middle - i);
      // } else {
      new_x = center.x + 250 * (i - middle);
      new_y = center.y;

      new_x = new_x - 0.333 * 200 * (i - middle);
      new_zIndex = i * -1.0;

      // scale the cards
      new_scale = Math.pow(0.9, i - middle);
      // }
      new_cards.push(
        <Card
          key={i}
          x={new_x}
          y={new_y}
          z_index={i === current ? 100 : new_zIndex}
          opacity={i == length - 1 ? 0 : 1}
          scale={new_scale}
          slides={slides[i]}
          resize_width={imgWidth}
        />
      );
    }
    setCard(new_cards);
  };

  useEffect(() => {
    RenderCard();
  }, []);

  const nextSlide = () => {
    let last_card_left = home.children[home.children.length - 1].style.left;
    let last_card_zIndex = home.children[home.children.length - 1].style.zIndex;
    let last_card_transform =
      home.children[home.children.length - 1].style.transform;
    let last_card_opacity =
      home.children[home.children.length - 1].style.opacity;

    for (let i = home.children.length - 1; i > 0; i--) {
      home.children[i].style.transitionDuration = "1.0s";
      home.children[i].style.left = home.children[i - 1].style.left;
      home.children[i].style.zIndex = home.children[i - 1].style.zIndex;
      home.children[i].style.transform = home.children[i - 1].style.transform;
      home.children[i].style.opacity = home.children[i - 1].style.opacity;
    }

    // special case
    home.children[0].style.transitionDuration = "0.2s";
    home.children[0].style.transform = `translate(-50%, -50%) scale(2)`;
    home.children[0].style.opacity = "0";

    const ref = home;
    setTimeout(() => {
      ref.children[0].style.opacity = "1";
      ref.children[0].style.transitionDuration = "0.2s";
      ref.children[0].style.left = last_card_left;
      ref.children[0].style.zIndex = last_card_zIndex;
      ref.children[0].style.transform = `translate(-50%, -50%) scale(0)`;
      ref.appendChild(ref.children[0]);
      setTimeout(() => {
        ref.children[ref.children.length - 1].style.transitionDuration = "0.2s";
        // ref.children[
        //   ref.children.length - 1
        // ].style.transform = last_card_transform;
        ref.children[ref.children.length - 1].style.opacity = last_card_opacity;
      }, 100);
    }, 700);

    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HomeSection>
      <Overlay />
      <HomeWrapper>
        <HomeContent>
          {slides.map((slide, idx) => {
            return (
              <Info key={idx}>
                {idx === current && (
                  <div>
                    <h1>
                      {slide.title1}
                      <span>{slide.title2}</span>
                    </h1>
                    <h1>
                      <span>{slide.title3}</span>
                      {slide.title4}
                    </h1>
                    <span>{slide.tag}</span>
                    <p>{slide.content}</p>
                    <Button to={slide.link}>Explore</Button>
                  </div>
                )}
              </Info>
            );
          })}
        </HomeContent>
      </HomeWrapper>
      <div ref={(ref_id) => (home = ref_id)} style={styles.home}>
        {card}
      </div>
      <SlideControl onClick={nextSlide}>
        <Icon />
      </SlideControl>
    </HomeSection>
  );
};

const styles = {
  home: {
    position: "absolute",
    top: "50%",
    left: "70%",
    transform: "translate(-50%, -50%)",
    height: "400px",
    width: "300px",
    zIndex: "4",
  },
};

export default Radium(Home);
