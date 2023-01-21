import React from "react";
import classNames from "classnames";

interface VariantProps {
  [key: string]: "red" | "green" | "yellow" | "blue";
}

interface Variant {
  [key: string]: string;
}

const Badge = ({ variant, text }: { variant: VariantProps; text: string }) => {
  const styles: Variant = {
    red: "text-red-800 bg-red-100",
    green: "text-green-800 bg-green-100",
    yellow: "text-yellow-800 bg-yellow-100",
    blue: "text-blue-800 bg-blue-100",
  };
  return (
    <span
      className={classNames(
        "mr-2 rounded  px-2.5 py-0.5 text-xs font-medium",
        styles[variant]
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
