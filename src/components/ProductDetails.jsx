// import React, { useState } from "react";

// const ProductDetails = ({ product }) => {
//   // Set the first variant as the default selected variant
//   const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

//   const handleColorSelect = (variant) => {
//     setSelectedVariant(variant);
//   };

//   return (
//     <div>
//       {/* Display the selected variant's image */}
//       <div className="product-image">
//         <img src={selectedVariant.image_url} alt="Selected Product" />
//       </div>

//       {/* Display color options */}
//       <div className="color-options">
//         {product.variants.map((variant) => (
//           <div
//             key={variant.id}
//             className={`color-circle ${
//               selectedVariant.id === variant.id ? "selected" : ""
//             }`}
//             style={{
//               backgroundColor: variant.color,
//               width: "30px",
//               height: "30px",
//               borderRadius: "50%",
//               cursor: "pointer",
//               border:
//                 selectedVariant.id === variant.id
//                   ? "3px solid black"
//                   : "1px solid gray",
//             }}
//             onClick={() => handleColorSelect(variant)} // Update selected variant on click
//           ></div>
//         ))}
//       </div>

//       {/* Display selected variant's details */}
//       <div className="product-details">
//         <p>Selected Color: {selectedVariant.color}</p>
//         <p>Price: {selectedVariant.price}</p>
//         <p>Size: {selectedVariant.size}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";

function ProductDetails({ listing }) {
  const [selectedVariant, setSelectedVariant] = useState([
    listing?.product?.variants[0],
  ]);
  console.log(listing);

  const handleColorSelect = (variant) => {
    setSelectedVariant(variant);
  };
  return (
    <div>
      <div>
        <img src={selectedVariant.image_url} alt="product-name" />
      </div>

      <div>
        {listing?.product?.variants?.map((variant, id) => (
          <div
            key={variant.id}
            className={`color-circle ${
              selectedVariant.id === variant.id ? "selected" : ""
            }`}
            style={{
              backgroundColor: variant.color,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              cursor: "pointer",
              border:
                selectedVariant.id === variant.id
                  ? "3px solid black"
                  : "1px solid gray",
            }}
            onClick={() => handleColorSelect(variant)}
          ></div>
        ))}
      </div>

      <div>
        <p>{selectedVariant.color}</p>
        <p>{selectedVariant.price}</p>
        <p>{selectedVariant.size}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
