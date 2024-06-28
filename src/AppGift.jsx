import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const AppGift = () => {
  //espacio de memoria para almacenar categorias
  const [categories, setCategories] = useState(["Futbol", "hockey"]);
  //Inicializamos con  [] -> arreglo y como ejemplo el futbol
  console.log("categories");

  const onAddCategory = (newCategory) => {
    console.log(newCategory);
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
