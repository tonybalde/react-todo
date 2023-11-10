
import React, { useEffect, useRef } from 'react';

function InputWithLabel({ id, value, onInputChange, children }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []); // Empty dependency list to run the effect only once on mount

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={onInputChange}
        ref={inputRef} // Add ref prop with inputRef here
      />
    </>
  );
}

export default InputWithLabel;
