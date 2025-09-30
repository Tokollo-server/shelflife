// src/components/Sneakers.js
import React, { useState } from "react";
import { Card, Button, Dropdown } from "react-bootstrap"; // Import Bootstrap components

// Sample Sneaker Product data
const sneakersData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/shelflife-online/image/upload/c_fill,f_auto,q_auto:eco,w_681/v1575961299/uploads/assets/e88-NEW-BALANCE-BB550STG-550-WHITE-side-UbC.jpg",
    title: "New Balance 550",
    description:
      "A retro hoops classic reimagined for today with premium leather.",
    price: 1899.0,
    colors: ["White/Grey", "Black/Red", "Green/White"],
  },
  {
    id: 2,
    image:
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/NIKE+DUNK+LOW+RETRO.png", // Example image
    title: 'Nike Dunk Low "Panda"',
    description: "The iconic black and white colorway, perfect for any outfit.",
    price: 1799.0,
    colors: ["Black/White", "Red/White", "Blue/White"],
  },
  {
    id: 3,
    image:
      "https://courtorder.co.za/cdn/shop/files/adidas-adidas-yeezy-boost-350-v2-mx-oat-sneakers-1150065680_1080x.jpg?v=1742503056",
    title: "Adidas Yeezy Boost 350 V2 MX Oat",
    description: "Unmatched comfort and Kanye West's iconic design.",
    price: 3200.0,
    colors: ["MX OAT"],
  },
  {
    id: 4,
    image:
      "https://thefoschini.vtexassets.com/arquivos/ids/189922282-1200-1600?v=638845005657800000&width=1200&height=1600&aspect=true",
    title: "Air Jordan 1 Retro High",
    description: "The sneaker that started it all, a true classic.",
    price: 2500.0,
    colors: ["Black/Yellow", "UNC"],
  },
  {
    id: 5,
    image:
      "https://www.converse.co.za/api/catalog/product/a/1/a11751c_a_08x1.jpg?width=1000&height=1000&store=converse&image-type=image",
    title: "Converse Chuck 70",
    description: "Elevated design on a timeless silhouette.",
    price: 850.0,
    colors: ["Black", "Parchment", "Navy"],
  },
  {
    id: 6,
    image:
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
    title: "Nike Air Force 1",
    description: "An undeniable icon that transcends trends.",
    price: 1300.0,
    colors: ["White", "Black", "Wheat"],
  },
  {
    id: 7,
    image:
      "https://thefoschini.vtexassets.com/arquivos/ids/195844846-1200-1600?v=638850254721000000&width=1200&height=1600&aspect=true",
    title: "Vans Old Skool",
    description: "The classic side stripe skate shoe with modern comfort.",
    price: 900.0,
    colors: ["Black/White", "Navy", "Checkerboard"],
  },
  {
    id: 8,
    image:
      "https://thefoschini.vtexassets.com/arquivos/ids/196361094-1200-1600?v=638851551033030000&width=1200&height=1600&aspect=true",
    title: "Puma Suede Classic",
    description: "A true streetwear legend with rich suede upper.",
    price: 1100.0,
    colors: ["Black", "Red", "Blue"],
  },
  {
    id: 9,
    image:
      "https://thefoschini.vtexassets.com/arquivos/ids/195687744-1200-1600?v=638850056239000000&width=1200&height=1600&aspect=true",
    title: "Reebok Club C 85",
    description: "Clean, minimalist design for everyday wear.",
    price: 1050.0,
    colors: ["White", "Green"],
  },
  {
    id: 10,
    image:
      "https://thefoschini.vtexassets.com/arquivos/ids/193477473-1200-1600?v=638848880945470000&width=1200&height=1600&aspect=true",
    title: "Adidas Stan Smith",
    description: "An iconic court sneaker that never goes out of style.",
    price: 1200.0,
    colors: ["White/Green", "Black", "White"],
  },
];

// Sneakers component (now acts as the product listing page)
//   - setTotalPrice: Function to update the total price in App.js.
//   - setIsTotalPriceVisible: Function to control the visibility of TotalPrice component.
function Sneakers({ setTotalPrice, setIsTotalPriceVisible }) {
  // State to manage the selected color for each product (keyed by product ID).
  const [selectedColors, setSelectedColors] = useState({});

  // Handler for selecting a color from a dropdown.
  const handleColorSelect = (productId, color) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [productId]: color,
    }));
  };

  // Handler for the "Buy" button click.
  const handleBuyClick = (price) => {
    setTotalPrice((prevPrice) => prevPrice + price);
    setIsTotalPriceVisible(true);
  };

  return (
    <div className="sneakers-page-container">
      <h2 className="text-center mb-4">Our Latest Sneaker Drops</h2>
      <p className="card-text text-center mb-4">
        Discover exclusive sneakers from the biggest brands!
      </p>
      {/* Bootstrap grid for displaying sneaker cards */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Map over the sneakersData array to render each product */}
        {sneakersData.map((sneaker) => (
          <div className="col d-flex" key={sneaker.id}>
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={sneaker.image}
                alt={sneaker.title}
                // Use a fixed height for images to ensure consistent card heights
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{sneaker.title}</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  {sneaker.description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-auto pt-2">
                  <div>
                    <Card.Text className="mb-0 fs-5 fw-bold">
                      R{sneaker.price.toFixed(2)}
                    </Card.Text>
                  </div>
                  <Dropdown
                    onSelect={(color) => handleColorSelect(sneaker.id, color)}
                  >
                    <Dropdown.Toggle
                      variant="secondary"
                      id={`dropdown-button-sneaker-${sneaker.id}`}
                    >
                      {/* Display selected color or default text */}
                      {selectedColors[sneaker.id] || "Select Color"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {/* Map over sneaker colors to create dropdown items */}
                      {sneaker.colors.map((color) => (
                        <Dropdown.Item key={color} eventKey={color}>
                          {color}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Button
                  variant="primary"
                  className="w-100 mt-3"
                  onClick={() => handleBuyClick(sneaker.price)}
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sneakers;

// import React from "react";

// function Sneakers() {
//   // Sneakers data array
//   const sneakers = [
//     {
//       id: 1,
//       name: "Nike Air Force 1",
//       price: 3499.99,
//       description: "Classic design, timeless style.",
//       image:
//         "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       id: 2,
//       name: "Nike Dunk Low",
//       price: 2999.99,
//       description: "Skate culture meets street style.",
//       image:
//         "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       id: 3,
//       name: "Adidas Yeezy Boost 350 V2",
//       price: 5299.99,
//       description: "Comfort and iconic design.",
//       image:
//         "https://courtorder.co.za/cdn/shop/files/adidas-adidas-yeezy-boost-350-v2-fade-sneakers-53004874514795_1080x.jpg?v=1730004972",
//     },
//     {
//       id: 4,
//       name: "New Balance 550",
//       price: 1799.99,
//       description: "Retro basketball silhouette.",
//       image:
//         "https://nb.scene7.com/is/image/NB/bb550lem_nb_02_i?$pdpflexf2MD2x$&qlt=70&fmt=webp&wid=1026&hei=1026",
//     },
//     {
//       id: 5,
//       name: "Converse Chuck 70",
//       price: 1499.99,
//       description: "Premium version of the classic.",
//       image:
//         "https://www.converse.co.za/api/catalog/product/a/1/a11751c_a_08x1.jpg?width=1000&height=1000&store=converse&image-type=image",
//     },
//     {
//       id: 6,
//       name: "Puma Suede Classic",
//       price: 1799.99,
//       description: "Iconic streetwear sneaker.",
//       image:
//         "https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/images/403700/01/sv01/fnd/ZAF/fmt/png",
//     },
//   ];

//   return (
//     <div className="container mt-4">
//       <div className="card shadow-sm p-4">
//         <h2 className="card-title text-center mb-4">
//           Our Latest Sneaker Collection
//         </h2>
//         <p className="card-text text-center mb-4">
//           Discover exclusive sneakers from the biggest brands
//         </p>

//         <div className="row row-cols-1 row-cols-md-3 g-4">
//           {sneakers.map((sneaker) => (
//             <div className="col" key={sneaker.id}>
//               <div className="card h-100">
//                 <img
//                   src={sneaker.image}
//                   className="card-img-top"
//                   alt={sneaker.name}
//                   style={{ height: "250px", objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{sneaker.name}</h5>
//                   <p className="card-text">{sneaker.description}</p>
//                   <p className="card-text fw-bold">
//                     R{sneaker.price.toFixed(2)}
//                   </p>
//                   <button className="btn btn-primary">Add to Cart</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sneakers;
