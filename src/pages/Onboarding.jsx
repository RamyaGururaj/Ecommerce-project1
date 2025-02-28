import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const [name, setName] = useState("");
  const [style, setStyle] = useState("Casual");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User:", name, "Style:", style);
    navigate("/"); // Redirect to home after submission
  };

  const styleOptions = [
    { name: "Casual", icon: "👕", description: "Everyday comfortable attire" },
    { name: "Formal", icon: "👔", description: "Professional and elegant wear" },
    { name: "Sporty", icon: "🏃‍♂️", description: "Athletic and active lifestyle" },
    { name: "Bohemian", icon: "🧵", description: "Free-spirited and artistic" },
    { name: "Minimalist", icon: "✨", description: "Simple, clean aesthetics" }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-md px-4">
        {/* Header and logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-purple-800">Virtual Fashion</h1>
          <p className="text-gray-600">Your personal style companion</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Progress indicator */}
          <div className="w-full bg-gray-200 h-2">
            <div 
              className="bg-purple-600 h-2 transition-all duration-300" 
              style={{ width: step === 1 ? "50%" : "100%" }}
            ></div>
          </div>

          <div className="p-6">
            {step === 1 ? (
              <>
                <h2 className="text-2xl font-bold mb-2">Welcome!</h2>
                <p className="text-gray-600 mb-6">Let's personalize your fashion experience</p>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    What should we call you?
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <button
                  type="button"
                  onClick={() => name.trim() && setStep(2)}
                  disabled={!name.trim()}
                  className={`w-full py-3 rounded-lg text-white font-medium ${
                    name.trim() 
                      ? "bg-purple-600 hover:bg-purple-700" 
                      : "bg-purple-300 cursor-not-allowed"
                  } transition-colors`}
                >
                  Continue
                </button>
              </>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-2">Your Style</h2>
                <p className="text-gray-600 mb-6">Choose the style that best represents you</p>
                
                <div className="space-y-3 mb-6">
                  {styleOptions.map((option) => (
                    <div
                      key={option.name}
                      onClick={() => setStyle(option.name)}
                      className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                        style === option.name
                          ? "bg-purple-100 border-2 border-purple-500"
                          : "bg-gray-50 border border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <div className="text-2xl mr-3">{option.icon}</div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{option.name}</h3>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                      <div className={`h-5 w-5 rounded-full border ${
                        style === option.name 
                          ? "border-purple-600 bg-purple-600" 
                          : "border-gray-300"
                      }`}>
                        {style === option.name && (
                          <div className="h-full w-full flex items-center justify-center text-white">
                            ✓
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}