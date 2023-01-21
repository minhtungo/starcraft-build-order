import React from "react";

const Label = ({
  text,
  ...props
}: {
  text: string;

  [key: string]: any;
}) => {
  return (
    <label
      className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
      {...props}
    >
      {text}
    </label>
  );
};

export default Label;
