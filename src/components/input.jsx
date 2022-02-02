import React, { ChangeEvent, NewLifecycle, useState } from "react";

const Input = (props) => {
  const type = "small" | "medium" | "large";
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
    console.log(inputValue);
    if (props.onChange) props.onChange(inputValue);
  }
  return (
    <>
      <input
        type={props.type}
        value={props.inputValue}
        name={props.name}
        onChange={handleChange}
        className={props.className}
        placeholder={props.placeHolder}
      />
    </>
  );
};

export { Input };
