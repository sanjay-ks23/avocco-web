import React from 'react';

const ProductCard = ({ image, title, subtitle, price }) => {
    return (
        <div className="product-card">
            <div className="card-image-container">
                <img src={image} alt={title} className="card-image" />
            </div>
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <p className="card-subtitle">{subtitle}</p>
                <p className="card-price">{price}</p>
            </div>
            <style>{`
        .product-card {
          background-color: white;
          color: black;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s ease;
          cursor: pointer;
          border-radius: 20px;
          overflow: hidden;
        }
        .product-card:hover {
          transform: translateY(-5px);
        }
        .card-image-container {
          width: 100%;
          padding-top: 100%; /* 1:1 Aspect Ratio */
          position: relative;
          background-color: #f5f5f5;
          overflow: hidden;
        }
        .card-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover; /* Or contain, depending on image style */
          transition: transform 0.5s ease;
        }
        .product-card:hover .card-image {
          transform: scale(1.05);
        }
        .card-details {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 5px 0;
          text-transform: uppercase;
        }
        .card-subtitle {
          font-size: 0.9rem;
          color: #666;
          margin: 0 0 15px 0;
          flex-grow: 1;
        }
        .card-price {
          font-size: 1rem;
          font-weight: 600;
          color: #333;
          margin: 0;
        }
      `}</style>
        </div>
    );
};

export default ProductCard;
