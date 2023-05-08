import React from "react";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  const renderdImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });

  return <div className="imagelist-container">{renderdImages}</div>;
};

export default ImageList;
