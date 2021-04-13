import "./ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";

export default function ImageList(props) {
  const images = props.images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="ui segment image-list">{images}</div>;
}
