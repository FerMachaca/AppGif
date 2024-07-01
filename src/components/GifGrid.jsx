import PropTypes from "prop-types";
import { GifItems } from "./GifItems";
import { useFetchGifs } from "../hooks/useFetchGifs";
0;
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(images, isLoading);

  return (
    <>
      <h3>{category}</h3>

      {
        //isLoading ? <h2>Cargando...</h2> : null
        isLoading && <h2>Cargando...</h2>
      }
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
