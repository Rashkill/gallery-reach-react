import React, { useState } from "react";
import classes from "./style.module.css";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  onChange,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={classes.input}>
      <label
        style={{
          left: 15,
          top: !focused && !value ? 21 : 6,
          color: !focused && !value ? "lightgray" : "black",
          fontWeight: "bold",
          fontSize: !focused && !value ? "1.5rem" : "1.2rem",
          transitionDuration: "0.5s",
        }}
      >
        {props.name}
      </label>
      <input
        className={classes.input}
        onChange={(e) => {
          onChange?.(e);
          setValue(e.target.value);
        }}
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default Input;
