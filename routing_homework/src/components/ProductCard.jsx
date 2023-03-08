import { Link } from "react-router-dom";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="column is-4-desktop is-6-tablet is-12-mobile">
      <Link to={`/products/${data.id}`}>
        <div className="card" style={{ height: "100%" }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={data.image}
                alt="placeholder"
                style={{ objectFit: "cover" }}
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <span className="is-size-2">${data.price}</span>
              <h4 className="is-size-4">{data.title}</h4>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
