import Image from "next/image";
import React, { ReactElement, useRef, WheelEventHandler } from "react";
const AboutPage = () => {
  return (
    <div>
      <p>About Page</p>
    </div>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};

export default AboutPage;
