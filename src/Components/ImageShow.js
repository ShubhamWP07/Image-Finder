import React from "react";

const ImageShow = ({ image }) => {
  return (
    <div>
      <img
        className="images"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageShow;
