import { useState, useEffect } from "react";
import { getGifs } from "./../helpers/getGifs";

useState;
//en un hook personalizado se puede enviar un objeto desestructurizado
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);

  return {
    // enms6 cuando tengamos una propiedad que apunta el mismo nombre de una variable se puede acortar a 1 nombre ----  images:images   a  solo images . tambien el isLoading:is pero se quedara como ejemplo
    images,
    isLoading: isLoading,
  };
};
// HOOK ES UNA FUNCION QUE REGRESA ALGO COMO UN OBJETO
