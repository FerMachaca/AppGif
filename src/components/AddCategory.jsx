import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    //setInputValue("Hola mundo");
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    if (inputValue.trim().length <= 2) return;
    // setCategoryy((categories) => [inputValue, ...categories]);
    onNewValue(inputValue.trim());
    setInputValue("");
  };
  return (
    // <form onSubmit={(event) => onSubmit(event)}>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
        // value={inputValue || ""}
        //onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
AddCategory.propTypes = {
  onNewValue: PropTypes.func.isRequired,
};
