// export default function Marketplace() {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <h1 className="text-3xl font-bold text-green-600">Local Marketplace</h1>
//       </div>
//     );
// }
import React, { useState, useEffect } from "react";

const Marketplace = () => {
  const [marketplaceItems, setMarketplaceItems] = useState([]);
  const [clothingItems, setClothingItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch clothing items from backend
  // useEffect(() => {
  //   const fetchClothing = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/clothing");
  //       const data = await response.json();
  //       setClothingItems(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching clothing items:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchClothing();
  // }, []);
  // useEffect(() => {
  //   fetch("http://localhost:5000/marketplace")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Fetched marketplace data:", data); // Check if items are being fetched
  //       setMarketplaceItems(data);
  //     })
  //     .catch((err) => console.error("Error fetching marketplace items:", err));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("mongodb://localhost:27017/fashion_project ");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setMarketplaceItems(data);
      } catch (error) {
        console.error("Error fetching marketplace items:", error);
      }finally {
      setLoading(false);  // Set loading to false whether request succeeds or fails
    }
    };
    fetchData();
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        🛍️ Marketplace
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading items...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clothingItems.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-56 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3 text-gray-900">
                {item.name}
              </h3>
              <p className="text-gray-600">Brand: {item.brand || "Unknown"}</p>
              <p className="text-gray-800 font-bold">Price: ${item.price}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Marketplace;