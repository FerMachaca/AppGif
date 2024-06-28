import PropTypes from "prop-types";
import { getGifs } from "./../helpers/getGifs";
import { useEffect, useState } from "react";
import { GifItems } from "./GifItems";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {/* FORMA 1
      <ol>
        {images.map((img) => (
          <li key={img.id}>{img.title}</li>
        ))}
      </ol>
      */}
      {/* DESESTRUCTURACION */}
      <div className="card-grid">
        {images.map((img) => (
          <GifItems key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
