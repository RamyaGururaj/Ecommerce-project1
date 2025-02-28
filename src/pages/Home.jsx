// export default function Home() {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <h1 className="text-4xl font-bold text-blue-600">Welcome to Virtual Try-On</h1>
//         <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind is Working!</h1>
//       </div>
//     );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Summer Floral Dress",
      price: "$89.99",
      category: "Dresses",
      image: "/api/placeholder/300/400"
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: "$129.99",
      category: "Outerwear",
      image: "/api/placeholder/300/400"
    },
    {
      id: 3,
      name: "Casual White Tee",
      price: "$29.99",
      category: "Tops",
      image: "/api/placeholder/300/400"
    },
    {
      id: 4,
      name: "Slim Fit Trousers",
      price: "$79.99",
      category: "Bottoms",
      image: "/api/placeholder/300/400"
    }
  ];

  // Sample trending outfits
  const trendingOutfits = [
    {
      id: 1,
      title: "Summer Casual",
      creator: "FashionPro",
      likes: 1243,
      image: "/api/placeholder/250/350"
    },
    {
      id: 2,
      title: "Office Chic",
      creator: "StyleGuru",
      likes: 856,
      image: "/api/placeholder/250/350"
    },
    {
      id: 3,
      title: "Weekend Vibes",
      creator: "TrendSetter",
      likes: 1092,
      image: "/api/placeholder/250/350"
    }
  ];

  // Category filters
  const categories = ["All", "Dresses", "Tops", "Bottoms", "Outerwear", "Accessories"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Discover Your Perfect Style
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
                Try on clothes virtually, get personalized recommendations, and shop from local designers.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => navigate("/virtual-try-on")}
                  className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition"
                >
                  Try On Now
                </button>
                <button 
                  onClick={() => navigate("/marketplace")}
                  className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition"
                >
                  Shop Collection
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-xl">
                <img 
                  src="/api/placeholder/500/600" 
                  alt="Fashion Model" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 rounded-lg p-3 shadow-lg">
                <div className="text-sm font-medium">Virtual Try-On</div>
                <div className="text-xs opacity-80">See how it looks on you</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className="relative block w-full h-12 text-gray-50"
            fill="currentColor"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V69.81C57.11,67,112.64,49.39,175.63,34.82,243.35,19.21,310.73,37.08,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
          <div className="mt-4 sm:mt-0 overflow-x-auto">
            <div className="flex space-x-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } transition`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div 
              key={product.id} 
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition duration-300"
                />
                <button className="absolute bottom-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-indigo-600 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <div className="text-xs font-medium text-indigo-600 mb-1">{product.category}</div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
                <div className="text-gray-700 font-bold">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition">
            View All Products
          </button>
        </div>
      </div>
      
      {/* Try-On Feature Banner */}
      <div className="bg-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Virtual Try-On Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                See how clothes look on you before you buy. Our advanced AR technology creates a realistic preview of any outfit.
              </p>
              <button 
                onClick={() => navigate("/virtual-try-on")}
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
              >
                Try It Now
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-80 bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/api/placeholder/300/400" 
                  alt="Virtual Try-On Demo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="text-sm font-bold mb-1">Try On Now</div>
                    <div className="text-xs opacity-80">See it on your body</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trending Outfits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Trending GRWM</h2>
        
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {trendingOutfits.map(outfit => (
            <div key={outfit.id} className="flex-shrink-0 w-60 group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={outfit.image} 
                  alt={outfit.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-800">{outfit.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>by {outfit.creator}</span>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {outfit.likes}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate("/reels")}
            className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition"
          >
            View All Reels
          </button>
        </div>
      </div>
      
      {/* Local Producers Banner */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Support Local Designers</h2>
            <p className="text-lg opacity-80 mb-8">
              Discover unique pieces from independent designers and sustainable brands in your area.
            </p>
            <button 
              onClick={() => navigate("/marketplace")}
              className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition"
            >
              Explore Marketplace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}