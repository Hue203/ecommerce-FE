import React from "react";
import BeforeAfterSlider from "react-before-after-slider";

const BeforeAfter = () => {
  const before =
    "https://juiceghar.in/wp-content/uploads/2021/01/featured-image_for-web-11-750x500-1.jpg";
  const after =
    "https://www.news-medical.net/image.axd?picture=2018%2F4%2Fshutterstock_1By_stockcreations.jpg";
  return (
    <div>
      <BeforeAfterSlider
        before={before}
        after={after}
        width={1800}
        height={730}
        className="before-after"
      />
    </div>
  );
};

export default BeforeAfter;
