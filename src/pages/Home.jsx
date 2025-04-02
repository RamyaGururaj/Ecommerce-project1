import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const generateOutfits = (gender, style) => {
  const outfitTemplates = {
    female: {
      Bohemian: [
        { id: 1, image: 'https://via.placeholder.com/300x400', name: 'Boho Chic Dress', price: 79.99 },
        { id: 2, image: 'https://via.placeholder.com/300x400', name: 'Flowy Maxi Skirt', price: 59.99 }
      ],
      Classic: [
        { id: 3, image: 'https://via.placeholder.com/300x400', name: 'Tailored Blazer', price: 129.99 },
        { id: 4, image: 'https://via.placeholder.com/300x400', name: 'White Silk Blouse', price: 89.99 }
      ]
    },
    male: {
      'Street Style': [
        { id: 1, image: 'https://via.placeholder.com/300x400', name: 'Distressed Denim Jacket', price: 99.99 },
        { id: 2, image: 'https://via.placeholder.com/300x400', name: 'Graphic Tee', price: 34.99 }
      ],
      Classic: [
        { id: 3, image: 'https://via.placeholder.com/300x400', name: 'Crisp White Shirt', price: 79.99 },
        { id: 4, image: 'https://via.placeholder.com/300x400', name: 'Slim Fit Chinos', price: 89.99 }
      ]
    }
  };

  return outfitTemplates[gender]?.[style] || [];
};

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [outfits, setOutfits] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) {
      setUserProfile(storedProfile);
      setOutfits(generateOutfits(storedProfile.gender, storedProfile.style));
    } else {
      setTimeout(() => navigate('/onboarding'), 1000);
      return;
    }

    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [navigate]);

  const handleVirtualTryOn = useCallback(
    (outfitId) => {
      navigate(`/virtual-try-on/${outfitId}`);
    },
    [navigate]
  );

  if (!userProfile)
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );

  return (
    <div className={`min-h-screen ${userProfile.gender === 'female' ? 'bg-pink-50' : 'bg-blue-50'}`}>
      {/* Header */}
      <header className={`p-4 ${userProfile.gender === 'female' ? 'bg-pink-200' : 'bg-blue-200'}`}>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Welcome, {userProfile.name}!</h1>
          <button onClick={() => navigate('/profile')} className="bg-white p-2 rounded-full shadow-md">
            👤
          </button>
        </div>
      </header>

      {/* Display backend message */}
      <div className="p-4 bg-gray-100 text-center">
        <p className="text-gray-700 font-semibold">{message}</p>
      </div>

      {/* Recommended Outfits */}
      <section className="p-4">
        <h2 className="text-xl font-semibold mb-4">Recommended for {userProfile.style} Style</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {outfits.map((outfit) => (
            <div key={outfit.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={outfit.image} alt={outfit.name} className="w-full h-64 object-cover" />
              <div className="p-2">
                <h3 className="font-medium">{outfit.name}</h3>
                <p className="text-gray-600">${outfit.price}</p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => handleVirtualTryOn(outfit.id)}
                    className="bg-purple-500 text-white px-2 py-1 rounded-lg text-sm"
                  >
                    Try On
                  </button>
                  <button
                    onClick={() => navigate('/marketplace')}
                    className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
        <div className="flex justify-around">
          <button onClick={() => navigate('/marketplace')} className="flex flex-col items-center">
            🛍️ Marketplace
          </button>
          <button onClick={() => navigate('/reels')} className="flex flex-col items-center">
            🎥 Reels
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;