import React, { useState } from "react";
import { CollectionBox, CollectionSection } from "./Collection.style.js";
import Grid from "../grid/Grid";
import Modal from "../modal/Modal";
import { Sherwani } from "../../data/SliderData";

function Collection() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <CollectionSection>
      <CollectionBox>
        <h2>Sherwani</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </CollectionBox>
      <Grid data={Sherwani} setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </CollectionSection>
  );
}

export default Collection;
