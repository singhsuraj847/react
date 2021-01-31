import React from "react";
import "./Card.style.css";
import Radium from "radium";

function Card(props) {
  return (
    <div
      classname="cards"
      style={{
        ...styles.card,
        left: `${props.x}px`,
        top: `${props.y}px`,
        zIndex: `${props.z_index}`,
        transform: `translate(-50%, -50%) scale(${props.scale})`,
        opacity: `${props.opacity}`,
      }}
    >
      <img style={styles.image} src={props.slides.image} />
    </div>
  );
}

// Card = Radium(Card);

const styles = {
  card: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "430px",
    width: "300px",
    boxSizing: "border-box",
    borderRadius: "5px",

    "@media screen and (max-width:600px)": {
      left: "20%",
      top: "25%",
      height: "300px",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    boxShadow: "10px 10px 8px black",
    position: "relative",
    borderRadius: "15px",
    // border: "2px solid white",
    background: "white",
    padding: "5px",
    "@media screen and (max-width:600px)": {
      padding: "0",

    },
  },
};

export default Radium(Card);
