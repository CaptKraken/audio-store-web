import React from "react";
import { categories } from "../../lib/links";
import { CategoryCard } from "./CategoryCard";

export const CategoryList = () => {
  return (
    <div className={"grid grid-cols-2 md:grid-cols-3 gap-4"}>
      {categories &&
        categories.map((category) => (
          <CategoryCard key={category.text} category={category} />
        ))}
    </div>
  );
};
