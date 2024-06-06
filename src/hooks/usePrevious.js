import { useRef, useEffect } from "react";

const usePrevious = (value) => {
  const valueRef = useRef();

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef.current;
};

export default usePrevious;

/**
useRef is not directly interacting with the DOM. It's used for storing the previous value within the component itself.
useRef creates a mutable ref object. This object has a property called current which can be used to store and retrieve a value.

Key Points:

useRef doesn't access the DOM directly. It's used for internal state management within the component.
useEffect ensures the valueRef.current is updated with the new value after every render.
The hook provides access to the previous value by returning valueRef.current.
**/
