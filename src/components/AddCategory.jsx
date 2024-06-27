import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Futbol");
  const onInputChange = ({ target }) => {
    //setInputValue("Hola mundo");
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
        //onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
