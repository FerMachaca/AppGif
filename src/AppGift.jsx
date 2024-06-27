import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const AppGift = () => {
  //espacio de memoria para almacenar categorias
  const [categories, setCategories] = useState(["Futbol", "Basquet"]);
  //Inicializamos con  [] -> arreglo y como ejemplo el futbol
  console.log("categories");

  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    //DESUSTRUCTURACION
    //metodo 1
    // setCategories([...categories, "Voley"]);
    // metodo 2
    // setCategories((cat) => [...categories, "voley"]);
    //setCategories({ newCategory, ...categories }); XERROR por poner llaves
    //metodo 1 validacion no tan estricto
    //    if (categories.includes(newCategory)) return;
    // metodo3 validacion extircta con minusculas y mayusculas
    if (
      !categories.findIndex(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;

    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      {/*ol -> order list      li -> items*/}
      <div>AppGif</div>;{/*Impus*/}
      <AddCategory
        //setCategoryy={setCategories}
        onNewValue={(value) => onAddCategory(value)}
      />
      {/*Forma 3 :Añadiendo componen*/}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
