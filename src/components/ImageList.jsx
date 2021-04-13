import "./ImageList.css";
import React from "react";

export default function ImageList(props) {
  const images = props.images.map(({ description, id, urls }) => (
    <img key={id} src={urls.regular} alt={description} />
  ));
  return <div className="ui segment image-list">{images}</div>;
}
