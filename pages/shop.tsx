import React, { useEffect, useRef, useState } from "react";
import { ChipListFilter } from "../components/ChipListFilter";
import { PriceRange } from "../components/filters/PriceRange";
import MultiRangeSlider from "../components/multiRangeSlider/MultiRangeSlider";
import { Section } from "../components/Section";
import { SectionTitle } from "../components/SectionTitle";
import { categories, brands } from "../lib/links";
import { colors } from "../lib/colors";
import { ColorFilterList } from "../components/ColorFilterList";
import { products } from "../lib/products";
import { ProductCardHorizontal } from "../components/ProductCardHorizontal";
import styles from "../styles/Shop.module.css";
import { NextRouter, useRouter } from "next/router";
import { log } from "console";
import { ModalContainer } from "../components/ModalContainer";
import sadBag from "../public/icons/sad-bag.png";
import Image from "next/image";
const ShopPage = () => {
  const [initState, setInitState] = useState({
    min: 0,
    max: 1000,
  });
  const route: NextRouter = useRouter();
  // console.log();
  const [maxShown, setMaxShown] = useState<number>(6);
  const [isMobileFilterShown, setIsMobileFilterShown] =
    useState<boolean>(false);
  const [state, setState] = useState(initState);
  const allCategories: string[] = categories.map((item) => item.text);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const allBrands: string[] = brands.map((item) => item.text);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const allColors: string[] = colors;
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const [shownProducts, setShownProducts] = useState(products);
  const allProducts = shownProducts.slice(0, maxShown);

  const loadMoreProducts = () => {
    if (maxShown + 6 <= shownProducts.length) {
      setMaxShown((prev) => prev + 6);
    }
  };

  const toggleShowMobileFilter = () => {
    setIsMobileFilterShown((prev) => !prev);
  };

  useEffect(() => {
    let allProds = products
      .filter((product) => {
        if (selectedCategories.length > 0) {
          for (const category of selectedCategories) {
            if (category.toLowerCase() === product.category.toLowerCase()) {
              return true;
            }
          }
          return false;
        }
        return true;
      })
      .filter((product) => {
        if (selectedBrands.length > 0) {
          for (const brand of selectedBrands) {
            if (brand.toLowerCase() === product.brand.toLowerCase()) {
              return true;
            }
          }
          return false;
        }
        return true;
      })
      .filter((product) => {
        if (selectedColors.length > 0) {
          for (const color of selectedColors) {
            if (product.colors.includes(color.toLowerCase())) {
              return true;
            }
          }
          return false;
        }
        return true;
      })
      .filter(
        (product) => product.price >= state.min && product.price <= state.max
      );
    console.log(allProds);
    setShownProducts(allProds);
  }, [
    selectedCategories,
    selectedBrands,
    selectedColors,
    state.min,
    state.max,
  ]);

  return (
    <>
      <div className={"my-4 flex gap-4"}>
        <div style={{ flex: "30%" }} className={`hidden md:block`}>
          <Section className="mb-8 md:mb-14 mt-0 md:mt-0">
            <SectionTitle>Price Range</SectionTitle>
            <PriceRange
              initState={initState}
              state={state}
              setState={setState}
            />
          </Section>
          <Section>
            <SectionTitle>Categories</SectionTitle>
            <ChipListFilter
              all={allCategories}
              selected={selectedCategories}
              setSelected={setSelectedCategories}
            />
          </Section>
          <Section>
            <SectionTitle>Brands</SectionTitle>
            <ChipListFilter
              all={allBrands}
              selected={selectedBrands}
              setSelected={setSelectedBrands}
            />
          </Section>
          <Section>
            <SectionTitle>Colors</SectionTitle>
            <ColorFilterList
              all={allColors}
              selected={selectedColors}
              setSelected={setSelectedColors}
            />
          </Section>
        </div>
        <div style={{ flex: "70%" }} className={`flex flex-col`}>
          <div className={`md:mb-4 flex flex-col gap-2`}>
            {route.query.category && (
              <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold`}>
                Showing products in {route.query.category}
              </h3>
            )}
            <button
              className={`flex md:hidden items-center justify-center px-4 py-1 rounded text-white font-medium bg-green-400 hover:bg-green-300 mb-2`}
              onClick={toggleShowMobileFilter}
            >
              Filters
            </button>
          </div>
          {shownProducts.length <= 0 && (
            <div
              className={`w-full flex flex-col justify-center items-center text-center`}
            >
              <div className={`max-w-xs`}>
                <Image src={sadBag} alt="sad bag" />
              </div>
              <p className={`text-2xl text-gray-500`}>No products found.</p>
              <p className={`text-lg text-gray-500`}>
                Your search did not match any product.
              </p>
              <p className={`text-lg text-gray-500 mt-4`}>Please try again.</p>
            </div>
          )}
          <div className={`${styles["grid-layout"]} my-4`}>
            {allProducts &&
              allProducts.map((product, i) => (
                <div
                  key={`${product.slug}${i}`}
                  className={`border-2 flex items-stretch`}
                >
                  <ProductCardHorizontal product={product} />
                </div>
              ))}
          </div>
          <div className={`w-full flex justify-center`}>
            {shownProducts && maxShown + 6 <= shownProducts.length && (
              <button
                onClick={loadMoreProducts}
                className={`self-start justify-self-center flex items-center justify-center px-4 py-1 rounded text-white font-medium bg-green-400 hover:bg-green-300`}
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </div>
      {isMobileFilterShown && (
        <ModalContainer setOpen={setIsMobileFilterShown}>
          <div
            className={
              "fixed top-0 right-0 left-0 bottom-0 bg-white h-full w-full flex flex-col overflow-hidden items-center justify-center"
            }
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={`p-4`}>
              <Section className="mb-8 md:mb-14 mt-0 md:mt-0">
                <SectionTitle>Price Range</SectionTitle>
                <PriceRange
                  initState={initState}
                  state={state}
                  setState={setState}
                />
              </Section>
              <Section>
                <SectionTitle>Categories</SectionTitle>
                <ChipListFilter
                  all={allCategories}
                  selected={selectedCategories}
                  setSelected={setSelectedCategories}
                />
              </Section>
              <Section>
                <SectionTitle>Brands</SectionTitle>
                <ChipListFilter
                  all={allBrands}
                  selected={selectedBrands}
                  setSelected={setSelectedBrands}
                />
              </Section>
              <Section>
                <SectionTitle>Colors</SectionTitle>
                <ColorFilterList
                  all={allColors}
                  selected={selectedColors}
                  setSelected={setSelectedColors}
                />
              </Section>
              <button
                onClick={toggleShowMobileFilter}
                className={`w-full flex items-center justify-center px-4 py-1 rounded text-white font-medium bg-green-400 hover:bg-green-300`}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </ModalContainer>
      )}
    </>
  );
};

export default ShopPage;
