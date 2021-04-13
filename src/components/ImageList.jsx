import React from "react";

export default function ImageList(props) {
  const images = props.images.map((image) => (
    <img src={image.urls.regular} alt="img" />
  ));
  return <div className="ui segment">{images}</div>;
}
