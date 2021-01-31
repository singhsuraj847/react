import React, { useEffect } from "react";
import "./Grid.style.css";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const Grid = ({ data, setSelectedImg }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="img-grid">
      {data &&
        data.map((doc, idx) => (
          <motion.div
            key={idx}
            className="img-wrap"
            onClick={() => setSelectedImg(doc.image)}
            layout
            whileHover={{ opacity: 1 }}
            data-aos={doc.fade}
          >
            <motion.img
              src={doc.image}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default Grid;
