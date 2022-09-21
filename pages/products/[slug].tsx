import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { fullProducts } from "../../lib/products";
import { capitalizeFirstLetter, capitalizeEveryWord } from "../../lib/utils";
import { ProductDetailGallery } from "../../components/ProductDetailGallery";
import { SectionTitle } from "../../components/SectionTitle";

import cartImage from "../../public/icons/cart.png";
import { Product404 } from "../../components/Product404";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increase } from "../../store/features/cart/cartSlice";
import { RootState } from "../../store";
import ProductDescription from "../../components/ProductDescription";
import { Product } from "../../lib/types";
import { addToWishList } from "../../store/features/wishlist/wishlistSlice";
import SuggestedProductList from "../../components/SuggestedProductList";
import { Section } from "../../components/Section";

const ProductDetail = () => {
  const router: NextRouter = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0] ?? "black"
  );
  console.log(slug, product);

  const itemIndex = useSelector((state: RootState) =>
    state.cart.value.findIndex(
      (item) => item.slug === slug && item.color === selectedColor
    )
  );

  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    if (product) {
      dispatch(addToWishList(product));
    }
  };

  const handleAddToCart = () => {
    const payload = {
      slug: `${slug}`,
      color: selectedColor,
      name: product?.name ?? "",
      price: product?.price ?? 0,
      imageUrl: product?.images[0] ?? "",
    };
    if (itemIndex < 0) {
      dispatch(addToCart(payload));
    } else {
      dispatch(increase(payload));
    }
  };

  useEffect(() => {
    const found = fullProducts.find((v) => v.slug === slug);
    if (found) {
      setProduct(found);
    }
  }, [slug]);

  const handleSelectColor = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value.trim()) {
      setSelectedColor(e.currentTarget.value.trim());
    }
  };

  if (!product) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <Product404 />
      </>
    );
  }

  return (
    <div className={`mt-4`}>
      <Head>
        <title>
          {product.name} - {capitalizeFirstLetter(product.brand)} - Audio Store
        </title>
      </Head>
      <div className={`w-full flex gap-4 my-4 flex-col md:flex-row`}>
        <div
          style={{ flex: "65%" }}
          className={`flex items-center justify-center`}
        >
          <ProductDetailGallery images={product.images} />
        </div>
        <div
          style={{ flex: "35%" }}
          className={`flex flex-col gap-4 items-start`}
        >
          <div className={`w-full grid gap-2`}>
            <SectionTitle className={`text-2xl sm:text-3xl font-bold`}>
              {product.name} {"-"} {capitalizeFirstLetter(product.brand)}{" "}
              {capitalizeFirstLetter(product.category)}
            </SectionTitle>
            <div
              className={`w-full flex flex-col gap-4 items-center md:items-start justify-between`}
            >
              <div className={`w-full flex flex-col gap-2 items-start`}>
                <p className={`text-xl font-medium`}>
                  USD {product.price.toFixed(2)}
                </p>
                <div className={`flex gap-2`}>
                  <p>Color:</p>
                  <select
                    className={`bg-gray-300 rounded`}
                    onChange={handleSelectColor}
                  >
                    {product.colors.map((color) => (
                      <option key={color}>{color}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={`flex md:flex-col lg:flex-row gap-2 w-full `}>
                <button
                  className={`border-2 border-gray-700 w-full px-4 py-2  rounded-sm font-medium hover:bg-gray-700 hover:text-white`}
                  onClick={handleAddToWishlist}
                >
                  Add to wishlist
                </button>
                <button
                  className={`w-full bg-gray-700 px-4 py-2 text-white rounded-sm font-medium hover:bg-gray-600`}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>

            <Link href={`/buy/${product.slug}`} passHref>
              <a
                className={`w-full bg-green-500 px-4 py-2 text-white rounded-sm font-medium hover:bg-green-400  flex justify-center items-center gap-2`}
              >
                <span>Buy Now</span>
                <Image src={cartImage} alt={"cart"} width={24} height={24} />
              </a>
            </Link>
          </div>
          <div>
            <h3 className={`text-2xl font-semibold`}>Specifications</h3>
            <div className={`flex flex-col gap-2 mt-2`}>
              {Object.keys(product.specifications).map((key) => (
                <div key={key} className={`grid grid-cols-2 gap-4`}>
                  <p className={`font-medium`}>{capitalizeEveryWord(key)}</p>
                  <p>{capitalizeEveryWord(product.specifications[key])}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <h3 className={`text-2xl font-semibold`}>Description</h3>
      <ProductDescription description={product.description} />
      <Section className={`grid gap-4`}>
        <SectionTitle>More like this</SectionTitle>
        <SuggestedProductList category={product.category} />
      </Section>
    </div>
  );
};

export default ProductDetail;
