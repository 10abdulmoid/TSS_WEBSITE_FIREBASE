import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import { Camera, Download, User } from 'lucide-react';

const ProfileN8NEvent: React.FC = () => {
  const [name, setName] = useState('Your Name');
  const [institute, setInstitute] = useState('Your Institute');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadCard = async () => {
    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          width: 1000,
          height: 600,
        });
        
        const link = document.createElement('a');
        link.download = `${name.replace(/\s+/g, '_')}_N8N_Event_Card.png`;
        link.href = canvas.toDataURL();
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">N8N Event Card Generator</h1>
          <p className="text-gray-600">Create your personalized event participation card</p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Customize Your Card</h2>
            
            <div className="space-y-6">
              {/* Profile Picture Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Picture
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Upload Photo
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Institute Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Institute/Organization
                </label>
                <input
                  type="text"
                  value={institute}
                  onChange={(e) => setInstitute(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your institute name"
                />
              </div>

              {/* Download Button */}
              <button
                onClick={downloadCard}
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Card
              </button>
            </div>
          </motion.div>

          {/* Card Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="xl:col-span-2 bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Preview</h2>
            
            {/* Card Preview */}
            <div className="flex justify-center overflow-x-auto">
              <div
                ref={cardRef}
                className="w-full max-w-none bg-gradient-to-br from-orange-400 via-red-500 to-red-600 p-4 rounded-2xl"
                style={{ aspectRatio: '16/9', minWidth: '900px', width: '900px' }}
              >
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Left Column */}
                  <div className="flex flex-col gap-4">
                    {/* Top Left Card - Profile Picture */}
                    <div className="bg-red-800/80 rounded-xl h-48 flex flex-col items-center justify-center p-4">
                      <div className="flex-1 flex items-center justify-center overflow-hidden rounded-lg mb-3">
                        {profileImage ? (
                          <img 
                            src={profileImage} 
                            alt="Profile" 
                            className="w-full h-full object-cover max-w-24 max-h-24 rounded-lg"
                          />
                        ) : (
                          <User className="w-16 h-16 text-white/60" />
                        )}
                      </div>
                      <div className="text-center">
                        <h3 className="text-white text-sm font-bold">{name}</h3>
                        <p className="text-white/90 text-xs">{institute}</p>
                      </div>
                    </div>

                    {/* Bottom Left Card - Partners */}
                    <div className="bg-red-800/80 rounded-xl p-4 flex-1">
                      <h3 className="text-white text-lg font-semibold mb-4">Our Partners & Sponsors</h3>
                      <div className="flex items-center gap-3">
                        {/* Logo 1 */}
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src="/logos/20250912_164724_20250913_100712_0000.png"
                            alt="Partner Logo 1"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement!.innerHTML = `
                                <div class="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                                  <div class="text-white text-xs font-bold text-center leading-tight">
                                    Partner<br />1
                                  </div>
                                </div>
                              `;
                            }}
                          />
                        </div>

                        {/* Logo 2 */}
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src="/logos/IMG_20250825_162157.jpg"
                            alt="Partner Logo 2"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement!.innerHTML = `
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                  <div class="text-purple-600 text-xs font-bold text-center leading-tight">
                                    Partner<br />2
                                  </div>
                                </div>
                              `;
                            }}
                          />
                        </div>

                        {/* Logo 3 */}
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src="/logos/InShot_20250908_004111125.jpg"
                            alt="Partner Logo 3"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement!.innerHTML = `
                                <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                  <div class="text-white text-xs font-bold">Partner 3</div>
                                </div>
                              `;
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Main Content */}
                  <div className="bg-red-800/80 rounded-xl p-6 flex flex-col justify-between">
                    {/* Date */}
                    <div className="text-right mb-6">
                      <div className="text-white text-5xl lg:text-6xl font-light leading-none">14</div>
                      <div className="text-white text-2xl lg:text-3xl font-serif italic">Sep</div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h1 className="text-white text-2xl lg:text-3xl font-serif leading-tight mb-6">
                        I'm Volunteering
                        <br />
                        N&N Workshop
                      </h1>

                      <div className="mb-4">
                        <p className="text-white text-base font-script italic mb-1">Organised By</p>
                        <h2 className="text-white text-xl lg:text-2xl font-bold leading-tight">
                          The Student Spot
                          <br />& Founders Hub
                        </h2>
                      </div>
                    </div>

                    {/* Bottom Logos */}
                    <div className="flex items-center justify-between mt-4">
                      {/* The Student Spot Logo */}
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 overflow-hidden rounded-lg">
                          <img
                            src="/logos/file_000000009e006230bb897df63b4ca344_11zon.png"
                            alt="The Student Spot"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement!.innerHTML = `
                                <div class="w-10 h-10 flex items-center justify-center">
                                  <div class="text-orange-400 text-xl">👥</div>
                                </div>
                              `;
                            }}
                          />
                        </div>
                        <div className="text-white text-xs font-semibold">
                          The
                          <br />
                          Student Spot
                        </div>
                      </div>

                      {/* Founders Hub Logo */}
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 overflow-hidden rounded-lg">
                          <img
                            src="/logos/name.png"
                            alt="Founders Hub"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement!.innerHTML = `
                                <div class="w-10 h-10 flex items-center justify-center">
                                  <div class="text-orange-400 text-xl">🏢</div>
                                </div>
                              `;
                            }}
                          />
                        </div>
                        <div className="text-white text-xs font-semibold">
                          Founders
                          <br />
                          Hub
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfileN8NEvent;
