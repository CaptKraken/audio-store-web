import React, { useEffect, useState } from "react";
import styles from "../styles/ProductDetail.module.css";

const ProductDescription = ({ description }: { description: string }) => {
  const [displayedDesc, setDisplayedDesc] = useState<string>("");
  const [isTruncated, setIsTruncated] = useState<boolean>(true);

  const toggleDisplayedDesc = () => {
    setIsTruncated(!isTruncated);
  };

  useEffect(() => {
    if (isTruncated) {
      setDisplayedDesc(
        description.split("</p>").splice(0, 3).join() + "..." ?? ""
      );
    } else {
      setDisplayedDesc(description);
    }
  }, [description, isTruncated]);

  return (
    <div>
      <div
        className={`${styles["product-description"]}`}
        dangerouslySetInnerHTML={{
          __html: displayedDesc,
        }}
      ></div>
      <button
        className="inline-block hover:underline text-green-500"
        onClick={toggleDisplayedDesc}
      >
        {isTruncated ? "Show More" : "Show Less"}
      </button>
    </div>
  );
};

export default ProductDescription;
