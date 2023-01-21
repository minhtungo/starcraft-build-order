import React from "react";

const Input = ({
  value,
  onChange,
  ...props
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}) => {
  return <input className="input" onChange={onChange} {...props} />;
};

export default Input;
