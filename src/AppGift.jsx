import { useState } from "react";
export const AppGift = () => {
  //espacio de memoria para almacenar categorias
  const [categories, setCategories] = useState(["Futbol", "Basquet"]);
  //Inicializamos con  [] -> arreglo y como ejemplo el futbol
  console.log("categories");

  const AddCategory = () => {
    console.log("Voley");
    //DESUSTRUCTURACION
    //metodo 1
    setCategories([...categories, "Voley"]);
    // metodo 2
    // setCategories((cat) => [...categories, "voley"]);
  };
  return (
    <>
      {/*ol -> order list      li -> items*/}
      {/*Titulo*/}
      <div>AppGif</div>;{/*Impus*/}
      {/*Listado de gif*/}
      <button onClick={AddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
