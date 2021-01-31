import React, { useState } from "react";
import { CollectionBox, CollectionSection } from "./Style.js";
import Grid from "../components/grid/Grid";
import Modal from "../components/modal/Modal";
import { CoatData } from "../data/SliderData";

function Coat() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <CollectionSection>
      <CollectionBox>
        <h2>Coat & Blazzers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </CollectionBox>
      <Grid data={CoatData} setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </CollectionSection>
  );
}

export default Coat;
