import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type Product = {
  name: string;
  category: string;
  brand: string;
  price: number;
  colors: string[];
  slug: string;
  images: string[];
  specifications: {
    [key: string]: any;
  };
  description: string;
};
