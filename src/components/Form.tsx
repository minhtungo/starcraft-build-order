import classNames from "classnames";
import React from "react";

interface FormProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;

}

const Form = ({ children, className, ...props }: FormProps) => {
  return (
    <form {...props} className={classNames("flex flex-col gap-6", className)}>
      {children}
    </form>
  );
};

export default Form;
