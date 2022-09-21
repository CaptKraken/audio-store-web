import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Slider from "../components/Slider";
import { SectionTitle } from "../components/SectionTitle";
import { CategoryList } from "../components/category/CategoryList";
import { Section } from "../components/Section";
import { ProductCardHorizontal } from "../components/ProductCardHorizontal";
import { products } from "../lib/products";
import { Carousel } from "../components/Carousel";
import { GridCarousel } from "../components/GridCarousel";
import { NewsLetter } from "../components/NewsLetter";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Audio Store</title>
        <meta name="description" content="Audio store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* PROMOTION SLIDE */}
      <Section>
        <Slider />
      </Section>

      <Section>
        <SectionTitle>Featured Products</SectionTitle>
        <div className={"bg-green-100 mt-4"}>
          <GridCarousel />
        </div>
      </Section>

      <Section className={"flex flex-col gap-4"}>
        <SectionTitle>Categories</SectionTitle>
        <CategoryList />
      </Section>

      <Section>
        <NewsLetter />
      </Section>
    </>
  );
};

export default Home;
