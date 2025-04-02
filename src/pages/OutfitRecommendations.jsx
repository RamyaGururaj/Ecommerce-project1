import React from "react";
const outfits = [
    { id: 1, name: "Casual Wear", image: "/assets/casual.jpg", category: "Casual" },
    { id: 2, name: "Formal Suit", image: "/assets/formal.jpg", category: "Formal" },
    { id: 3, name: "Sporty Look", image: "/assets/sporty.jpg", category: "Sporty" },
  ];

  const OutfitRecommendations = () => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Outfit Recommendations</h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-4">
          {outfits.map((outfit) => (
            <div key={outfit.id} className="border rounded-lg p-4 shadow-md">
              <img src={outfit.image} alt={outfit.name} className="w-full h-40 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-semibold">{outfit.name}</h3>
              <p className="text-sm text-gray-500">{outfit.category}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Try On
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OutfitRecommendations;
  