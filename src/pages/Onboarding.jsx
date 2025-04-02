import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingPage = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [style, setStyle] = useState('');
  const [avatar, setAvatar] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const styleOptions = {
    female: ['Bohemian', 'Classic', 'Preppy', 'Minimalist', 'Vintage', 'Glam'],
    male: ['Street Style', 'Classic', 'Sporty', 'Minimalist', 'Vintage', 'Formal'],
  };

  const avatarOptions = {
    female: [
      '/avatars/female1.png',
      '/avatars/female2.png',
      '/avatars/female3.png'
    ],
    male: [
      '/avatars/male1.png',
      '/avatars/male2.png',
      '/avatars/male3.png'
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !gender || !style || !avatar) {
      setError('Please fill all fields.');
      return;
    }
    localStorage.setItem('userProfile', JSON.stringify({ name, gender, style, avatar }));
    navigate('/home');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${gender === 'female' ? 'bg-pink-50' : 'bg-blue-50'}`}>
      <div className={`w-full max-w-md p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${gender ? 'bg-white' : 'bg-gray-100'}`}>
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Welcome to StyleSync
        </h1>

        {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block mb-2 font-medium">Your Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Gender Selection */}
          <div>
            <label className="block mb-2 font-medium">Select Gender</label>
            <div className="flex space-x-4">
              {['female', 'male'].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => { setGender(g); setStyle(''); setAvatar(''); setError(''); }}
                  className={`w-full p-3 rounded-lg transition-all duration-200 ${gender === g ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                  aria-label={`Select ${g}`}
                >
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Avatar Selection */}
          {gender && (
            <div>
              <label className="block mb-2 font-medium">Choose an Avatar</label>
              <div className="flex space-x-4 justify-center">
                {avatarOptions[gender].map((avatarOption, index) => (
                  <img
                    key={index}
                    src={avatarOption}
                    alt={`Avatar ${index + 1}`}
                    onClick={() => setAvatar(avatarOption)}
                    className={`w-16 h-16 rounded-full border-2 cursor-pointer transition-all duration-200 ${
                      avatar === avatarOption ? 'border-purple-500 scale-110' : 'border-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Style Selection */}
          {gender && (
            <div>
              <label className="block mb-2 font-medium">Choose Your Style</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {styleOptions[gender].map((styleOption) => (
                  <button
                    key={styleOption}
                    type="button"
                    onClick={() => setStyle(styleOption)}
                    className={`p-2 rounded-lg text-sm transition-all duration-200 ${style === styleOption ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
                    aria-label={`Select ${styleOption} style`}
                  >
                    {styleOption}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={()=>navigate("/")}
            className={`w-full p-3 rounded-lg mt-4 transition-all duration-200 ${(name && gender && style && avatar) ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Start Your Style Journey
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnboardingPage;