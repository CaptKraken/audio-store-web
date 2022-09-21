import React, { Attributes, HTMLAttributes, ReactNode } from "react";

type SectionProps = {
  children?: ReactNode | undefined;
  className?: string;
  rest?: Attributes;
};

export const Section = (props: SectionProps) => {
  return (
    <section
      className={`my-4 md:my-8 ${props.className ?? ""}`}
      {...props.rest}
    >
      {props.children}
    </section>
  );
};
