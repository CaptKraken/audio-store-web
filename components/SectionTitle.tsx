import React, { ReactChild, ReactChildren, ReactNode } from "react";

type SectionTitleProps = {
  children?: ReactNode;
  className?: String;
};

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h3 className={`${className ?? "text-xl sm:text-2xl font-bold"}`}>
      {children}
    </h3>
  );
};
