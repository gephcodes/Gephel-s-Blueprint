/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Lock } from 'lucide-react';

const VIDEO_DATA = [
  { id: '9tKYKVJBA3w', type: 'short' },
  { id: 'WnXCZ3ODTM4', type: 'short' },
  { id: 'FGPrey0uR_A', type: 'short' },
  { id: 'uOCd4OfWdYE', type: 'short' },
  { id: 'gXhyse5urMw', type: 'short' },
  { id: 'pMqznN3W2QQ', type: 'short' },
  { id: 'lpznB6Ha_Fc', type: 'short' },
  { id: '-kU_Uu98zYY', type: 'standard' },
  { id: 'uvlGcDXzBD0', type: 'standard' },
  { id: 'pNPb6y9Bqjg', type: 'standard' },
  { id: 'wK44LWfOYy8', type: 'standard' },
];

export default function App() {
  const [isIntroExpanded, setIsIntroExpanded] = useState(true);
  const [isMindsetExpanded, setIsMindsetExpanded] = useState(false);
  const [isBusinessExpanded, setIsBusinessExpanded] = useState(false);
  const [activeMindsetVideo, setActiveMindsetVideo] = useState<{ id: string, type: string } | null>(null);

  // Randomize the videos on mount
  const mindsetVideos = useMemo(() => {
    return [...VIDEO_DATA].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-blue-200 selection:text-black">
      {/* Refined Header */}
      <header className="sticky top-0 z-50 bg-[#fbfbfd]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-center sm:justify-start">
          <h1 className="text-xl font-semibold tracking-tight">Gephel's Blueprint</h1>
        </div>
      </header>

      <main className="px-6 py-12 max-w-3xl mx-auto">
        {/* Cover Section - Apple Style */}
        <div className="mb-12 relative overflow-hidden rounded-[2rem] bg-black text-white p-10 sm:p-20 text-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-3">The Journey Begins.</h2>
            <p className="text-lg sm:text-xl text-gray-300 font-medium">Forging the Elite</p>
          </div>
        </div>

        {/* Intro Section Toggle */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 border border-black/5">
          <button 
            onClick={() => setIsIntroExpanded(!isIntroExpanded)}
            className="w-full text-left px-8 py-6 focus:outline-none flex justify-between items-center hover:bg-gray-50/50 transition-colors"
          >
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
              <p className="text-gray-500 text-sm mt-1 font-medium">Start your journey here</p>
            </div>
            <div className="text-gray-400 bg-gray-100/80 rounded-full p-2 transition-transform duration-300">
              {isIntroExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </button>

          {/* Expanded Content */}
          <div 
            className={`transition-all duration-500 ease-in-out origin-top ${
              isIntroExpanded ? 'opacity-100 max-h-[800px] pb-8' : 'opacity-0 max-h-0'
            }`}
          >
            <div className="px-8 pt-2">
              <div className="aspect-[9/16] w-full max-w-[320px] mx-auto rounded-3xl overflow-hidden bg-black shadow-xl ring-1 ring-black/10">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/HmbEwJvxNBY?autoplay=1&mute=1&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&controls=1"
                  title="Intro Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Mindset Module Toggle */}
        <div className="mt-8 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 border border-black/5">
          <button 
            onClick={() => setIsMindsetExpanded(!isMindsetExpanded)}
            className="w-full text-left px-8 py-6 focus:outline-none flex justify-between items-center hover:bg-gray-50/50 transition-colors"
          >
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Mindset Module</h2>
              <p className="text-gray-500 text-sm mt-1 font-medium">{mindsetVideos.length} Sessions</p>
            </div>
            <div className="text-gray-400 bg-gray-100/80 rounded-full p-2 transition-transform duration-300">
              {isMindsetExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </button>

          {/* Expanded Content */}
          <div 
            className={`transition-all duration-500 ease-in-out origin-top ${
              isMindsetExpanded ? 'opacity-100 max-h-[1600px] pb-8' : 'opacity-0 max-h-0'
            }`}
          >
            <div className="px-8 pt-2">
              
              {/* Active Video Player */}
              {activeMindsetVideo && (
                <div className="mb-8 relative flex flex-col items-center">
                  <div className="w-full flex justify-end mb-3">
                    <button 
                      onClick={() => setActiveMindsetVideo(null)}
                      className="text-sm font-medium text-gray-400 hover:text-gray-800 transition-colors"
                    >
                      Close Player
                    </button>
                  </div>
                  <div className={`w-full ${activeMindsetVideo.type === 'short' ? 'max-w-[320px] aspect-[9/16]' : 'aspect-video'} mx-auto rounded-3xl overflow-hidden bg-black shadow-xl ring-1 ring-black/10 transition-all duration-500`}>
                    <iframe
                      key={activeMindsetVideo.id} // Force re-render iframe on change
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${activeMindsetVideo.id}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&controls=1`}
                      title="Mindset Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="border-0"
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Grid of Numbers */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {mindsetVideos.map((vid, index) => {
                  const isActive = activeMindsetVideo?.id === vid.id;
                  return (
                    <button
                      key={vid.id}
                      onClick={() => setActiveMindsetVideo(vid)}
                      className={`
                        aspect-square rounded-2xl flex items-center justify-center text-2xl font-semibold transition-all duration-300
                        ${isActive 
                          ? 'bg-black text-white shadow-[0_8px_16px_rgb(0,0,0,0.2)] scale-[0.98]' 
                          : 'bg-white text-gray-800 hover:bg-gray-50 shadow-sm border border-black/5 hover:border-black/10'}
                      `}
                    >
                      {index + 1}
                    </button>
                  )
                })}
              </div>

            </div>
          </div>
        </div>

        {/* Business Fundamentals Module Toggle */}
        <div className="mt-8 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 border border-black/5">
          <button 
            onClick={() => setIsBusinessExpanded(!isBusinessExpanded)}
            className="w-full text-left px-8 py-6 focus:outline-none flex justify-between items-center hover:bg-gray-50/50 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Business Fundamentals</h2>
                <Lock size={18} className="text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm mt-1 font-medium">Coming Soon</p>
            </div>
            <div className="text-gray-400 bg-gray-100/80 rounded-full p-2 transition-transform duration-300">
              {isBusinessExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </button>

          {/* Expanded Content */}
          <div 
            className={`transition-all duration-500 ease-in-out origin-top ${
              isBusinessExpanded ? 'opacity-100 max-h-[400px] pb-8' : 'opacity-0 max-h-0'
            }`}
          >
            <div className="px-8 pt-2">
              <div className="p-12 bg-[#fbfbfd] rounded-[2rem] border border-black/5 flex flex-col items-center justify-center text-center shadow-inner">
                <div className="bg-white p-4 rounded-full mb-4 shadow-sm border border-black/5">
                  <Lock size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight mb-2">Module Locked</h3>
                <p className="text-gray-500 font-medium max-w-sm">
                  This module is currently in development. Check back later to master the business fundamentals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
