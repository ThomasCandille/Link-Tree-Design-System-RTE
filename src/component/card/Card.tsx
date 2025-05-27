import React from "react";
import "./Card.css"; // Assuming you have a CSS file for styling

export interface CardProps {
  title?: string;
  content?: string;
  imageUrl?: string;
  link?: string;
}

export default function Card( props: CardProps ) {

    const { title, content, imageUrl, link } = props;


  return (
    <div className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{content}</p>
            <a href={link}> Go to the {title} page</a>
        </div>
    </div>
  );
}